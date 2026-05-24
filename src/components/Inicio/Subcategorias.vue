<template>
  <section>
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-2xl font-semibold text-power-primary">
          Todo en limpieza en <span class="text-power-accent">un solo lugar</span>
        </h2>
        <a
          href="#"
          class="flex items-center gap-1 text-sm text-gray-500 hover:text-power-blue transition-colors"
        >
          Ver más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
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
      <div class="w-full h-px bg-blue-500 mb-8"></div>

      <!-- Categories row -->
      <div class="grid grid-cols-6 gap-4">
        <!-- Cosmetics -->
        <div class="flex flex-col items-center gap-3 cursor-pointer group">
          <div
            class="w-44 h-44 rounded-full bg-gray-100 border-2 border-transparent hover:border-power-blue flex items-center justify-center overflow-hidden transition-all"
          >
            <img
              src="/src/assets/images/1.png"
              alt="Artículos de limpieza"
              class="w-full h-full object-cover"
            />
          </div>
          <span
            class="text-sm text-gray-700 font-medium group-hover:text-power-blue transition-colors"
            >Artículos de limpieza</span
          >
        </div>

        <!-- Limpiadores multiusos -->
        <div class="flex flex-col items-center gap-3 cursor-pointer group">
          <div
            class="w-44 h-44 rounded-full bg-gray-100 border-2 border-transparent hover:border-power-blue flex items-center justify-center overflow-hidden transition-all"
          >
            <img
              src="/src/assets/images/7.png"
              alt="Limpiadores multiusos"
              class="w-full h-full object-cover"
            />
          </div>
          <span
            class="text-sm text-gray-700 font-medium group-hover:text-power-blue transition-colors"
            >Limpiadores multiusos</span
          >
        </div>

        <!-- Shampoo (uso general) -->
        <div class="flex flex-col items-center gap-3 cursor-pointer group">
          <div
            class="w-44 h-44 rounded-full bg-gray-100 border-2 border-transparent hover:border-power-blue flex items-center justify-center overflow-hidden transition-all"
          >
            <img
              src="/src/assets/images/6.png"
              alt="Shampoo (uso general)"
              class="w-full h-full object-cover"
            />
          </div>
          <span
            class="text-sm text-gray-700 font-medium group-hover:text-power-blue transition-colors"
            >Shampoo (uso general)</span
          >
        </div>

        <!-- Desengrasantes -->
        <div class="flex flex-col items-center gap-3 cursor-pointer group">
          <div
            class="w-44 h-44 rounded-full bg-gray-100 border-2 border-transparent hover:border-power-blue flex items-center justify-center overflow-hidden transition-all"
          >
            <img
              src="/src/assets/images/4.png"
              alt="Desengrasantes"
              class="w-full h-full object-cover"
            />
          </div>
          <span
            class="text-sm text-gray-700 font-medium group-hover:text-power-blue transition-colors"
            >Desengrasantes</span
          >
        </div>

        <!-- Detergentes para ropa -->
        <div class="flex flex-col items-center gap-3 cursor-pointer group">
          <div
            class="w-44 h-44 rounded-full bg-gray-100 border-2 border-transparent hover:border-power-blue flex items-center justify-center overflow-hidden transition-all"
          >
            <img
              src="/src/assets/images/5.png"
              alt="Detergentes para ropa"
              class="w-full h-full object-cover"
            />
          </div>
          <span
            class="text-sm text-gray-700 font-medium group-hover:text-power-blue transition-colors"
            >Detergentes para ropa</span
          >
        </div>

        <!-- Shampoo para autos -->
        <div class="flex flex-col items-center gap-3 cursor-pointer group">
          <div
            class="w-44 h-44 rounded-full bg-gray-100 border-2 border-transparent hover:border-power-blue flex items-center justify-center overflow-hidden transition-all"
          >
            <img
              src="/src/assets/images/3.png"
              alt="Shampoo para autos"
              class="w-full h-full object-cover"
            />
          </div>
          <span
            class="text-sm text-gray-700 font-medium group-hover:text-power-blue transition-colors"
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
