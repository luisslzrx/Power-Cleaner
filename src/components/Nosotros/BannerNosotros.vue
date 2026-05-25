<template>
  <!-- Hero Section: Nuestra Misión -->
  <section class="w-full font-sans px-4 md:px-8">
    <div
      class="relative w-full overflow-hidden rounded-b-3xl bg-cover bg-center bg-no-repeat min-h-[400px] md:min-h-[580px]"
      :style="{ backgroundImage: `url(${fondo4})` }"
    >
      <!-- Blue overlay -->
      <div class="absolute inset-0 bg-power-primary/90"></div>

      <!-- Right image -->
      <div class="absolute right-0 top-0 w-1/2 h-[580px] hidden lg:block">
        <div
          class="absolute inset-0 z-10"
          style="background: linear-gradient(to right, #0a2340 15%, transparent 50%)"
        ></div>
        <img
          class="w-full h-full object-cover"
          src="/src/assets/images/nosotros-power-cleaner.webp"
          alt="Laboratorio de limpieza profesional"
        />
      </div>

      <!-- Content -->
      <div
        class="relative z-20 max-w-7xl mx-auto px-4 md:px-16 flex items-center h-full min-h-[400px] md:min-h-[580px]"
      >
        <div class="max-w-[600px] w-full">
          <!-- Label -->
          <span
            class="inline-block uppercase tracking-widest mb-3 md:mb-4 text-xs font-bold text-[#ff5a55]"
          >
            Nuestra Misión
          </span>

          <!-- Headline -->
          <h1
            class="mb-4 md:mb-6 text-3xl md:text-5xl font-extrabold leading-[1.1] md:leading-[1.1] tracking-tight text-white"
          >
            Elevamos los estándares de
            <span class="text-[#ff5a55]">limpieza profunda</span>
          </h1>

          <!-- Body text -->
          <p class="mb-6 md:mb-8 text-sm md:text-lg font-normal leading-relaxed text-[#86a0cd]">
            En Power Cleaner, nuestra misión es proporcionar soluciones de higiene de grado
            profesional que transformen espacios cotidianos en entornos seguros y saludables.
            Utilizamos ciencia avanzada para garantizar resultados impecables.
          </p>

          <!-- CTA Button -->
          <div class="flex gap-4">
            <button
              class="flex items-center gap-2 text-white text-sm font-semibold px-6 md:px-7 py-3 rounded-lg w-fit transition-all hover:opacity-90 bg-[#b91c1c]"
            >
              Comprar Ahora
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import fondo4 from '@/assets/images/fondo4.png'
// HeroSection component
</script>

<style scoped>
.hero-pattern {
  background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0);
  background-size: 40px 40px;
}
</style>
