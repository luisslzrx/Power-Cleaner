<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Explora <span class="text-power-accent">por categoría</span>
        </h2>
        <a
          href="#"
          class="flex items-center gap-1 text-xs md:text-sm text-gray-500 hover:text-blue-500 transition-colors"
        >
          Ver todo
          <IconChevronRight class="w-3 h-3 md:w-4 md:h-4 opacity-60 text-gray-500" />
        </a>
      </div>
      <!-- Underline -->
      <div class="w-full h-px bg-blue-500 mb-4 md:mb-6"></div>

      <!-- Brand cards/carrusel -->
      <div
        class="flex md:grid md:grid-cols-3 gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        <!-- Card 1 -->
        <div
          class="relative rounded-2xl overflow-hidden flex items-end justify-between p-4 md:p-6 bg-gradient-to-br from-power-primary to-power-secondary min-h-[180px] md:min-h-[220px] shrink-0 w-full md:w-auto snap-start cursor-pointer group"
        >
          <!-- Circle 1 -->
          <div
            class="absolute -right-10 -top-10 size-48 md:size-64 rounded-full transition-transform duration-500 group-hover:scale-105"
            style="background: rgba(185, 28, 28, 0.12); border: 1px solid rgba(185, 28, 28, 0.15)"
          ></div>
          <!-- Circle 2 -->
          <div
            class="absolute right-2 top-1 size-32 md:size-40 rounded-full"
            style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(185, 28, 28, 0.08)"
          ></div>

          <!-- Left content -->
          <div
            class="flex flex-col justify-between h-full z-10 gap-3 md:gap-4"
            style="min-height: 132px; md:min-height: 172px"
          >
            <!-- Title top left -->
            <p
              class="text-lg md:text-2xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm"
            >
              Limpieza <br />del hogar
            </p>

            <!-- Icon bottom left -->
            <div
              class="size-10 md:size-14 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center shadow-inner self-start"
            >
              <IconLimpieza class="size-6 md:size-8 text-white" />
            </div>
          </div>

          <!-- Product image -->
          <div
            class="absolute -right-4 bottom-0 h-40 md:h-56 z-10 transition-transform duration-500 group-hover:scale-105"
          >
            <img
              src="/src/assets/images/productos-limpieza.png"
              alt="Artículos de limpieza"
              class="h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="relative rounded-2xl overflow-hidden flex items-end justify-between p-4 md:p-6 bg-gradient-to-br from-power-primary to-power-secondary min-h-[180px] md:min-h-[220px] shrink-0 w-full md:w-auto snap-start cursor-pointer group"
        >
          <!-- Circle 1 -->
          <div
            class="absolute -right-10 -top-10 size-48 md:size-64 rounded-full transition-transform duration-500 group-hover:scale-105"
            style="background: rgba(185, 28, 28, 0.12); border: 1px solid rgba(185, 28, 28, 0.15)"
          ></div>
          <!-- Circle 2 -->
          <div
            class="absolute right-2 top-1 size-32 md:size-40 rounded-full"
            style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(185, 28, 28, 0.08)"
          ></div>

          <!-- Left content -->
          <div
            class="flex flex-col justify-between h-full z-10 gap-3 md:gap-4"
            style="min-height: 132px; md:min-height: 172px"
          >
            <!-- Title top left -->
            <p
              class="text-lg md:text-2xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm"
            >
              Artículos de<br />Limpieza
            </p>

            <!-- Icon bottom left -->
            <div
              class="size-10 md:size-14 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center shadow-inner self-start"
            >
              <IconLimpieza class="size-6 md:size-8 text-white" />
            </div>
          </div>

          <!-- Product image -->
          <div
            class="absolute -right-10 -bottom-14 h-40 md:h-72 z-10 transition-transform duration-500 group-hover:scale-105"
          >
            <img
              src="/src/assets/images/articulos-limpieza.png"
              alt="Artículos de limpieza"
              class="h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="relative rounded-2xl overflow-hidden flex items-end justify-between p-4 md:p-6 bg-gradient-to-br from-power-primary to-power-secondary min-h-[180px] md:min-h-[220px] shrink-0 w-full md:w-auto snap-start cursor-pointer group"
        >
          <!-- Circle 1 -->
          <div
            class="absolute -right-10 -top-10 size-48 md:size-64 rounded-full transition-transform duration-500 group-hover:scale-105"
            style="background: rgba(185, 28, 28, 0.12); border: 1px solid rgba(185, 28, 28, 0.15)"
          ></div>
          <!-- Circle 2 -->
          <div
            class="absolute right-2 top-1 size-32 md:size-40 rounded-full"
            style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(185, 28, 28, 0.08)"
          ></div>

          <!-- Left content -->
          <div
            class="flex flex-col justify-between h-full z-10 gap-3 md:gap-4"
            style="min-height: 132px; md:min-height: 172px"
          >
            <!-- Title top left -->
            <p
              class="text-lg md:text-2xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm"
            >
              Línea <br />automotriz
            </p>

            <!-- Icon bottom left -->
            <div
              class="size-10 md:size-14 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center shadow-inner self-start"
            >
              <IconLimpieza class="size-6 md:size-8 text-white" />
            </div>
          </div>

          <!-- Product image -->
          <div
            class="absolute -right-4 -bottom-4 h-40 md:h-56 z-10 transition-transform duration-500 group-hover:scale-105"
          >
            <img
              src="/src/assets/images/automotriz.png"
              alt="Línea automotriz"
              class="h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { IconChevronRight, IconLimpieza } from '@/components/Icons'
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
