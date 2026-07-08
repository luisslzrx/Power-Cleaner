import Stripe from "https://esm.sh/stripe@18?target=deno"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

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

      const items = JSON.parse(session.metadata?.items || "[]")
      const total = (session.amount_total || 0) / 100

      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          status: "paid",
          total,
          stripe_session_id: session.id,
          customer_email: session.customer_details?.email || null,

          shipping_name: session.customer_details?.name || null,
          shipping_phone: session.customer_details?.phone || null,
          shipping_country: session.customer_details?.address?.country || null,
          shipping_state: session.customer_details?.address?.state || null,
          shipping_city: session.customer_details?.address?.city || null,
          shipping_postal_code: session.customer_details?.address?.postal_code || null,
          shipping_line1: session.customer_details?.address?.line1 || null,
          shipping_line2: session.customer_details?.address?.line2 || null,
        })
        .select()
        .single()

      if (orderError) {
        throw new Error(`ORDER ERROR: ${orderError.message}`)
      }

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
        throw new Error(`ITEMS ERROR: ${itemsError.message}`)
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