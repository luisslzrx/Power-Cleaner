<template>
  <!-- Beneficios del Modelo de Franquicia Section -->
  <section class="my-16">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header (mismo patrón que el resto de secciones) -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Beneficios — <span class="text-power-accent">Qué Incluye el Modelo</span>
        </h2>
      </div>
      <div class="w-full h-px bg-blue-500 mb-8 md:mb-10"></div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        <!-- Card 1: Inversión accesible -->
        <div
          class="flex items-start gap-4 bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#eef0f5]"
        >
          <div
            class="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#b52426] flex items-center justify-center flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182.553-.439 1.278-.659 2.003-.659.725 0 1.45.22 2.003.659l.609.483"
              />
            </svg>
          </div>
          <div>
            <h3 class="text-sm md:text-base font-bold text-[#0b1a2e] mb-1.5">
              Inversión Accesible
            </h3>
            <p class="text-xs md:text-sm text-[#5b6472] leading-relaxed">
              Comienza tu negocio con una inversión diseñada para impulsar tu crecimiento.
            </p>
          </div>
        </div>

        <!-- Card 2: Productos de alta demanda -->
        <div
          class="flex items-start gap-4 bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#eef0f5]"
        >
          <div
            class="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#b52426] flex items-center justify-center flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div>
            <h3 class="text-sm md:text-base font-bold text-[#0b1a2e] mb-1.5">
              Productos de Alta Demanda
            </h3>
            <p class="text-xs md:text-sm text-[#5b6472] leading-relaxed">
              Limpieza del hogar, automotriz y artículos complementarios.
            </p>
          </div>
        </div>

        <!-- Card 3: Respaldo y acompañamiento -->
        <div
          class="flex items-start gap-4 bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#eef0f5]"
        >
          <div
            class="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#b52426] flex items-center justify-center flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          </div>
          <div>
            <h3 class="text-sm md:text-base font-bold text-[#0b1a2e] mb-1.5">
              Respaldo y Acompañamiento
            </h3>
            <p class="text-xs md:text-sm text-[#5b6472] leading-relaxed">
              Te brindamos capacitación, asesoría y soporte continuo.
            </p>
          </div>
        </div>

        <!-- Card 4: Venta mayoreo y menudeo -->
        <div
          class="flex items-start gap-4 bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#eef0f5]"
        >
          <div
            class="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#b52426] flex items-center justify-center flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.621 1.622a3.003 3.003 0 01-.621 4.72"
              />
            </svg>
          </div>
          <div>
            <h3 class="text-sm md:text-base font-bold text-[#0b1a2e] mb-1.5">
              Venta Mayoreo y Menudeo
            </h3>
            <p class="text-xs md:text-sm text-[#5b6472] leading-relaxed">
              Diversifica tus ingresos con ventas al mayoreo y al menudeo.
            </p>
          </div>
        </div>

        <!-- Card 5: Material y herramientas -->
        <div
          class="flex items-start gap-4 bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#eef0f5]"
        >
          <div
            class="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#b52426] flex items-center justify-center flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              />
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
            </svg>
          </div>
          <div>
            <h3 class="text-sm md:text-base font-bold text-[#0b1a2e] mb-1.5">
              Material y Herramientas
            </h3>
            <p class="text-xs md:text-sm text-[#5b6472] leading-relaxed">
              Recibes catálogos, material promocional y herramientas de venta.
            </p>
          </div>
        </div>

        <!-- Card 6: Marca en crecimiento -->
        <div
          class="flex items-start gap-4 bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#eef0f5]"
        >
          <div
            class="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#b52426] flex items-center justify-center flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </div>
          <div>
            <h3 class="text-sm md:text-base font-bold text-[#0b1a2e] mb-1.5">
              Marca en Crecimiento
            </h3>
            <p class="text-xs md:text-sm text-[#5b6472] leading-relaxed">
              Forma parte de una empresa con visión nacional e internacional.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// FranquiciaBeneficios component
</script>
