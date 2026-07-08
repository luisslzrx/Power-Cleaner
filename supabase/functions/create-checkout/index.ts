import Stripe from "https://esm.sh/stripe@18?target=deno"

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2025-05-28.basil",
})

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { items } = await req.json()

    const cleanItems = items.map((item: any) => ({
      id: item.id,
      quantity: item.quantity,
      price: item.price,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      locale: "es",

      shipping_address_collection: {
        allowed_countries: ["MX"],
      },

      phone_number_collection: {
        enabled: true,
      },


      metadata: {
        items: JSON.stringify(cleanItems),
      },

      line_items: items.map((item: any) => ({
        price_data: {
          currency: "mxn",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(Number(item.price) * 100),
        },
        quantity: item.quantity,
      })),

      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cart",
    })

    return new Response(JSON.stringify({ url: session.url }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    })
  }
})