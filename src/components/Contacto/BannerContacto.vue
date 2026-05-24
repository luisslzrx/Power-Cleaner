<template>
  <!-- Hero Section: Nuestra Misión -->
  <section class="w-full font-sans px-8">
    <div
      class="relative w-full overflow-hidden rounded-b-3xl bg-cover bg-center bg-no-repeat"
      style="min-height: 580px; background-image: url('/src/assets/images/fondo4.png')"
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
          src="/src/assets/images/sucursal1.png"
          alt="Laboratorio de limpieza profesional"
        />
      </div>

      <!-- Content -->
      <div
        class="relative z-20 max-w-7xl mx-auto px-16 flex items-center h-full"
        style="min-height: 580px"
      >
        <div class="max-w-[600px]">
          <!-- Label -->
          <span
            class="inline-block uppercase tracking-widest mb-4 text-xs font-bold text-[#ff5a55]"
          >
            Contacto
          </span>

          <!-- Headline -->
          <h1 class="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
            Estamos aquí para
            <span class="text-[#ff5a55]">ayudarte</span>
          </h1>

          <!-- Body text -->
          <p class="mb-8 text-lg font-normal leading-relaxed text-[#86a0cd]">
            ¿Tienes preguntas sobre nuestros productos, necesitas una cotización o quieres conocer
            más sobre nuestras franquicias? Nuestro equipo está listo para atenderte y brindarte la
            mejor solución para tus necesidades de limpieza profesional.
          </p>

          <!-- CTA Button -->
          <div class="flex gap-4">
            <button
              class="flex items-center gap-2 text-white text-sm font-semibold px-7 py-3 rounded-lg w-fit transition-all hover:opacity-90 bg-[#b91c1c]"
            >
              Contáctanos
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
// HeroSection component
</script>

<style scoped></style>
