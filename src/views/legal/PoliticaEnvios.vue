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
            Legales & Logística
          </span>
          <h1 class="text-2xl md:text-4xl font-extrabold text-white leading-tight">
            Política de Envíos, Cambios y Devoluciones
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
            <a href="#costos-tiempos" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              1. Costos y Tiempos de Envío
            </a>
            <a href="#cobertura" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              2. Cobertura Nacional
            </a>
            <a href="#retrasos" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              3. Retrasos y Problemas de Entrega
            </a>
            <a href="#productos-danados" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              4. Productos Dañados en Tránsito
            </a>
            <a href="#cambios-devoluciones" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              5. Cambios y Devoluciones
            </a>
            <a href="#reembolsos" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              6. Reembolsos
            </a>
          </nav>
        </aside>

        <!-- Document text -->
        <article class="w-full lg:w-9/12 text-left space-y-10 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            En <strong>Power Cleaner</strong>, nos esforzamos para que tus productos de limpieza profesional lleguen a tus manos de forma rápida, segura y en perfectas condiciones. A continuación, detallamos los costos de entrega, tiempos de transporte y los lineamientos para solicitar cambios o devoluciones de mercancía.
          </p>

          <!-- 1. Costos y tiempos -->
          <section id="costos-tiempos" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              1. Costos y Tiempos de Envío
            </h2>
            <p class="mb-3">
              Ofrecemos envíos rápidos a cualquier parte de la República Mexicana bajo las siguientes condiciones:
            </p>
            <ul class="list-disc pl-6 space-y-1.5 mb-3">
              <li><strong>Envío Estándar:</strong> Con un costo variable según el peso total del pedido. Los tiempos de entrega oscilan entre <strong>3 y 5 días hábiles</strong> posteriores a la validación de tu pago.</li>
              <li><strong>Procesamiento de pedido:</strong> Las compras realizadas antes de las 13:00 hrs se empaquetan y envían el mismo día de lunes a viernes. Las compras en fin de semana se procesan el siguiente día hábil.</li>
            </ul>
            <p>
              Una vez que tu paquete sea recolectado por la mensajería, recibirás un correo electrónico automático con el código de rastreo oficial (FedEx, Estafeta, DHL o similares) para que puedas monitorear su trayecto.
            </p>
          </section>

          <!-- 2. Cobertura -->
          <section id="cobertura" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              2. Cobertura Nacional e Entregas
            </h2>
            <p>
              Contamos con cobertura a toda la República Mexicana. En caso de que tu domicilio se encuentre en una zona considerada como "zona extendida" o de difícil acceso por parte de la paquetería, es posible que el tiempo de entrega se prolongue de 2 a 3 días hábiles adicionales. Si existe algún inconveniente para la entrega directa en tu domicilio, nos comunicaremos contigo para proponer una entrega de tipo "ocurre" en la sucursal de paquetería más cercana a ti.
            </p>
          </section>

          <!-- 3. Retrasos -->
          <section id="retrasos" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              3. Retrasos e Incidencias en Tránsito
            </h2>
            <p>
              Power Cleaner no se hace responsable por demoras derivadas de factores ajenos a nuestro control directo, tales como desastres naturales, accidentes de tránsito de la paquetería, revisiones federales en carreteras o fallas de cobertura del servicio logístico. Sin embargo, nuestro equipo de soporte brindará total acompañamiento y seguimiento a los reclamos hasta asegurar la entrega de tus productos.
            </p>
          </section>

          <!-- 4. Productos dañados -->
          <section id="productos-danados" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              4. Productos Dañados o Fugas en Tránsito
            </h2>
            <p class="mb-3">
              Debido a que enviamos productos químicos líquidos, tomamos estrictas medidas de embalaje para evitar fugas. Si tu pedido presenta daños visibles en la caja o derrames al momento de recibirlo:
            </p>
            <ul class="list-disc pl-6 space-y-1.5 mb-3">
              <li><strong>Toma evidencia:</strong> Captura fotografías o videos claros del empaque dañado y de los envases afectados inmediatamente al recibirlo.</li>
              <li><strong>Reporte inmediato:</strong> Envía tu reporte con las evidencias adjuntas al WhatsApp de soporte de Power Cleaner o al correo dentro de un lapso no mayor a <strong>48 horas hábiles</strong> de haber recibido el paquete.</li>
            </ul>
            <p>
              Tras verificar las evidencias del reporte, procederemos a reponerte y enviarte sin costo el producto dañado, o bien a emitir un cupón de saldo a tu favor por el monto del mismo.
            </p>
          </section>

          <!-- 5. Cambios y devoluciones -->
          <section id="cambios-devoluciones" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              5. Condiciones de Cambios y Devoluciones
            </h2>
            <p class="mb-3">
              Buscamos tu completa satisfacción. Si deseas realizar un cambio o devolución de un producto por cuestiones personales (como error en la selección del aroma o tamaño):
            </p>
            <ul class="list-disc pl-6 space-y-1.5">
              <li>Tienes un plazo de <strong>7 días naturales</strong> a partir de la fecha de entrega para iniciar tu solicitud.</li>
              <li>El producto debe encontrarse cerrado, en su envase original sin muestras de uso y con los sellos de seguridad intactos.</li>
              <li>Los costos de envío de retorno a nuestras instalaciones e importación del nuevo producto correrán a cargo del comprador, salvo en los casos en que el cambio se deba a un error de surtido cometido por nuestro personal.</li>
            </ul>
          </section>

          <!-- 6. Reembolsos -->
          <section id="reembolsos" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              6. Políticas de Reembolsos de Compra
            </h2>
            <p>
              Una vez aprobada tu cancelación o el retorno físico del producto devuelto a nuestro almacén en perfecto estado, procederemos al reembolso correspondiente. El reembolso se aplicará al mismo método de pago que utilizaste para la compra (Stripe o PayPal). El tiempo para ver reflejado el dinero en tu cuenta bancaria depende enteramente de los términos y procesos de tu institución financiera, pudiendo tardar de <strong>5 a 10 días hábiles</strong> bancarios.
            </p>
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
