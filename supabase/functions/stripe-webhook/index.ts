import Stripe from "https://esm.sh/stripe@18?target=deno"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { sendNewOrderEmail } from "../_shared/email.ts";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2025-05-28.basil",
})

const supabase = createClient(
  "https://rjpvzmtnottuvagzaybe.supabase.co",
  Deno.env.get("SERVICE_ROLE_KEY")!
)


Deno.serve(async (req) => {
  try {
    const body = await req.text()
    const signature = req.headers.get("stripe-signature")

    if (!signature) {
      throw new Error("No stripe-signature header")
    }

    const event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      Deno.env.get("STRIPE_WEBHOOK_SECRET")!
    )

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session
      const orderId = session.metadata?.order_id

      if (!orderId) {
        throw new Error("No order_id found in metadata")
      }

      // Update the existing order to 'paid' status and record session ID
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .update({
          status: "paid",
          stripe_session_id: session.id,
          customer_email: session.customer_details?.email || null,
        })
        .eq("id", orderId)
        .select()
        .single()

      if (orderError) {
        throw new Error(`ORDER ERROR: ${orderError.message}`)
      }

      // Retrieve order items from database
      const { data: orderItems, error: itemsError } = await supabase
        .from("order_items")
        .select("quantity, price, product_id")
        .eq("order_id", orderId)

      if (itemsError) {
        throw new Error(`ITEMS ERROR: ${itemsError.message}`)
      }

      // Fetch product names from Supabase for the email template
      let itemsWithNames = orderItems.map((item: any) => ({
        id: item.product_id,
        quantity: item.quantity,
        price: item.price,
        name: "Producto de Limpieza",
      }))

      try {
        const productIds = orderItems.map((item: any) => item.product_id)
        const { data: dbProducts } = await supabase
          .from("productos")
          .select("id, name")
          .in("id", productIds)

        if (dbProducts) {
          itemsWithNames = orderItems.map((item: any) => {
            const dbProd = dbProducts.find((p: any) => p.id === item.product_id)
            return {
              id: item.product_id,
              quantity: item.quantity,
              price: item.price,
              name: dbProd?.name || "Producto de Limpieza",
            }
          })
        }
      } catch (err) {
        console.error("Error fetching product names for email:", err)
      }

      await sendNewOrderEmail(order, itemsWithNames)

      // 5. Automatic guide label creation using SkydropX API
      try {
        const rateId = order.rate_id
        const quotationId = order.quotation_id
        if (rateId && quotationId && rateId !== "fallback-standard") {
          await createSkydropxLabel(order.id, quotationId, rateId)
        } else {
          console.log(`Skipping guide creation for order ${order.id}: fallback shipping rate used or missing quotation/rate IDs.`)
          await supabase
            .from("orders")
            .update({
              shipping_status: "pending_manual",
              tracking_number: "FALLBACK-GUIDE",
            })
            .eq("id", order.id)
        }
      } catch (labelErr) {
        console.error("Error creating guide:", labelErr)
      }
    }


    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
})

