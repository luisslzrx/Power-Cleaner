<template>
  <section class="max-w-7xl mx-auto px-4 md:px-6">
    <div
      class="relative overflow-hidden rounded-3xl px-4 md:px-6 py-12 md:py-20"
      style="background-color: #0b1a2e"
    >
      <!-- Background image -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${fondo4})` }"
      ></div>

      <!-- Blue overlay -->
      <div class="absolute inset-0 bg-[#0b1a2e]/90"></div>

      <!-- Right image -->
      <div class="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div
          class="absolute inset-0 z-10"
          style="background: linear-gradient(to right, #0b1a2e 5%, transparent 50%)"
        ></div>
        <img
          class="w-full h-full object-cover"
          src="/src/assets/images/sucursal1.png"
          alt="Sucursal Power Cleaner"
        />
      </div>

      <!-- Content -->
      <div class="relative z-20 max-w-7xl mx-auto px-4 md:px-16 flex items-center">
        <div class="max-w-[600px] w-full">
          <!-- Columna izquierda: texto y beneficios -->
          <div>
            <!-- Label -->
            <span
              class="block mb-3 md:mb-4 font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#ff5a55]"
            >
              Franquicias
            </span>

            <!-- Título -->
            <h2
              class="mb-4 md:mb-6 font-montserrat text-2xl md:text-4xl font-extrabold text-white leading-tight"
            >
              Un Negocio Rentable con Respaldo Comprobado
            </h2>

            <!-- Descripción -->
            <p
              class="mb-6 md:mb-8 font-sans text-sm md:text-base font-normal leading-[1.7] text-[#86a0cd]"
            >
              Únete a la red de franquicias de Power Cleaner y forma parte de una marca líder en el
              mercado de productos de limpieza. Ofrecemos apoyo total, capacitación continua y
              productos de alta demanda.
            </p>

            <!-- Lista de beneficios -->
            <ul class="flex flex-col gap-2 md:gap-3 p-0 m-0 list-none">
              <li class="flex items-start gap-3">
                <img
                  src="/src/assets/icons/check.svg"
                  alt="Check"
                  class="w-5 h-5 flex-shrink-0 mt-0.5"
                  style="
                    filter: invert(42%) sepia(89%) saturate(2476%) hue-rotate(346deg)
                      brightness(91%) contrast(89%);
                  "
                />
                <span class="font-sans text-sm md:text-base text-[#cdd8f0] leading-relaxed">
                  Marca reconocida y líder en el mercado.
                </span>
              </li>

              <li class="flex items-start gap-3">
                <img
                  src="/src/assets/icons/check.svg"
                  alt="Check"
                  class="w-5 h-5 flex-shrink-0 mt-0.5"
                  style="
                    filter: invert(42%) sepia(89%) saturate(2476%) hue-rotate(346deg)
                      brightness(91%) contrast(89%);
                  "
                />
                <span class="font-sans text-sm md:text-base text-[#cdd8f0] leading-relaxed">
                  Alta rentabilidad con productos de alta demanda.
                </span>
              </li>

              <li class="flex items-start gap-3">
                <img
                  src="/src/assets/icons/check.svg"
                  alt="Check"
                  class="w-5 h-5 flex-shrink-0 mt-0.5"
                  style="
                    filter: invert(42%) sepia(89%) saturate(2476%) hue-rotate(346deg)
                      brightness(91%) contrast(89%);
                  "
                />
                <span class="font-sans text-sm md:text-base text-[#cdd8f0] leading-relaxed">
                  Apoyo total: capacitación, publicidad y asesoría continua.
                </span>
              </li>

              <li class="flex items-start gap-3">
                <img
                  src="/src/assets/icons/check.svg"
                  alt="Check"
                  class="w-5 h-5 flex-shrink-0 mt-0.5"
                  style="
                    filter: invert(42%) sepia(89%) saturate(2476%) hue-rotate(346deg)
                      brightness(91%) contrast(89%);
                  "
                />
                <span class="font-sans text-sm md:text-base text-[#cdd8f0] leading-relaxed">
                  Productos de calidad con fórmulas efectivas y confiables.
                </span>
              </li>

              <li class="flex items-start gap-3">
                <img
                  src="/src/assets/icons/check.svg"
                  alt="Check"
                  class="w-5 h-5 flex-shrink-0 mt-0.5"
                  style="
                    filter: invert(42%) sepia(89%) saturate(2476%) hue-rotate(346deg)
                      brightness(91%) contrast(89%);
                  "
                />
                <span class="font-sans text-sm md:text-base text-[#cdd8f0] leading-relaxed">
                  Presencia en todo México con franquicias disponibles.
                </span>
              </li>
            </ul>

            <!-- CTA Button -->
            <button
              class="flex items-center gap-2 bg-power-accent text-white text-sm font-semibold px-6 md:px-7 py-3 rounded-lg w-fit transition-all hover:opacity-90 mt-6 md:mt-8"
            >
              Quiero mi franquicia
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
// No functions — design only
</script>
