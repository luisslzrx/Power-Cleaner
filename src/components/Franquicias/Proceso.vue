<template>
  <section class="max-w-7xl mx-auto px-4 md:px-6 my-16 md:my-24">
    <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      <h2 class="text-2xl md:text-4xl font-extrabold text-power-primary mb-4">
        ¿Cómo es el Proceso de <span class="text-power-accent">Apertura</span>?
      </h2>
      <div class="w-24 h-1 bg-power-accent mx-auto mb-6"></div>
      <p class="text-sm md:text-base text-gray-500">
        Te guiamos paso a paso desde el primer contacto hasta el día de la gran inauguración de tu local.
      </p>
    </div>

    <!-- Process Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <!-- Step 1 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-gray-100 group-hover:text-power-accent/20 transition-colors">01</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/contact-support.svg" alt="Contacto" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Contacto</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Completa nuestro formulario de franquicias o escríbenos directamente por WhatsApp.
          </p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-gray-100 group-hover:text-power-accent/20 transition-colors">02</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/map-pin.svg" alt="Validación" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Validación de Zona</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Analizamos la viabilidad comercial y la disponibilidad de exclusividad en tu zona o ciudad.
          </p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-gray-100 group-hover:text-power-accent/20 transition-colors">03</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/contract-pencil.svg" alt="Firma" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Firma y Contrato</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Formalizamos el acuerdo de franquicia ante notario público y se liquida la cuota de inversión inicial.
          </p>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-gray-100 group-hover:text-power-accent/20 transition-colors">04</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/academic-cap.svg" alt="Capacitación" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Capacitación</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Recibes 5 días de entrenamiento intensivo administrativo, operativo y técnico de productos.
          </p>
        </div>
      </div>

      <!-- Step 5 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-gray-100 group-hover:text-power-accent/20 transition-colors">05</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/star-outline-red.svg" alt="Apertura" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Inauguración</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Entregamos tu sucursal montada con mercadotecnia, inventario inicial y soporte en sitio para el arranque.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Proceso component
</script>

<style scoped>
.group {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.group:hover {
  transform: translateY(-4px);
}
</style>