async function createSkydropxLabel(orderId: string, quotationId: string, rateId: any) {
  try {
    // 1. Fetch complete order information from Supabase
    const { data: order, error: fetchError } = await supabase
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .single()

    if (fetchError || !order) {
      console.error("No se pudo obtener la orden desde Supabase:", fetchError?.message)
      return
    }

    const clientId = Deno.env.get("SKYDROPX_CLIENT_ID")
    const clientSecret = Deno.env.get("SKYDROPX_CLIENT_SECRET")

    if (!clientId || !clientSecret) {
      console.error("Faltan credenciales de SkydropX en las variables de entorno")
      return
    }

    const tokenBody = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    })

    const tokenResponse = await fetch(
      "https://sb-pro.skydropx.com/api/v1/oauth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: tokenBody,
      }
    )

    if (tokenResponse.status !== 200) {
      console.error("Error al obtener el token de SkydropX:", await tokenResponse.text())
      return
    }

    const token = JSON.parse(await tokenResponse.text()).access_token

    // Fetch quotation details from SkydropX to get the dynamic package_number
    const quotationResponse = await fetch(
      `https://sb-pro.skydropx.com/api/v1/quotations/${quotationId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    if (quotationResponse.status !== 200) {
      console.error("Error al obtener la cotización de SkydropX:", await quotationResponse.text())
      return
    }

    const quotationData = await quotationResponse.json()
    const qObject = quotationData.quotation || quotationData
    const qPackages = qObject.packages || []

    if (qPackages.length === 0) {
      console.error("No se encontraron paquetes en la cotización de SkydropX")
      return
    }

    const packageNumberVal = qPackages[0].package_number
    const packageNumber = packageNumberVal !== undefined && packageNumberVal !== null ? String(packageNumberVal) : undefined

    // Define temporal constants with official packaging ("4G") and consignment note ("53131600") catalog codes
    const PACKAGE_TYPE_ID = "4G"
    const CONSIGNMENT_NOTE_ID = "53131600"

    // Construct the payload structure exactly matching official documentation
    const payload = {
      shipment: {
        rate_id: rateId,
        address_from: {
  name: "Power Cleaner",
  phone: "3121234567",
  email: "ventas@powercleanergroup.com",
  street1: "Santa María Nonoalco",
  reference: "Bodega",
},
        address_to: {
          name: order.shipping_name || "Cliente",
          phone: order.shipping_phone || "3121234567",
          email: order.customer_email || "cliente@example.com",
          street1: (order.shipping_line1 || "Dirección").substring(0, 45),
          city: order.shipping_city || "Guadalajara",
          state: order.shipping_state || "Jalisco",
          postal_code: order.shipping_postal_code || "44100",
          reference: (order.shipping_line2 || "Sin referencia").substring(0, 30),
        },
        packages: [
  { 
    package_number: packageNumber,
    package_protected: false,
    package_type: PACKAGE_TYPE_ID,
    consignment_note: CONSIGNMENT_NOTE_ID,
    weight: 1,
    length: 20,
    width: 20,
    height: 20,
  }
],  

      }
    }

    // Validate that required fields exist and are NOT undefined/null before POST
const s = payload.shipment;
const shipmentPackage = s.packages[0];

if (shipmentPackage.package_number === undefined || shipmentPackage.package_number === null) {
  throw new Error("Validation Error: package_number is undefined or null")
}

if (shipmentPackage.package_type === undefined || shipmentPackage.package_type === null) {
  throw new Error("Validation Error: package_type is undefined or null")
}

if (shipmentPackage.consignment_note === undefined || shipmentPackage.consignment_note === null) {
  throw new Error("Validation Error: consignment_note is undefined or null")
}

if (!s.rate_id) throw new Error("Falta el campo requerido: rate_id")
if (!s.address_from) throw new Error("Falta el campo requerido: address_from")
if (!s.address_to) throw new Error("Falta el campo requerido: address_to")
if (!s.packages || s.packages.length === 0) throw new Error("Falta el campo requerido: packages")

    // Log the shipment payload exactly as requested before executing the call
    console.log(JSON.stringify(payload, null, 2));

    // Call SkydropX Shipments API (official Pro endpoint for creating label from quotation)
    const shipmentResponse = await fetch(
      "https://sb-pro.skydropx.com/api/v1/shipments",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )

    const responseText = await shipmentResponse.text()
    console.log("SkydropX Shipments response status:", shipmentResponse.status)
    if (![200, 201, 202].includes(shipmentResponse.status)) {
      try {
        const errorData = JSON.parse(responseText)
        console.error(errorData)
      } catch {
        console.error(responseText)
      }
      return
    }

    const shipmentData = JSON.parse(responseText)
    const dataObj = shipmentData?.data
    const included = shipmentData?.included

    if (!dataObj) {
      console.error("No se encontró el objeto 'data' en la respuesta de SkydropX:", responseText)
      return
    }

    const guideId = dataObj.id
    const masterTracking = dataObj.attributes?.master_tracking_number

    // Find package details in included array
    const pkg = included?.find((inc: any) => inc.type === "package" || inc.type === "labels")
    const trackingNumber = masterTracking || pkg?.attributes?.tracking_number || null
    const labelUrl = pkg?.attributes?.label_url || dataObj.attributes?.label_url || null
    const trackingUrl = dataObj.attributes?.tracking_url_provider || pkg?.attributes?.tracking_url_provider || pkg?.attributes?.tracking_url || null
    const shippingStatus = dataObj.attributes?.workflow_status || dataObj.attributes?.status || "created"

    // Update the order in Supabase with the shipment/guide details
    const { error: updateError } = await supabase
      .from("orders")
      .update({
        guide_id: guideId ? String(guideId) : null,
        tracking_number: trackingNumber,
        tracking_url: trackingUrl,
        label_url: labelUrl,
        shipping_status: shippingStatus,
      })
      .eq("id", orderId)

    if (updateError) {
      console.error("Error al actualizar la orden en Supabase con los datos de la guía:", updateError.message)
    } else {
      console.log(`Guía de envío creada con éxito para la orden ${orderId}`)
    }
  } catch (err) {
    console.error("Excepción al crear la guía en SkydropX:", err)
  }
}