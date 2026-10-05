import Stripe from "https://esm.sh/stripe@18?target=deno"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2025-05-28.basil",
})

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
)

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { items, shipping, form } = await req.json()

    // 1. Calculate order total
    const subtotal = items.reduce((sum: number, item: any) => sum + Number(item.price) * Number(item.quantity), 0)
    const shippingPrice = Number(shipping.price)
    const total = subtotal + shippingPrice

    // 2. Create the order in pending status using service role key (bypassing RLS)
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        status: "pending",
        total,
        customer_email: form.email,

        shipping_name: form.name,
        shipping_phone: form.phone,
        shipping_country: "MX",
        shipping_state: form.state,
        shipping_city: form.city,
        shipping_postal_code: form.postalCode,
        shipping_line1: `${form.street} ${form.number}, ${form.suburb}`,
        shipping_line2: `${form.city}, ${form.state}`,

        quotation_id: shipping.quotationId || null,
        rate_id: shipping.id || null,
        shipping_carrier: shipping.carrier || null,
        shipping_service: shipping.service || null,
      })
      .select()
      .single()

    if (orderError) {
      throw new Error(`ORDER CREATION ERROR: ${orderError.message}`)
    }

    // 3. Create the order items
    const orderItems = items.map((item: any) => ({
      order_id: order.id,
      product_id: item.id,
      quantity: item.quantity,
      price: item.price,
    }))

    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(orderItems)

    if (itemsError) {
      throw new Error(`ORDER ITEMS CREATION ERROR: ${itemsError.message}`)
    }

    // 4. Create Stripe Checkout Session
    const origin = req.headers.get("origin") || "http://localhost:5173"

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      locale: "es",

      metadata: {
        order_id: String(order.id),
      },  

      line_items: [
        ...items.map((item: any) => ({
          price_data: {
            currency: "mxn",
            product_data: {
              name: item.name,
            },
            unit_amount: Math.round(Number(item.price) * 100),
          },
          quantity: item.quantity,
        })),

        {
          price_data: {
            currency: "mxn",
            product_data: {
              name: `Envío - ${shipping.carrier} (${shipping.service})`,
            },
            unit_amount: Math.round(Number(shipping.price) * 100),
          },
          quantity: 1,
        },
      ],  

      success_url: `${origin}/success`,
      cancel_url: `${origin}/checkout`,
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }

    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    })
  }
})