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
            <img
              src="/src/assets/icons/currency-dollar.svg"
              alt="Inversión"
              class="w-5 h-5 md:w-6 md:h-6"
            />
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
            <img
              src="/src/assets/icons/cart.svg"
              alt="Productos"
              class="w-5 h-5 md:w-6 md:h-6 brightness-0 invert"
            />
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
            <img
              src="/src/assets/icons/users-support.svg"
              alt="Soporte"
              class="w-5 h-5 md:w-6 md:h-6"
            />
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
            <img
              src="/src/assets/icons/storefront.svg"
              alt="Modelos"
              class="w-5 h-5 md:w-6 md:h-6"
            />
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
            <img
              src="/src/assets/icons/price-tag.svg"
              alt="Htas"
              class="w-5 h-5 md:w-6 md:h-6"
            />
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
            <img
              src="/src/assets/icons/trending-up-red.svg"
              alt="Crecimiento"
              class="w-5 h-5 md:w-6 md:h-6 brightness-0 invert"
            />
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
