<template>
  <!-- Misión y Visión Section -->
  <section class="bg-[#eef0f8] py-10 md:py-16">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Nosotros — <span class="text-power-accent">Misión y Visión</span>
        </h2>
      </div>
      <div class="w-full h-px bg-blue-500 mb-8 md:mb-10"></div>

      <div class="flex flex-col md:flex-row gap-4 md:gap-6">
        <!-- Card: Nuestra Misión -->
        <div class="flex-1 bg-white rounded-2xl p-6 md:p-12 border border-[#e8eaf0]">
          <!-- Ícono -->
          <div
            class="w-12 h-12 md:w-14 md:h-14 bg-[#fce8e8] rounded-xl flex items-center justify-center mb-6 md:mb-8"
          >
            <img
              src="/src/assets/icons/mision-flag.svg"
              alt="Misión"
              class="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
          <!-- Título -->
          <h3 class="text-xl md:text-2xl font-bold text-[#0b1a2e] mb-3 md:mb-4">Nuestra Misión</h3>
          <!-- Texto -->
          <p class="text-sm md:text-base font-normal leading-relaxed text-[#43474e]">
            Brindar soluciones integrales de limpieza mediante la fabricación de productos de alta
            calidad, innovadores y eficientes, que superen las expectativas de nuestros clientes,
            contribuyendo al bienestar, la higiene y la productividad de empresas en todo el país.
          </p>
        </div>

        <!-- Card: Nuestra Visión -->
        <div class="flex-1 bg-white rounded-2xl p-6 md:p-12 border border-[#e8eaf0]">
          <!-- Ícono -->
          <div
            class="w-12 h-12 md:w-14 md:h-14 bg-[#f0f1f5] rounded-xl flex items-center justify-center mb-6 md:mb-8"
          >
            <img
              src="/src/assets/icons/vision-eye.svg"
              alt="Visión"
              class="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
          <!-- Título -->
          <h3 class="text-xl md:text-2xl font-bold text-[#0b1a2e] mb-3 md:mb-4">Nuestra Visión</h3>
          <!-- Texto -->
          <p class="text-sm md:text-base font-normal leading-relaxed text-[#43474e]">
            Posicionar a Power Cleaner como una marca líder a nivel nacional e internacional,
            reconocida por su excelencia, calidad e innovación.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// MisionVision component
</script>
