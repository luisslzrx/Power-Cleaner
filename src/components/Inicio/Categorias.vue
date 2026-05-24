<template>
  <section>
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-xl font-semibold text-power-primary">
          Explora <span class="text-power-accent">por categoría</span>
        </h2>
        <a
          href="#"
          class="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors"
        >
          View All
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
      <div class="w-full h-px bg-blue-500 mb-6"></div>

      <!-- Brand cards -->
      <div class="grid grid-cols-3 gap-5">
        <!-- Card 1 -->
        <div
          class="relative rounded-2xl overflow-hidden flex items-end justify-between p-6 bg-gradient-to-br from-power-primary to-power-secondary min-h-[220px]"
        >
          <!-- Circle 1 -->
          <div
            class="absolute -right-10 -top-10 size-64 rounded-full"
            style="background: rgba(185, 28, 28, 0.12); border: 1px solid rgba(185, 28, 28, 0.15)"
          ></div>
          <!-- Circle 2 -->
          <div
            class="absolute right-2 top-1 size-40 rounded-full"
            style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(185, 28, 28, 0.08)"
          ></div>

          <!-- Left content -->
          <div class="flex flex-col justify-between h-full z-10 gap-4" style="min-height: 172px">
            <span
              class="self-start text-xs font-bold tracking-[0.18em] text-white/80 bg-white/15 border border-white/20 backdrop-blur-sm px-3 py-1 rounded-full uppercase"
            >
              LIMPIEZA
            </span>
            <div
              class="size-14 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center shadow-inner"
            >
              <img
                src="/src/assets/icons/limpieza.svg"
                alt="Limpieza"
                class="size-8 brightness-0 invert"
              />
            </div>
            <div class="flex flex-col gap-0.5">
              <p
                class="text-2xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm"
              >
                Limpieza <br />del hogar
              </p>
            </div>
          </div>

          <!-- Product image -->
          <div class="absolute -right-4 bottom-0 h-56 z-10">
            <img
              src="/src/assets/images/categoria1.png"
              alt="Artículos de limpieza"
              class="h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="relative rounded-2xl overflow-hidden flex items-end justify-between p-6 bg-gradient-to-br from-power-primary to-power-secondary min-h-[220px]"
        >
          <!-- Circle 1 -->
          <div
            class="absolute -right-10 -top-10 size-64 rounded-full"
            style="background: rgba(185, 28, 28, 0.12); border: 1px solid rgba(185, 28, 28, 0.15)"
          ></div>
          <!-- Circle 2 -->
          <div
            class="absolute right-2 top-1 size-40 rounded-full"
            style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(185, 28, 28, 0.08)"
          ></div>

          <!-- Left content -->
          <div class="flex flex-col justify-between h-full z-10 gap-4" style="min-height: 172px">
            <span
              class="self-start text-xs font-bold tracking-[0.18em] text-white/80 bg-white/15 border border-white/20 backdrop-blur-sm px-3 py-1 rounded-full uppercase"
            >
              LIMPIEZA
            </span>
            <div
              class="size-14 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center shadow-inner"
            >
              <img
                src="/src/assets/icons/limpieza.svg"
                alt="Limpieza"
                class="size-8 brightness-0 invert"
              />
            </div>
            <div class="flex flex-col gap-0.5">
              <p
                class="text-2xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm"
              >
                Artículos de<br />Limpieza
              </p>
            </div>
          </div>

          <!-- Product image -->
          <div class="absolute -right-4 bottom-0 h-56 z-10">
            <img
              src="/src/assets/images/categoria2.png"
              alt="Artículos de limpieza"
              class="h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="relative rounded-2xl overflow-hidden flex items-end justify-between p-6 bg-gradient-to-br from-power-primary to-power-secondary min-h-[220px]"
        >
          <!-- Circle 1 -->
          <div
            class="absolute -right-10 -top-10 size-64 rounded-full"
            style="background: rgba(185, 28, 28, 0.12); border: 1px solid rgba(185, 28, 28, 0.15)"
          ></div>
          <!-- Circle 2 -->
          <div
            class="absolute right-2 top-1 size-40 rounded-full"
            style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(185, 28, 28, 0.08)"
          ></div>

          <!-- Left content -->
          <div class="flex flex-col justify-between h-full z-10 gap-4" style="min-height: 172px">
            <span
              class="self-start text-xs font-bold tracking-[0.18em] text-white/80 bg-white/15 border border-white/20 backdrop-blur-sm px-3 py-1 rounded-full uppercase"
            >
              LIMPIEZA
            </span>
            <div
              class="size-14 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center shadow-inner"
            >
              <img
                src="/src/assets/icons/limpieza.svg"
                alt="Limpieza"
                class="size-8 brightness-0 invert"
              />
            </div>
            <div class="flex flex-col gap-0.5">
              <p
                class="text-2xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm"
              >
                Línea <br />automotriz
              </p>
            </div>
          </div>

          <!-- Product image -->
          <div class="absolute -right-4 bottom-0 h-56 z-10">
            <img
              src="/src/assets/images/categoria3.png"
              alt="Línea automotriz"
              class="h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div class="flex items-center justify-center gap-2 mt-6">
        <span class="w-6 h-2 rounded-full bg-blue-500 cursor-pointer"></span>
        <span class="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
        <span class="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
        <span class="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
        <span class="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
        <span class="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
        <span class="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
// No functions — design only
</script>
