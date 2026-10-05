<template>
  <section class="w-full px-4 md:px-8">
    <div
      class="relative w-full overflow-hidden rounded-b-3xl bg-cover bg-center bg-no-repeat min-h-[400px] md:min-h-[580px]"
      :style="{ backgroundImage: `url(${fondo4})` }"
    >
      <!-- Dark Blue Overlay -->
      <div class="absolute inset-0 bg-power-primary/90"></div>

      <!-- Right Side Image (Desktop Only) -->
      <div class="absolute right-0 top-0 w-1/2 h-[580px] hidden lg:block">
        <div
          class="absolute inset-0 z-10"
          style="background: linear-gradient(to right, #0A2342 15%, transparent 50%)"
        ></div>
        <img
          class="w-full h-full object-cover"
          src="/src/assets/images/categoria1.png"
          alt="Surtido de productos de limpieza"
        />
      </div>

      <!-- Hero Content -->
      <div
        class="relative z-20 max-w-7xl mx-auto px-4 md:px-16 flex items-center h-full min-h-[400px] md:min-h-[580px]"
      >
        <div class="max-w-[600px] w-full text-left">
          <!-- Label -->
          <span
            class="inline-block uppercase tracking-widest mb-3 md:mb-4 text-xs font-bold text-power-accent"
          >
            Socio Comercial & Distribución
          </span>

          <!-- Headline -->
          <h1
            class="mb-4 md:mb-6 text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Surtimos tu negocio con la calidad de
            <span class="text-power-accent">Power Cleaner</span>
          </h1>

          <!-- Description -->
          <p class="mb-6 md:mb-8 text-sm md:text-lg font-normal leading-relaxed text-blue-100">
            ¿Ya tienes un negocio establecido o quieres comenzar a vender a granel o envasados? 
            Accede a precios directos de fabricante y dale a tus clientes el mejor poder de limpieza.
          </p>

          <!-- CTA Button -->
          <div class="flex gap-4">
            <button
              @click="scrollToForm"
              class="flex items-center gap-2 text-white text-sm font-semibold px-6 md:px-7 py-3 rounded-lg w-fit transition-all hover:bg-red-800 bg-power-accent shadow-lg shadow-power-accent/20 cursor-pointer border-none outline-none"
            >
              Solicitar Cotización de Mayoreo
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

const scrollToForm = () => {
  const element = document.getElementById('mayoreo-form')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
