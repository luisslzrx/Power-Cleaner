<template>
  <section class="w-full">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Contenedor principal flex -->
      <div class="flex gap-14 items-stretch">
        <!-- Izquierda: Imagen -->
        <div
          class="relative overflow-hidden rounded-2xl flex-1"
          :style="{
            backgroundImage: `url(${productoPowerClean})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100%',
          }"
        ></div>

        <!-- Derecha: Texto -->
        <div class="flex flex-col gap-7 flex-1">
          <!-- Eyebrow -->
          <div class="flex items-center gap-3">
            <div class="w-6 h-px" style="background: #b91c1c"></div>
            <span class="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase"
              >Power Cleaner · México</span
            >
            <div class="w-6 h-px" style="background: #b91c1c"></div>
          </div>

          <!-- Título -->
          <div>
            <h3 class="text-3xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Fabricantes de
              <span style="color: #1d4e89"> productos de limpieza</span>
              <br />de alta calidad
            </h3>
          </div>

          <!-- Párrafos -->
          <div class="flex flex-col gap-4">
            <p class="text-sm text-gray-500 leading-relaxed">
              En Power Cleaner somos una empresa especializada en la fabricación y distribución de
              productos de limpieza de alta calidad, diseñados para ofrecer eficiencia, rendimiento
              y confianza en cada uso.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed">
              Trabajamos con fórmulas mejoradas y procesos enfocados en la calidad, brindando
              soluciones para hogares, negocios e industrias que buscan productos efectivos y
              confiables.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed">
              Además de nuestra línea de limpieza, contamos con productos automotrices y artículos
              complementarios, ofreciendo una solución integral para distintas necesidades.
            </p>
            <p class="text-sm text-gray-500 leading-relaxed">
              Nuestro compromiso es seguir creciendo e innovando, con una visión enfocada en
              expandir nuestra presencia a nivel nacional e internacional, manteniendo siempre la
              calidad y satisfacción de nuestros clientes.
            </p>
          </div>

          <!-- Separador -->
          <div class="flex items-center gap-4">
            <div class="h-px flex-1 bg-gray-100"></div>
            <span class="text-gray-200 text-sm">★ ★ ★</span>
            <div class="h-px flex-1 bg-gray-100"></div>
          </div>

          <!-- Feature pills -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="feat in features"
              :key="feat"
              class="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full"
            >
              <span
                class="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style="background: #1d4e89"
              ></span>
              {{ feat }}
            </span>
          </div>

          <!-- CTA -->
          <button
            class="self-start flex items-center gap-2 text-white text-sm font-semibold px-7 py-3 rounded-lg transition-all hover:opacity-90"
            style="background: #b91c1c"
          >
            Ver nuestros productos
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
  </section>
</template>

<script setup>
import productoPowerClean from '@/assets/images/producto-power-clean.png'
const features = [
  'Fórmula Americana',
  'Fabricación propia',
  'Distribución nacional',
  'Línea automotriz',
  'Mayoreo y menudeo',
  'Más de 15 años de experiencia',
]
</script>
