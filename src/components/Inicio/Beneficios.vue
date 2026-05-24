<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Por qué elegirnos — <span class="text-power-accent">Nuestros Beneficios</span>
        </h2>
      </div>
      <div class="w-full h-px bg-blue-500 mb-6 md:mb-10"></div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 md:divide-x md:divide-gray-100">
        <!-- Card 1: Calidad -->
        <div class="flex flex-col items-center text-center px-4 md:px-8 gap-3 md:gap-4">
          <div class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 md:w-14 md:h-14 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h3 class="text-sm md:text-base font-bold text-gray-800">Calidad Garantizada</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Cada producto pasa por estrictos controles de calidad. Trabajamos solo con materias
            primas certificadas para asegurar resultados consistentes y superiores.
          </p>
        </div>

        <!-- Card 2: Envío / Mayoreo -->
        <div class="flex flex-col items-center text-center px-4 md:px-8 gap-3 md:gap-4">
          <div class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 md:w-14 md:h-14 text-blue-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1h2l3-3-1-4H13v7z"
              />
            </svg>
          </div>
          <h3 class="text-sm md:text-base font-bold text-gray-800">Precios de Mayoreo</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Accede a los mejores precios con nuestros planes por volumen. A mayor cantidad, mayor
            ahorro. Ideal para distribuidores y negocios en crecimiento.
          </p>
        </div>

        <!-- Card 3: Fórmulas -->
        <div class="flex flex-col items-center text-center px-4 md:px-8 gap-3 md:gap-4">
          <div class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 md:w-14 md:h-14 text-power-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 class="text-sm md:text-base font-bold text-gray-800">Fórmulas Mejoradas</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Nuestro equipo de I+D perfecciona cada fórmula incorporando los últimos avances
            científicos para ofrecerte productos más eficaces, seguros y confiables.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No functions — design only
</script>
