<template>
  <!-- Sobre el Modelo de Franquicia Section -->
  <section class="my-16">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
        <!-- Columna izquierda: imagen -->
        <div class="relative flex-1 w-full">
          <div
            class="relative overflow-hidden rounded-2xl w-full h-[320px] md:h-[420px] bg-gray-100"
            style="
              background-image: url('/src/assets/images/producto-power-clean.webp');
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
            "
          ></div>
          <!-- Patrón de puntos decorativo -->
          <div class="hidden md:grid grid-cols-3 gap-2 absolute -top-4 -right-4 opacity-60">
            <span v-for="n in 9" :key="n" class="w-1.5 h-1.5 rounded-full bg-[#b52426]"></span>
          </div>
        </div>

        <!-- Columna derecha: texto -->
        <div class="flex-1 w-full">
          <!-- Eyebrow -->
          <span
            class="block mb-2 md:mb-3 text-xs font-bold tracking-[0.15em] uppercase text-power-accent"
          >
            Sobre el Modelo
          </span>

          <!-- Título -->
          <h2 class="mb-4 md:mb-6 text-2xl md:text-4xl font-extrabold text-[#0b1a2e] leading-tight">
            Una Oportunidad de Negocio Real
          </h2>

          <!-- Párrafos -->
          <div class="flex flex-col gap-3 md:gap-4 mb-8 md:mb-10">
            <p class="text-sm md:text-base text-[#43474e] leading-relaxed">
              Power Cleaner ofrece un modelo de franquicia enfocado en un mercado de alta demanda y
              consumo constante.
            </p>
            <p class="text-sm md:text-base text-[#43474e] leading-relaxed">
              Nuestros productos están diseñados para hogares, negocios e industrias, permitiendo a
              <span class="font-bold text-[#0b1a2e]"> nuestros franquiciatarios contar con</span>
              una amplia variedad de soluciones efectivas y rendidoras.
            </p>
          </div>

          <!-- Features inferiores -->
          <div class="flex flex-wrap gap-x-8 gap-y-5">
            <!-- Feature 1 -->
            <div class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7 text-[#b52426] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941"
                />
              </svg>
              <span class="text-xs md:text-sm font-semibold text-[#0b1a2e] leading-tight">
                Alta demanda<br />del mercado
              </span>
            </div>

            <!-- Feature 2 -->
            <div class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7 text-[#b52426] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <span class="text-xs md:text-sm font-semibold text-[#0b1a2e] leading-tight">
                Productos de<br />calidad premium
              </span>
            </div>

            <!-- Feature 3 -->
            <div class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7 text-[#b52426] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span class="text-xs md:text-sm font-semibold text-[#0b1a2e] leading-tight">
                Respaldo y<br />acompañamiento
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// FranquiciaInfo component
</script>
