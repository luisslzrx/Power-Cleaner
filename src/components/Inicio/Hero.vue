<template>
  <section class="w-full font-sans px-4 md:px-8 pb-8 md:pb-0">
    <div
      class="relative w-full overflow-hidden rounded-b-3xl min-h-[450px] md:min-h-[580px] pb-10 md:pb-0"
      :style="{
        backgroundImage: `url(${fondo2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <!-- Blue overlay -->
      <div class="absolute inset-0 bg-power-primary/60"></div>

      <!-- Prev arrow - hidden on mobile -->
      <button
        @click="prevSlide"
        class="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm items-center justify-center hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
      >
        <IconChevronLeft class="w-5 h-5 text-white/70" />
      </button>

      <!-- Next arrow - hidden on mobile -->
      <button
        @click="nextSlide"
        class="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm items-center justify-center hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
      >
        <IconChevronRight class="w-5 h-5 text-white/70" />
      </button>

      <!-- Slide content wrapper -->
      <div class="relative w-full min-h-[450px] md:min-h-[580px] flex items-center">
        <!-- Slide 0: Productos -->
        <div
          class="w-full transition-all duration-700 absolute inset-0 max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between h-full min-h-[400px] md:min-h-[580px] gap-6 md:gap-0"
          :class="activeSlide === 0 ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 pointer-events-none translate-x-4'"
        >
          <!-- Left: Text -->
          <div class="flex flex-col gap-4 md:gap-6 z-10 max-w-lg w-full text-center md:text-left order-2 md:order-1 pt-6 md:pt-0">
            <h2 class="text-xs md:text-sm font-semibold tracking-[0.25em] text-white/80 uppercase">
              Power Cleaner
            </h2>

            <h1 class="font-extrabold leading-none tracking-tight text-3xl md:text-[4.5rem]">
              <span class="text-white">El poder de</span><br />
              <span class="text-red-500">la limpieza</span>
            </h1>

            <p class="text-xs md:text-base font-medium text-white/90 leading-relaxed uppercase">
              Soluciones profesionales para empresas que exigen resultados
            </p>

            <div class="flex items-center gap-1 justify-center md:justify-start">
              <span v-for="i in 5" :key="i" class="text-yellow-400 text-sm">★</span>
              <span class="text-white/70 text-xs ml-2">Calidad garantizada</span>
            </div>

            <router-link
              to="/tienda"
              class="flex items-center justify-center gap-2 text-white text-sm font-semibold px-6 md:px-7 py-3 rounded-lg w-fit transition-all hover:opacity-90 mx-auto md:mx-0 bg-red-600 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Comprar Ahora</span>
              <IconArrowRight class="w-4 h-4 text-white" />
            </router-link>
          </div>

          <!-- Right: Product image -->
          <div class="relative flex items-center justify-center flex-shrink-0 order-1 md:order-2 w-[260px] h-[260px] md:w-[520px] md:h-[520px]">
            <!-- Circles and glow -->
            <div class="absolute rounded-full border border-power-secondary/30 w-[240px] h-[240px] md:w-[480px] md:h-[480px]"></div>
            <div class="absolute rounded-full border border-power-secondary/10 w-[200px] h-[200px] md:w-[400px] md:h-[400px]" style="background: radial-gradient(circle, rgb(var(--color-power-primary, 10 35 66) / 0.9) 0%, rgb(var(--color-power-primary, 10 35 66) / 0.6) 100%)"></div>
            <div class="absolute rounded-full w-[130px] h-[130px] md:w-[280px] md:h-[280px]" style="background: radial-gradient(circle, rgba(12, 30, 74, 0.6) 0%, transparent 70%)"></div>

            <img
              src="/src/assets/images/productos-hero.webp"
              alt="Productos Power Cleaner"
              class="relative z-10 object-contain max-h-[220px] max-w-[220px] md:max-h-[500px] md:max-w-[500px] transition-transform duration-700 hover:rotate-2"
              style="filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))"
            />

            <!-- American Formula label -->
            <div class="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-25 flex items-center gap-2 md:gap-3 border border-white/10 bg-white/[0.05] backdrop-blur-sm rounded-md px-3 md:px-5 py-2 max-w-fit shadow-md">
              <IconBandera class="w-4 h-3 md:w-6 md:h-4 object-contain flex-shrink-0" />
              <p class="text-white font-bold tracking-[0.25em] uppercase text-[9px] md:text-xs flex items-center gap-2 whitespace-nowrap">
                <span class="text-white/40">★</span>
                Fórmula Americana
                <span class="text-white/40">★</span>
              </p>
              <IconBandera class="w-4 h-3 md:w-6 md:h-4 object-contain flex-shrink-0" />
            </div>
          </div>
        </div>

        <!-- Slide 1: Franquicias -->
        <div
          class="w-full transition-all duration-700 absolute inset-0 max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between h-full min-h-[400px] md:min-h-[580px] gap-6 md:gap-0"
          :class="activeSlide === 1 ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 pointer-events-none -translate-x-4'"
        >
          <!-- Left: Text -->
          <div class="flex flex-col gap-4 md:gap-6 z-10 max-w-lg w-full text-center md:text-left order-2 md:order-1 pt-6 md:pt-0">
            <h2 class="text-xs md:text-sm font-semibold tracking-[0.25em] text-white/80 uppercase">
              Modelos de Negocio
            </h2>

            <h1 class="font-extrabold leading-none tracking-tight text-3xl md:text-[4.5rem]">
              <span class="text-white">Invierte en</span><br />
              <span class="text-red-500">Franquicias</span>
            </h1>

            <p class="text-xs md:text-base font-medium text-white/90 leading-relaxed uppercase">
              Únete a la marca líder con alta rentabilidad y presencia a nivel nacional
            </p>

            <div class="flex items-center gap-1 justify-center md:justify-start">
              <span v-for="i in 5" :key="i" class="text-yellow-400 text-sm">★</span>
              <span class="text-white/70 text-xs ml-2">Retorno de inversión garantizado</span>
            </div>

            <router-link
              to="/venta-de-franquicias"
              class="flex items-center justify-center gap-2 text-white text-sm font-semibold px-6 md:px-7 py-3 rounded-lg w-fit transition-all hover:opacity-90 mx-auto md:mx-0 bg-red-600 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Ver Franquicias</span>
              <IconArrowRight class="w-4 h-4 text-white" />
            </router-link>
          </div>

          <!-- Right: Franchise image -->
          <div class="relative flex items-center justify-center flex-shrink-0 order-1 md:order-2 w-[260px] h-[260px] md:w-[520px] md:h-[520px]">
            <!-- Circles and glow -->
            <div class="absolute rounded-full border border-power-secondary/30 w-[240px] h-[240px] md:w-[480px] md:h-[480px]"></div>
            <div class="absolute rounded-full border border-power-secondary/10 w-[200px] h-[200px] md:w-[400px] md:h-[400px]" style="background: radial-gradient(circle, rgb(var(--color-power-primary, 10 35 66) / 0.9) 0%, rgb(var(--color-power-primary, 10 35 66) / 0.6) 100%)"></div>
            <div class="absolute rounded-full w-[130px] h-[130px] md:w-[280px] md:h-[280px]" style="background: radial-gradient(circle, rgba(12, 30, 74, 0.6) 0%, transparent 70%)"></div>

            <img
              src="/src/assets/images/franquicias.webp"
              alt="Franquicias Power Cleaner"
              class="relative z-10 object-cover w-[200px] h-[200px] md:w-[360px] md:h-[360px] rounded-full border-4 border-white/20 transition-transform duration-700 hover:scale-105"
              style="filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))"
            />

            <!-- American Formula label -->
            <div class="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-25 flex items-center gap-2 md:gap-3 border border-white/10 bg-white/[0.05] backdrop-blur-sm rounded-md px-3 md:px-5 py-2 max-w-fit shadow-md">
              <span class="text-white/40">★</span>
              <p class="text-white font-bold tracking-[0.25em] uppercase text-[9px] md:text-xs flex items-center gap-2 whitespace-nowrap">
                Presencia Nacional
              </p>
              <span class="text-white/40">★</span>
            </div>
          </div>
        </div>

        <!-- Slide 2: Maquila -->
        <div
          class="w-full transition-all duration-700 absolute inset-0 max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between h-full min-h-[400px] md:min-h-[580px] gap-6 md:gap-0"
          :class="activeSlide === 2 ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 pointer-events-none -translate-x-4'"
        >
          <!-- Left: Text -->
          <div class="flex flex-col gap-4 md:gap-6 z-10 max-w-lg w-full text-center md:text-left order-2 md:order-1 pt-6 md:pt-0">
            <h2 class="text-xs md:text-sm font-semibold tracking-[0.25em] text-white/80 uppercase">
              Servicios Industriales
            </h2>

            <h1 class="font-extrabold leading-none tracking-tight text-3xl md:text-[4.5rem]">
              <span class="text-white">Maquila tu</span><br />
              <span class="text-red-500">producto</span>
            </h1>

            <p class="text-xs md:text-base font-medium text-white/90 leading-relaxed uppercase">
              Desarrollamos y fabricamos tu línea de productos de limpieza con calidad de exportación
            </p>

            <div class="flex items-center gap-1 justify-center md:justify-start">
              <span v-for="i in 5" :key="i" class="text-yellow-400 text-sm">★</span>
              <span class="text-white/70 text-xs ml-2">Asesoría y formulación profesional</span>
            </div>

            <router-link
              to="/maquila-tu-producto"
              class="flex items-center justify-center gap-2 text-white text-sm font-semibold px-6 md:px-7 py-3 rounded-lg w-fit transition-all hover:opacity-90 mx-auto md:mx-0 bg-red-600 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Cotizar Maquila</span>
              <IconArrowRight class="w-4 h-4 text-white" />
            </router-link>
          </div>

          <!-- Right: Maquila image -->
          <div class="relative flex items-center justify-center flex-shrink-0 order-1 md:order-2 w-[260px] h-[260px] md:w-[520px] md:h-[520px]">
            <!-- Circles and glow -->
            <div class="absolute rounded-full border border-power-secondary/30 w-[240px] h-[240px] md:w-[480px] md:h-[480px]"></div>
            <div class="absolute rounded-full border border-power-secondary/10 w-[200px] h-[200px] md:w-[400px] md:h-[400px]" style="background: radial-gradient(circle, rgb(var(--color-power-primary, 10 35 66) / 0.9) 0%, rgb(var(--color-power-primary, 10 35 66) / 0.6) 100%)"></div>
            <div class="absolute rounded-full w-[130px] h-[130px] md:w-[280px] md:h-[280px]" style="background: radial-gradient(circle, rgba(12, 30, 74, 0.6) 0%, transparent 70%)"></div>

            <img
              src="/src/assets/images/maquila.webp"
              alt="Maquila tu producto Power Cleaner"
              class="relative z-10 object-cover w-[200px] h-[200px] md:w-[360px] md:h-[360px] rounded-full border-4 border-white/20 transition-transform duration-700 hover:scale-105"
              style="filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))"
            />

            <!-- American Formula label -->
            <div class="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-25 flex items-center gap-2 md:gap-3 border border-white/10 bg-white/[0.05] backdrop-blur-sm rounded-md px-3 md:px-5 py-2 max-w-fit shadow-md">
              <span class="text-white/40">★</span>
              <p class="text-white font-bold tracking-[0.25em] uppercase text-[9px] md:text-xs flex items-center gap-2 whitespace-nowrap">
                Fórmula Personalizada
              </p>
              <span class="text-white/40">★</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide indicator dots -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        <button
          v-for="index in 3"
          :key="index - 1"
          @click="activeSlide = index - 1"
          class="w-2.5 h-2.5 rounded-full transition-all duration-300"
          :class="activeSlide === index - 1 ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import fondo2 from '@/assets/images/fondo2.png'
import { IconChevronLeft, IconChevronRight, IconArrowRight, IconBandera } from '@/components/Icons'

const activeSlide = ref(0)
let autoplayInterval = null

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % 3
}

const prevSlide = () => {
  activeSlide.value = activeSlide.value === 0 ? 2 : activeSlide.value - 1
}

onMounted(() => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 6000)
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>
