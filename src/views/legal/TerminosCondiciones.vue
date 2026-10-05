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
            Legales & Contratos
          </span>
          <h1 class="text-2xl md:text-4xl font-extrabold text-white leading-tight">
            Términos y Condiciones de Compra
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
            <a href="#uso-sitio" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              1. Uso del Sitio Web
            </a>
            <a href="#productos-precios" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              2. Productos y Precios
            </a>
            <a href="#disponibilidad" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              3. Disponibilidad y Stock
            </a>
            <a href="#pagos-seguridad" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              4. Pagos y Transacciones
            </a>
            <a href="#promociones" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              5. Promociones y Descuentos
            </a>
            <a href="#cancelaciones" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              6. Cancelaciones de Pedidos
            </a>
            <a href="#responsabilidades" class="text-xs md:text-sm text-gray-600 hover:text-power-accent transition-colors font-medium flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
              7. Responsabilidades
            </a>
          </nav>
        </aside>

        <!-- Document text -->
        <article class="w-full lg:w-9/12 text-left space-y-10 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            Te damos la bienvenida al portal de comercio electrónico de <strong>Power Cleaner</strong>. Al acceder, navegar o realizar compras a través de este sitio web, aceptas quedar sujeto a los términos y condiciones de compra establecidos en este acuerdo legal. Por favor, léelos con detenimiento.
          </p>

          <!-- 1. Uso del sitio -->
          <section id="uso-sitio" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              1. Condiciones y Uso del Sitio Web
            </h2>
            <p class="mb-3">
              El uso de este sitio web se rige bajo los siguientes lineamientos generales de conducta:
            </p>
            <ul class="list-disc pl-6 space-y-1.5">
              <li>El usuario garantiza tener la mayoría de edad (18 años) o estar accediendo bajo supervisión de un tutor legal para poder realizar compras.</li>
              <li>Está prohibido copiar, reproducir, revender o alterar cualquier sección de diseño, códigos o contenidos fotográficos de este sitio sin la previa autorización por escrito de Power Cleaner.</li>
              <li>El usuario es responsable de mantener la confidencialidad de los datos de acceso a su cuenta de cliente y del historial de compras correspondiente.</li>
            </ul>
          </section>

          <!-- 2. Productos y precios -->
          <section id="productos-precios" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              2. Información de Productos y Precios
            </h2>
            <p class="mb-3">
              Trabajamos continuamente para asegurar la exactitud en la descripción de nuestros productos y catálogos de limpieza:
            </p>
            <ul class="list-disc pl-6 space-y-1.5 mb-3">
              <li>Las imágenes que ilustran los productos son de carácter informativo; los colores, tonos de empaque o envases pueden variar ligeramente debido a las condiciones de la pantalla o a mejoras en el empaque.</li>
              <li>Todos los precios mostrados en el sitio web están denominados en pesos mexicanos (MXN) e incluyen los impuestos correspondientes (IVA) conforme a la legislación mexicana.</li>
              <li>Nos reservamos el derecho de modificar los precios comerciales en cualquier momento sin previo aviso, garantizando respetar el precio de los pedidos que ya hayan sido pagados y confirmados.</li>
            </ul>
          </section>

          <!-- 3. Disponibilidad -->
          <section id="disponibilidad" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              3. Disponibilidad y Stock de Mercancía
            </h2>
            <p>
              Toda compra en línea está sujeta a la disponibilidad del producto en nuestros almacenes físicos. En caso extraordinario de que un producto de tu pedido no cuente con existencias al momento de empacar, te contactaremos de inmediato por teléfono o correo para ofrecerte una alternativa de reemplazo equivalente o el reembolso total del monto de dicho producto.
            </p>
          </section>

          <!-- 4. Pagos y seguridad -->
          <section id="pagos-seguridad" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              4. Métodos de Pago y Seguridad en Transacciones
            </h2>
            <p class="mb-3">
              Ofrecemos métodos de pago seguros a través de plataformas integradas y debidamente certificadas:
            </p>
            <ul class="list-disc pl-6 space-y-1.5 mb-3">
              <li><strong>Tarjetas de crédito o débito:</strong> Aceptamos tarjetas Visa, Mastercard y American Express procesadas de forma cifrada a través de Stripe.</li>
              <li><strong>PayPal:</strong> Compra de forma segura utilizando tu cuenta verificada de PayPal.</li>
              <li><strong>Depósito o Transferencia (SPEI):</strong> En compras de mayoreo o cotizaciones directas por WhatsApp, puedes realizar tu pago a nuestras cuentas oficiales.</li>
            </ul>
            <p>
              Cualquier cargo fraudulento o aclaración en cobros indebidos deberá ser reportado inmediatamente a su institución financiera y notificado a nuestro servicio de soporte para apoyar con los registros.
            </p>
          </section>

          <!-- 5. Promociones -->
          <section id="promociones" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              5. Promociones, Ofertas y Códigos de Descuento
            </h2>
            <p>
              Las promociones vigentes publicadas en este portal tendrán términos específicos detallados en sus banners publicitarios o descripciones (como validez temporal o límites de compra). Los cupones de descuento son individuales y no acumulables con otras rebajas de precio de mayoreo vigentes en el carrito, salvo que se indique expresamente lo contrario.
            </p>
          </section>

          <!-- 6. Cancelaciones -->
          <section id="cancelaciones" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              6. Cancelaciones de Pedido
            </h2>
            <p class="mb-3">
              Como comprador, puedes solicitar la cancelación de tu orden de compra en línea bajo las siguientes condiciones:
            </p>
            <ul class="list-disc pl-6 space-y-1.5">
              <li><strong>Antes del envío:</strong> Si el producto no ha sido despachado a la paquetería, puedes cancelar tu compra sin cargos adicionales y solicitar el reembolso enviando un WhatsApp al equipo de atención a clientes.</li>
              <li><strong>Después del despacho:</strong> Una vez entregado el pedido a la empresa transportista, no es posible cancelarlo. Deberás recibir el paquete y seguir el proceso oficial de cambios y devoluciones.</li>
            </ul>
          </section>

          <!-- 7. Responsabilidades -->
          <section id="responsabilidades" class="scroll-mt-10">
            <h2 class="text-lg md:text-xl font-bold text-power-primary mb-3">
              7. Responsabilidades y Condiciones Generales
            </h2>
            <p class="mb-3">
              Límite de responsabilidad de la empresa:
            </p>
            <ul class="list-disc pl-6 space-y-1.5">
              <li>Power Cleaner no es responsable del mal uso, negligencia o aplicación incorrecta de nuestros productos de limpieza químicos fuera de las instrucciones marcadas en la etiqueta trasera de cada envase.</li>
              <li>Cualquier controversia relacionada con el uso de este portal o de transacciones comerciales se resolverá bajo las leyes aplicables de la República Mexicana y ante los tribunales competentes de la Ciudad de Colima, México.</li>
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
