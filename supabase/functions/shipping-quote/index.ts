import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  const clientId = Deno.env.get("SKYDROPX_CLIENT_ID");
  const clientSecret = Deno.env.get("SKYDROPX_CLIENT_SECRET");

  console.log({
    clientIdExists: !!clientId,
    clientSecretExists: !!clientSecret,
    clientIdLength: clientId?.length,
    clientSecretLength: clientSecret?.length,
  });

  if (!clientId || !clientSecret) {
    return new Response(
      JSON.stringify({ error: "Faltan credenciales de SkydropX" }),
      {
        status: 500,
        headers: {
  ...corsHeaders,
  "Content-Type": "application/json",
},
      }
    );
  }

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch(
    "https://sb-pro.skydropx.com/api/v1/oauth/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    }
  );

  const text = await response.text();

  if (response.status !== 200) {
  return new Response(text, {
    status: response.status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

const token = JSON.parse(text).access_token;
console.log("1. TOKEN OBTENIDO");

const {
  postalCode,
  state,
  city,
  suburb,
  street,
  number,
} = await request.json();

console.log({
  postalCode,
  state,
  city,
  suburb,
  street,
  number,
});

const quotationBody = {
  quotation: {
    address_from: {
      address_template_id: "1d354b4f-4058-4a4a-a165-85c4c4e480d9",
      country_code: "MX",
      postal_code: "01420",
      area_level1: "Ciudad de México",
      area_level2: "Álvaro Obregón",
      area_level3: "Santa María Nonoalco",
    },

    address_to: {
      country_code: "MX",
      postal_code: postalCode,
      area_level1: state,
      area_level2: city,
      area_level3: suburb,
      street1: street,
      street_number: number,
    },

    parcels: [
      {
        weight: 1,
        length: 20,
        width: 20,
        height: 20,
      },
    ],
  },
};

const quotationResponse = await fetch(
  "https://sb-pro.skydropx.com/api/v2/quotations",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(quotationBody),
  }
);

const quotation = await quotationResponse.text();
const quotationData = JSON.parse(quotation);
const quotationId = quotationData.id;

if (!quotationId) {
  return new Response(
    JSON.stringify({ error: "No se pudo crear la cotización en SkydropX", details: quotationData }),
    {
      status: 400,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    }
  );
}

let rates: any = null;
let availableRates: any[] = [];

// Poll SkydropX up to 8 times with a 1.5-second interval (max 12 seconds)
for (let attempt = 0; attempt < 8; attempt++) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const ratesResponse = await fetch(
    `https://sb-pro.skydropx.com/api/v1/quotations/${quotationId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (ratesResponse.status === 200) {
    rates = await ratesResponse.json();
    
    if (rates && Array.isArray(rates.rates)) {
      availableRates = rates.rates
        .filter((rate: any) => rate.success && rate.total)
        .map((rate: any) => ({
          id: rate.id,
          carrier: rate.provider_display_name,
          service: rate.provider_service_name,
          price: Number(rate.total),
          days: rate.days,
        }))
        .sort((a: any, b: any) => a.price - b.price);
    }
    
    const isCompleted = rates?.is_completed;
    console.log(`Intento ${attempt + 1}: is_completed = ${isCompleted}, availableRates count = ${availableRates.length}`);
    
    // If the calculation is completed OR we already have available rates, we can return early
    if (isCompleted || availableRates.length > 0) {
      break;
    }
  } else {
    console.log(`Intento ${attempt + 1}: error de estado ${ratesResponse.status}`);
  }
}

// If SkydropX Sandbox is experiencing connection pool timeouts or fails to return rates,
// we provide a fallback option so the checkout flow is never blocked.
if (availableRates.length === 0) {
  availableRates.push({
    id: "fallback-standard",
    carrier: "Envío Estándar",
    service: "Terrestre",
    price: 150,
    days: 4,
  });
}

return new Response(
  JSON.stringify(
    {
      quotationId,
      shippingOptions: availableRates,
      isCompleted: rates?.is_completed,
      ratesCount: rates?.rates?.length,
      carrierDetails: rates?.rates?.map((r: any) => ({
        carrier: r.provider_display_name,
        service: r.provider_service_name,
        success: r.success,
        total: r.total,
        status: r.status,
        error_messages: r.error_messages
      }))
    },
    null,
    2
  ),
  {
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  }
);

});