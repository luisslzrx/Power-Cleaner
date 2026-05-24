<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-2xl font-semibold text-power-primary">
          Todo en limpieza en <span class="text-power-accent">un solo lugar</span>
        </h2>
        <a
          href="#"
          class="flex items-center gap-1 text-xs md:text-sm text-gray-500 hover:text-power-blue transition-colors"
        >
          Ver más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 md:w-4 md:h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <!-- Underline -->
      <div class="w-full h-px bg-blue-500 mb-4 md:mb-8"></div>

      <!-- Categories row/carrusel -->
      <div
        class="flex md:grid md:grid-cols-6 gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        <!-- Cosmetics -->
        <div
          class="flex flex-col items-center gap-2 md:gap-3 cursor-pointer group shrink-0 w-[calc(33.333%-6px)] md:w-auto snap-start"
        >
          <div
            class="w-24 h-24 md:w-44 md:h-44 rounded-full bg-gray-100 border-2 border-transparent hover:border-power-blue flex items-center justify-center overflow-hidden transition-all"
          >
            <img
              src="/src/assets/images/1.png"
              alt="Artículos de limpieza"
              class="w-full h-full object-cover"
            />
          </div>
          <span
            class="text-[10px] md:text-sm text-gray-700 font-medium group-hover:text-power-blue transition-colors text-center"
            >Artículos de limpieza</span
          >
        </div>

        <!-- Limpiadores multiusos -->
        <div
          class="flex flex-col items-center gap-2 md:gap-3 cursor-pointer group shrink-0 w-[calc(33.333%-6px)] md:w-auto snap-start"
        >
          <div
            class="w-24 h-24 md:w-44 md:h-44 rounded-full bg-gray-100 border-2 border-transparent hover:border-power-blue flex items-center justify-center overflow-hidden transition-all"
          >
            <img
              src="/src/assets/images/7.png"
              alt="Limpiadores multiusos"
              class="w-full h-full object-cover"
            />
          </div>
          <span
            class="text-[10px] md:text-sm text-gray-700 font-medium group-hover:text-power-blue transition-colors text-center"
            >Limpiadores multiusos</span
          >
        </div>

        <!-- Shampoo (uso general) -->
        <div
          class="flex flex-col items-center gap-2 md:gap-3 cursor-pointer group shrink-0 w-[calc(33.333%-6px)] md:w-auto snap-start"
        >
          <div
            class="w-24 h-24 md:w-44 md:h-44 rounded-full bg-gray-100 border-2 border-transparent hover:border-power-blue flex items-center justify-center overflow-hidden transition-all"
          >
            <img
              src="/src/assets/images/6.png"
              alt="Shampoo (uso general)"
              class="w-full h-full object-cover"
            />
          </div>
          <span
            class="text-[10px] md:text-sm text-gray-700 font-medium group-hover:text-power-blue transition-colors text-center"
            >Shampoo (uso general)</span
          >
        </div>

        <!-- Desengrasantes -->
        <div
          class="flex flex-col items-center gap-2 md:gap-3 cursor-pointer group shrink-0 w-[calc(33.333%-6px)] md:w-auto snap-start"
        >
          <div
            class="w-24 h-24 md:w-44 md:h-44 rounded-full bg-gray-100 border-2 border-transparent hover:border-power-blue flex items-center justify-center overflow-hidden transition-all"
          >
            <img
              src="/src/assets/images/4.png"
              alt="Desengrasantes"
              class="w-full h-full object-cover"
            />
          </div>
          <span
            class="text-[10px] md:text-sm text-gray-700 font-medium group-hover:text-power-blue transition-colors text-center"
            >Desengrasantes</span
          >
        </div>

        <!-- Detergentes para ropa -->
        <div
          class="flex flex-col items-center gap-2 md:gap-3 cursor-pointer group shrink-0 w-[calc(33.333%-6px)] md:w-auto snap-start"
        >
          <div
            class="w-24 h-24 md:w-44 md:h-44 rounded-full bg-gray-100 border-2 border-transparent hover:border-power-blue flex items-center justify-center overflow-hidden transition-all"
          >
            <img
              src="/src/assets/images/5.png"
              alt="Detergentes para ropa"
              class="w-full h-full object-cover"
            />
          </div>
          <span
            class="text-[10px] md:text-sm text-gray-700 font-medium group-hover:text-power-blue transition-colors text-center"
            >Detergentes para ropa</span
          >
        </div>

        <!-- Shampoo para autos -->
        <div
          class="flex flex-col items-center gap-2 md:gap-3 cursor-pointer group shrink-0 w-[calc(33.333%-6px)] md:w-auto snap-start"
        >
          <div
            class="w-24 h-24 md:w-44 md:h-44 rounded-full bg-gray-100 border-2 border-transparent hover:border-power-blue flex items-center justify-center overflow-hidden transition-all"
          >
            <img
              src="/src/assets/images/3.png"
              alt="Shampoo para autos"
              class="w-full h-full object-cover"
            />
          </div>
          <span
            class="text-[10px] md:text-sm text-gray-700 font-medium group-hover:text-power-blue transition-colors text-center"
            >Shampoo para autos</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No functions — design only
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
