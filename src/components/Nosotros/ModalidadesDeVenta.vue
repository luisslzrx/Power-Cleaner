<template>
  <!-- Modalidades de Venta Section -->
  <section>
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Nuestros tipos de venta —
          <span class="text-power-accent">Venta al Menudeo y Mayorista</span>
        </h2>
      </div>
      <div class="w-full h-px bg-blue-500 mb-8 md:mb-10"></div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <!-- Card: Venta al Menudeo (clara) -->
        <div
          class="bg-white rounded-2xl p-6 md:p-12 border border-[#e0e3ed] relative overflow-hidden"
        >
          <!-- Decorative circle -->
          <div
            class="absolute -top-8 -right-8 w-30 h-30 bg-[#fce8e8] rounded-full opacity-60"
          ></div>

          <!-- Ícono -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 md:w-10 md:h-10 text-[#b52426] block mb-4 md:mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>

          <!-- Título -->
          <p class="text-sm md:text-base font-normal text-[#0b1a2e] mb-2 md:mb-3">
            Venta al Menudeo
          </p>

          <!-- Descripción -->
          <p class="text-sm md:text-base font-bold text-[#0b1a2e] leading-relaxed mb-6 md:mb-8">
            Perfecto para el cuidado diario de su hogar u oficina pequeña. Productos en
            presentaciones prácticas y listas para usar.
          </p>

          <!-- Lista -->
          <ul class="list-none p-0 mb-6 md:mb-10 flex flex-col gap-3 md:gap-4">
            <li class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 md:w-5 md:h-5 text-[#b52426] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-sm md:text-base text-[#0b1a2e]">Sin mínimo de compra</span>
            </li>
            <li class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 md:w-5 md:h-5 text-[#b52426] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-sm md:text-base text-[#0b1a2e]">Envío a domicilio en 24h</span>
            </li>
            <li class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 md:w-5 md:h-5 text-[#b52426] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-sm md:text-base text-[#0b1a2e]">Atención personalizada</span>
            </li>
          </ul>

          <!-- Botón outline -->
          <button
            class="w-full py-3 md:py-[18px] border-2 border-[#b52426] rounded-xl bg-transparent text-[#b52426] text-xs font-bold tracking-[0.08em] cursor-pointer"
          >
            VER TIENDA ONLINE
          </button>
        </div>

        <!-- Card: Venta al Mayoreo (oscura) -->
        <div class="bg-[#0b1a2e] rounded-2xl p-6 md:p-12 relative overflow-hidden">
          <!-- Decorative circle -->
          <div
            class="absolute -top-8 -right-8 w-30 h-30 bg-[#1e3a5f] rounded-full opacity-50"
          ></div>

          <!-- Ícono -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 md:w-10 md:h-10 text-[#ff5a55] block mb-4 md:mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>

          <!-- Título -->
          <p class="text-sm md:text-base font-normal text-white mb-2 md:mb-3">Venta al Mayoreo</p>

          <!-- Descripción -->
          <p class="text-sm md:text-base font-normal text-[#86a0cd] leading-relaxed mb-6 md:mb-8">
            Suministros de alto volumen para hoteles, hospitales y corporativos. Soluciones
            logísticas eficientes y precios escalables.
          </p>

          <!-- Lista -->
          <ul class="list-none p-0 mb-6 md:mb-10 flex flex-col gap-3 md:gap-4">
            <li class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 md:w-5 md:h-5 text-[#ff5a55] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-sm md:text-base font-bold text-white"
                >Precios competitivos por volumen</span
              >
            </li>
            <li class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 md:w-5 md:h-5 text-[#ff5a55] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-sm md:text-base font-bold text-white"
                >Fichas técnicas COFEPRIS</span
              >
            </li>
            <li class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 md:w-5 md:h-5 text-[#ff5a55] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-sm md:text-base font-bold text-white"
                >Crédito comercial para empresas</span
              >
            </li>
          </ul>

          <!-- Botón relleno -->
          <button
            class="w-full py-3 md:py-[18px] border-none rounded-xl bg-[#b52426] text-white text-xs font-bold tracking-[0.08em] cursor-pointer"
          >
            SOLICITAR COTIZACIÓN
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// ModalidadesVenta component
</script>
