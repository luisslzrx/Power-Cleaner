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
              <img
                src="/src/assets/icons/trending-up-red.svg"
                alt="Mercado"
                class="w-7 h-7 flex-shrink-0"
              />
              <span class="text-xs md:text-sm font-semibold text-[#0b1a2e] leading-tight">
                Alta demanda<br />del mercado
              </span>
            </div>

            <!-- Feature 2 -->
            <div class="flex items-center gap-3">
              <img
                src="/src/assets/icons/star-outline-red.svg"
                alt="Calidad"
                class="w-7 h-7 flex-shrink-0"
              />
              <span class="text-xs md:text-sm font-semibold text-[#0b1a2e] leading-tight">
                Productos de<br />calidad premium
              </span>
            </div>

            <!-- Feature 3 -->
            <div class="flex items-center gap-3">
              <img
                src="/src/assets/icons/heart-outline-red.svg"
                alt="Soporte"
                class="w-7 h-7 flex-shrink-0"
              />
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
