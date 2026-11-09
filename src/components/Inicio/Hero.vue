<template>
  <section class="w-full font-sans px-4 md:px-8 pb-10 md:pb-14">
    <div
      class="relative w-full overflow-hidden rounded-b-3xl min-h-[460px] md:min-h-[580px] flex items-center py-8 md:py-12"
      :style="{
        backgroundImage: `url(${fondo2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <!-- Blue overlay -->
      <div class="absolute inset-0 bg-power-primary/60"></div>

      <!-- Hero Content -->
      <div
        class="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
      >
        <!-- Left: Text -->
        <div
          class="flex flex-col gap-4 md:gap-6 max-w-lg w-full text-center md:text-left order-2 md:order-1 pt-4 md:pt-0"
        >
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
        <div
          class="relative flex items-center justify-center flex-shrink-0 order-1 md:order-2 w-[260px] h-[260px] md:w-[520px] md:h-[520px]"
        >
          <!-- Circles and glow -->
          <div
            class="absolute rounded-full border border-power-secondary/30 w-[240px] h-[240px] md:w-[480px] md:h-[480px]"
          ></div>
          <div
            class="absolute rounded-full border border-power-secondary/10 w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
            style="
              background: radial-gradient(
                circle,
                rgb(var(--color-power-primary, 10 35 66) / 0.9) 0%,
                rgb(var(--color-power-primary, 10 35 66) / 0.6) 100%
              );
            "
          ></div>
          <div
            class="absolute rounded-full w-[130px] h-[130px] md:w-[280px] md:h-[280px]"
            style="background: radial-gradient(circle, rgba(12, 30, 74, 0.6) 0%, transparent 70%)"
          ></div>

          <img
            src="/src/assets/images/productos-hero.webp"
            alt="Productos Power Cleaner"
            class="relative z-10 object-contain max-h-[220px] max-w-[220px] md:max-h-[500px] md:max-w-[500px] transition-transform duration-700 hover:rotate-2"
            style="filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))"
          />

          <!-- American Formula label -->
          <div
            class="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-25 flex items-center gap-2 md:gap-3 border border-white/10 bg-white/[0.05] backdrop-blur-sm rounded-md px-3 md:px-5 py-2 max-w-fit shadow-md"
          >
            <IconBandera class="w-4 h-3 md:w-6 md:h-4 object-contain flex-shrink-0" />
            <p
              class="text-white font-bold tracking-[0.25em] uppercase text-[9px] md:text-xs flex items-center gap-2 whitespace-nowrap"
            >
              <span class="text-white/40">★</span>
              Fórmula Americana
              <span class="text-white/40">★</span>
            </p>
            <IconBandera class="w-4 h-3 md:w-6 md:h-4 object-contain flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import fondo2 from '@/assets/images/fondo2.png'
import { IconArrowRight, IconBandera } from '@/components/Icons'
</script>
