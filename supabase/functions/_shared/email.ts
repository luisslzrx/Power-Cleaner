import { Resend } from "https://esm.sh/resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);

export async function sendNewOrderEmail(order: any, items: any[]) {
  const { data, error } = await resend.emails.send({
    from: "Power Cleaner <ventas@powercleanergroup.com>",
    to: ["ventas@powercleanergroup.com"],
    subject: "🛒 Nueva orden recibida",
    html: `
  <h2>🛒 Nueva orden recibida</h2>

  <h3>Cliente</h3>
  <p><strong>Nombre:</strong> ${order.shipping_name}</p>
  <p><strong>Correo:</strong> ${order.customer_email}</p>
  <p><strong>Teléfono:</strong> ${order.shipping_phone}</p>

  <h3>Dirección</h3>
  <p>
    ${order.shipping_line1 || ""} ${order.shipping_line2 || ""}<br>
    ${order.shipping_city || ""}, ${order.shipping_state || ""}<br>
    ${order.shipping_postal_code || ""}<br>
    ${order.shipping_country || ""}
  </p>

  <h3>Productos</h3>

  <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
    <tr>
      <th>ID</th>
      <th>Cantidad</th>
      <th>Precio</th>
    </tr>

    ${items.map((item: any) => `
      <tr>
        <td>${item.id} - ${item.name}</td>
        <td>${item.quantity}</td>
        <td>$${item.price}</td>
      </tr>
    `).join("")}

  </table>

  <h3>Total: $${order.total}</h3>
`,
  });

  if (error) {
    console.error(error);
    throw error;
  }

  console.log(data);
}