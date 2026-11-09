<template>
  <!-- Hero Section: Tienda -->
  <section class="w-full font-sans px-4 md:px-8">
    <div
      class="relative w-full overflow-hidden rounded-b-3xl bg-cover bg-center bg-no-repeat min-h-[380px] sm:min-h-[440px] md:min-h-[540px] py-12 md:py-0 flex items-center"
      :style="{ backgroundImage: `url(${fondo4})` }"
    >
      <!-- Blue overlay -->
      <div class="absolute inset-0 bg-power-primary/90"></div>

      <!-- Right image -->
      <div class="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <div
          class="absolute inset-0 z-10"
          style="background: linear-gradient(to right, #0a2340 15%, transparent 50%)"
        ></div>
        <img
          class="w-full h-full object-cover"
          src="/src/assets/images/tienda-power-cleaner.webp"
          alt="Laboratorio de limpieza profesional"
        />
      </div>

      <!-- Content -->
      <div
        class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex items-center w-full min-h-[380px] sm:min-h-[440px] md:min-h-[540px]"
      >
        <div class="max-w-[620px] w-full text-left">
          <!-- Label -->
          <span
            class="inline-block uppercase tracking-widest mb-2.5 sm:mb-4 text-xs font-bold text-[#ff5a55]"
          >
            Tienda Online
          </span>

          <!-- Headline -->
          <h1
            class="mb-3.5 sm:mb-5 text-2xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] md:leading-[1.1] tracking-tight text-white"
          >
            Productos de limpieza
            <span class="text-[#ff5a55]">profesional</span>
          </h1>

          <!-- Body text -->
          <p class="mb-6 sm:mb-8 text-xs sm:text-base md:text-lg font-normal leading-relaxed text-[#86a0cd]">
            Descubre nuestra completa línea de productos de limpieza de grado profesional. Fórmulas
            efectivas, seguras y diseñadas para resultados impecables en hogar, negocio e industria.
          </p>

          <!-- CTA Button -->
          <div class="flex gap-4">
            <button
              @click="scrollToCatalog"
              class="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all hover:opacity-90 bg-power-accent shadow-md active:scale-95 cursor-pointer"
            >
              <span>Ver Catálogo</span>
              <img
                src="/src/assets/icons/arrow-right.svg"
                alt="Ver catálogo"
                class="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import fondo4 from '@/assets/images/fondo4.png'

const scrollToCatalog = () => {
  const el = document.getElementById('catalogo-productos')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-pattern {
  background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0);
  background-size: 40px 40px;
}
</style>
