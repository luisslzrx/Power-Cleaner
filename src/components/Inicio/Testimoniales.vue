<template>
  <section class="bg-gray-100 py-8 md:py-16">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-6 md:mb-8">
        <h2 class="text-lg md:text-2xl font-bold text-gray-800">Lo que dicen nuestros clientes</h2>

        <!-- Nav arrows -->
        <div class="flex items-center gap-3">
          <button
            class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-power-blue hover:bg-blue-600 transition-colors flex items-center justify-center shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3 md:w-4 md:h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            class="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 bg-white hover:border-power-blue transition-colors flex items-center justify-center shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3 md:w-4 md:h-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <!-- Card 1 -->
        <div class="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm overflow-hidden">
          <!-- Left teal border accent -->
          <div
            class="absolute left-0 top-6 md:top-8 bottom-6 md:bottom-8 w-1 bg-power-blue rounded-full"
          ></div>

          <!-- Quote text -->
          <p class="text-gray-600 text-xs md:text-sm leading-relaxed pl-4 mb-6 md:mb-8">
            Power Cleaner ha transformado completamente mi rutina de limpieza. Sus productos no solo
            dejan todo impecable, sino que el aroma fresco dura días. Totalmente recomendado para
            quienes buscan calidad y eficacia.
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kristin"
              alt="Kristin Watson"
              class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-orange-200"
            />
            <div>
              <p class="text-xs md:text-sm font-semibold text-gray-800">María González</p>
              <p class="text-[10px] md:text-xs text-gray-400">Ama de casa</p>
            </div>
          </div>

          <!-- Big quote marks decoration -->
          <div
            class="absolute bottom-4 right-6 text-gray-200 text-6xl md:text-8xl font-serif leading-none select-none"
          >
            "
          </div>
        </div>

        <!-- Card 2 -->
        <div class="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm overflow-hidden">
          <!-- Left teal border accent -->
          <div
            class="absolute left-0 top-6 md:top-8 bottom-6 md:bottom-8 w-1 bg-power-blue rounded-full"
          ></div>

          <!-- Quote text -->
          <p class="text-gray-600 text-xs md:text-sm leading-relaxed pl-4 mb-6 md:mb-8">
            Como empresario, necesito que mi local luzca impecable. Power Cleaner me ofrece
            soluciones profesionales que ahorran tiempo y dinero. Mis clientes siempre comentan lo
            limpio que se ve todo.
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Esther"
              alt="Esther Howard"
              class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-purple-200"
            />
            <div>
              <p class="text-xs md:text-sm font-semibold text-gray-800">Carlos Rodríguez</p>
              <p class="text-[10px] md:text-xs text-gray-400">Dueño de restaurante</p>
            </div>
          </div>

          <!-- Big quote marks decoration -->
          <div
            class="absolute bottom-4 right-6 text-gray-200 text-6xl md:text-8xl font-serif leading-none select-none"
          >
            "
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No functions — design only
</script>
