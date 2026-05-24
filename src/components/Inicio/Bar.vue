<template>
  <!-- Features bar -->
  <div
    class="w-full max-w-7xl mx-auto px-4 md:px-8 bg-white border border-gray-100 shadow-lg rounded-2xl relative -mt-8 z-10"
  >
    <div
      class="px-4 md:px-16 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 divide-x divide-gray-100 text-power-primary"
    >
      <!-- Discount -->
      <div class="flex items-center gap-3 md:gap-4 pl-0">
        <img
          src="/src/assets/icons/descuento.svg"
          alt="Envío gratis"
          class="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
        />
        <div>
          <p class="text-xs md:text-sm font-semibold">Ofertas</p>
          <p class="text-[10px] md:text-xs">Descuentos exclusivos</p>
        </div>
      </div>

      <!-- Free Delivery -->
      <div class="flex items-center gap-3 md:gap-4 pl-4 md:pl-6">
        <img
          src="/src/assets/icons/envio.svg"
          alt="Envío gratis"
          class="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
        />
        <div>
          <p class="text-xs md:text-sm font-semibold">Envío gratis</p>
          <p class="text-[10px] md:text-xs">Rápido y seguro</p>
        </div>
      </div>

      <!-- Great Support 24/7 -->
      <div class="flex items-center gap-3 md:gap-4 pl-4 md:pl-6">
        <img
          src="/src/assets/icons/servicio.svg"
          alt="Soporte 24/7"
          class="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
        />
        <div>
          <p class="text-xs md:text-sm font-semibold">Soporte</p>
          <p class="text-[10px] md:text-xs">Atención 24/7</p>
        </div>
      </div>

      <!-- Secure Payment -->
      <div class="flex items-center gap-3 md:gap-4 pl-4 md:pl-6">
        <img
          src="/src/assets/icons/seguro.svg"
          alt="Pago seguro"
          class="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
        />
        <div>
          <p class="text-xs md:text-sm font-semibold">Pago seguro</p>
          <p class="text-[10px] md:text-xs">Compra protegida</p>
        </div>
      </div>
    </div>
  </div>
</template>
