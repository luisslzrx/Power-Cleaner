<template>
  <div class="min-h-screen bg-white font-sans">
    <!-- Header Banner -->
    <section class="w-full px-4 md:px-8">
      <div
        class="relative w-full overflow-hidden rounded-b-3xl bg-cover bg-center bg-no-repeat min-h-[200px] md:min-h-[260px] flex items-center"
        :style="{ backgroundImage: `url(${fondo4})` }"
      >
        <div class="absolute inset-0 bg-power-primary/90"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 md:px-16 w-full py-8 text-left">
          <span class="text-xs font-bold uppercase tracking-widest text-power-accent mb-2 block">
            Legales & Privacidad
          </span>
          <h1 class="text-2xl md:text-4xl font-extrabold text-white leading-tight">
            Aviso de Privacidad y Cookies
          </h1>
          <p class="text-xs md:text-sm text-blue-200 mt-2">
            Última actualización: 31 de Julio de 2026
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content Grid -->
    <section class="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20">
      <div class="flex flex-col lg:flex-row gap-12 items-start">
        
        <!-- Sidebar Navigation (Sticky index) -->
        <aside class="w-full lg:w-3/12 lg:sticky lg:top-28 lg:self-start bg-slate-50 border border-gray-150 p-6 rounded-2xl">
          <h4 class="text-xs font-bold text-power-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
            Contenido del documento
          </h4>
          <nav class="flex flex-col gap-3">
            <a href="#responsable" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              1. Responsable de tus Datos
            </a>
            <a href="#datos-recabados" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              2. Datos que Recabamos
            </a>
            <a href="#finalidades" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              3. Uso de la Información
            </a>
            <a href="#derechos-arco" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              4. Derechos ARCO
            </a>
            <a href="#seguridad" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              5. Seguridad y Resguardo
            </a>
            <a href="#cookies-pixels" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              6. Cookies y Píxeles de Rastreo
            </a>
            <a href="#terceros" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              7. Transferencias a Terceros
            </a>
          </nav>
        </aside>

        <!-- Document text -->
        <article class="w-full lg:w-9/12 text-left space-y-10 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            En <strong>Power Cleaner</strong>, nos tomamos muy en serio la seguridad y confidencialidad de tu información personal. Este aviso describe de manera clara cómo recolectamos, protegemos y administramos los datos que nos proporcionas a través de nuestro sitio web.
          </p>

          <!-- 1. Responsable -->
          <section id="responsable" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              1. Responsable de tus Datos Personales
            </h2>
            <p class="mb-3">
              El responsable del tratamiento de sus datos es la persona moral encargada del sitio web, con domicilio en:
            </p>
            <div class="bg-slate-50 p-4 border border-gray-150 rounded-xl text-xs md:text-sm mb-3">
              <strong>Power Cleaner México</strong><br />
              Av. Benito Juárez No. 794, Col. Jardines de la Villa,<br />
              Villa de Álvarez, Colima, México.
            </div>
            <p>
              Para cualquier consulta en materia de privacidad de datos, puedes comunicarte por correo electrónico al área encargada en <a href="mailto:ventas@powercleaner.com" class="text-power-secondary font-semibold hover:underline">ventas@powercleaner.com</a>.
            </p>
          </section>

          <!-- 2. Datos que recabamos -->
          <section id="datos-recabados" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              2. Datos Personales que Recabamos
            </h2>
            <p class="mb-3">
              Recabamos los datos estrictamente necesarios para ofrecerte nuestros servicios de venta y atención al cliente. Estos incluyen:
            </p>
            <ul class="list-disc pl-6 space-y-1.5 mb-3">
              <li><strong>Datos de contacto:</strong> Nombre completo, correo electrónico, número de teléfono y WhatsApp.</li>
              <li><strong>Datos de envío:</strong> Dirección de entrega de mercancía (calle, número, colonia, código postal, ciudad y estado).</li>
              <li><strong>Datos fiscales (opcional):</strong> RFC, razón social, régimen fiscal y dirección fiscal en caso de requerir facturación.</li>
              <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador y datos analíticos de navegación en nuestro sitio.</li>
            </ul>
            <p class="text-xs text-gray-500 italic bg-blue-50/50 p-3 rounded-lg border border-blue-100">
              <strong>Nota:</strong> Nosotros NO almacenamos datos sensibles de pago como contraseñas de tarjetas bancarias. Todas las transacciones de pago con tarjeta son procesadas a través de proveedores seguros y certificados (Stripe, PayPal, etc.).
            </p>
          </section>

          <!-- 3. Uso de la informacion -->
          <section id="finalidades" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              3. Finalidades y Uso de la Información
            </h2>
            <p class="mb-3">
              Los datos personales recabados son utilizados para las siguientes finalidades necesarias:
            </p>
            <ul class="list-disc pl-6 space-y-1.5">
              <li>Procesar, preparar e integrar tus órdenes de compra en línea.</li>
              <li>Coordinar el envío y rastreo de tus paquetes a domicilio a través de paqueterías autorizadas.</li>
              <li>Dar respuesta a tus dudas, mensajes o solicitudes de soporte enviadas a través de los formularios.</li>
              <li>Generar comprobantes fiscales digitales por tus compras (Facturación CFDI).</li>
              <li>Enviar notificaciones de promociones exclusivas u ofertas especiales de temporada, únicamente si has aceptado expresamente recibir nuestro newsletter.</li>
            </ul>
          </section>

          <!-- 4. Derechos ARCO -->
          <section id="derechos-arco" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              4. Medios para Ejercer los Derechos ARCO
            </h2>
            <p class="mb-3">
              De acuerdo con la legislación vigente en México, tienes el derecho en todo momento a ejercer tus derechos <strong>ARCO</strong>:
            </p>
            <ul class="list-disc pl-6 space-y-1.5 mb-3">
              <li><strong>Acceso:</strong> Conocer qué datos personales tenemos tuyos y para qué los utilizamos.</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de tus datos si están desactualizados, incompletos o incorrectos.</li>
              <li><strong>Cancelación:</strong> Solicitar que eliminemos tu registro de nuestras bases de datos comerciales.</li>
              <li><strong>Oposición:</strong> Oponerte al uso de tus datos para finalidades específicas secundarias (como mercadotecnia).</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, deberás enviar una solicitud escrita indicando detalladamente tu requerimiento al correo <a href="mailto:ventas@powercleaner.com" class="text-power-secondary font-semibold hover:underline">ventas@powercleaner.com</a>, adjuntando una identificación oficial digitalizada para confirmar tu identidad.
            </p>
          </section>

          <!-- 5. Seguridad -->
          <section id="seguridad" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              5. Seguridad y Resguardo de la Información
            </h2>
            <p>
              Contamos con medidas de seguridad administrativas, técnicas y físicas que permiten proteger los datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado. Toda la comunicación y envío de datos en este sitio web se realiza de forma cifrada mediante el uso de protocolos seguros <strong>HTTPS (SSL/TLS)</strong>.
            </p>
          </section>

          <!-- 6. Cookies y Pixels -->
          <section id="cookies-pixels" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              6. Cookies, Píxeles de Rastreo y Analíticos de Navegación
            </h2>
            <p class="mb-3">
              Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario y ofrecer un servicio comercial personalizado. Las cookies nos permiten:
            </p>
            <ul class="list-disc pl-6 space-y-1.5 mb-3">
              <li>Recordar los productos que agregas a tu carrito de compra y la sesión activa en el sitio.</li>
              <li>Analizar las estadísticas generales de navegación en nuestro portal a través de <strong>Google Analytics</strong> (visitas, páginas visitadas, etc.).</li>
              <li>Medir el rendimiento de nuestras campañas comerciales en redes sociales y buscadores utilizando el <strong>Píxel de Meta / Facebook</strong>.</li>
            </ul>
            <p>
              Puedes configurar tu navegador de internet en cualquier momento para limitar o rechazar el uso de cookies instaladas en tu equipo; sin embargo, toma en cuenta que esto podría inhabilitar ciertas funciones del carrito y la tienda en línea.
            </p>
          </section>

          <!-- 7. Terceros -->
          <section id="terceros" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              7. Transferencias a Terceros
            </h2>
            <p>
              Tus datos personales no son compartidos, vendidos ni transferidos a terceras personas fuera del marco requerido para la operación del sitio y de tus compras. Específicamente, transferimos datos indispensables únicamente a:
            </p>
            <ul class="list-disc pl-6 space-y-1.5 mt-3">
              <li><strong>Empresas de mensajería externa:</strong> Para realizar la entrega a domicilio de tus pedidos en cualquier zona de la república.</li>
              <li><strong>Pasarelas de pagos:</strong> Proveedores autorizados que procesan las transacciones bancarias correspondientes.</li>
              <li><strong>Autoridades competentes:</strong> En los casos estrictos que lo exija la ley mexicana aplicable.</li>
            </ul>
          </section>
        </article>

      </div>
    </section>
  </div>
</template>

<script setup>
import fondo4 from '@/assets/images/fondo4.png'
</script>

<style scoped>
/* Smooth scrolling indicator for headers jump */
html {
  scroll-behavior: smooth;
}
</style>
