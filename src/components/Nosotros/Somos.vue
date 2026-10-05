```vue
<template>
  <section class="w-full">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Contenedor principal flex -->
      <div class="flex flex-col md:flex-row gap-6 md:gap-14 items-stretch">
        <!-- Izquierda: Imagen -->
        <div
          class="relative overflow-hidden rounded-2xl flex-1"
          :style="{
            backgroundImage: `url(${productoPowerClean})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '250px md:100%',
          }"
        ></div>

        <!-- Derecha: Texto -->
        <div class="flex flex-col gap-4 md:gap-7 flex-1">
          <!-- Eyebrow -->
          <div class="flex items-center gap-3">
            <div class="w-6 h-px" style="background: #b91c1c"></div>
            <span class="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase"
              >Power Cleaner · Quiénes somos</span
            >
            <div class="w-6 h-px" style="background: #b91c1c"></div>
          </div>

          <!-- Título -->
          <div>
            <h3
              class="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight"
            >
              Soluciones profesionales en
              <span style="color: #1d4e89"> productos de limpieza</span> de alto rendimiento
            </h3>
          </div>

          <!-- Párrafos -->
          <div class="flex flex-col gap-3 md:gap-4">
            <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
              En Power Cleaner somos una empresa manufacturera con más de 5 años de experiencia en
              el desarrollo, producción y comercialización de productos de limpieza de alto
              rendimiento.
            </p>
            <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
              Nos especializamos en crear soluciones efectivas para empresas que buscan calidad,
              eficiencia y resultados profesionales en cada proceso de limpieza.
            </p>
            <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
              Cada producto está diseñado para brindar confianza, rendimiento y practicidad,
              ayudando a hogares, negocios e industrias a mantener espacios más limpios, seguros y
              presentables.
            </p>
            <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
              Nuestro compromiso es construir relaciones sólidas y duraderas con nuestros clientes,
              ofreciendo productos confiables, atención cercana y soluciones adaptadas a sus
              necesidades.
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
              class="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 px-2 md:px-3 py-1.5 rounded-full"
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
            class="self-start flex items-center gap-2 text-white text-sm font-semibold px-5 md:px-7 py-3 rounded-lg transition-all hover:opacity-90"
            style="background: #b91c1c"
          >
            Conoce nuestros productos
            <img
              src="/src/assets/icons/arrow-right.svg"
              alt="Productos"
              class="w-4 h-4"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import productoPowerClean from '@/assets/images/producto-power-clean.webp'
const features = [
  'Más de 5 años de experiencia',
  'Productos de alto rendimiento',
  'Soluciones para empresas',
  'Calidad profesional',
  'Compromiso con el cliente',
  'Confianza y resultados',
]
</script>
```
