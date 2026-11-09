<template>
  <section class="w-full">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Contenedor principal flex -->
      <div class="flex flex-col md:flex-row gap-6 md:gap-14 items-stretch">
        <!-- Izquierda: Imagen -->
        <div
          class="relative overflow-hidden rounded-2xl flex-1 min-h-[260px] sm:min-h-[340px] md:min-h-[420px]"
          :style="{
            backgroundImage: `url(${productoPowerClean})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>

        <!-- Derecha: Texto -->
        <div class="flex flex-col gap-4 md:gap-6 flex-1 justify-center">
          <!-- Eyebrow -->
          <div class="flex items-center gap-2.5 sm:gap-3">
            <div class="w-6 h-px bg-power-accent"></div>
            <span class="text-[11px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-gray-400 uppercase"
              >Power Cleaner · Quiénes somos</span
            >
            <div class="w-6 h-px bg-power-accent"></div>
          </div>

          <!-- Título -->
          <div>
            <h3
              class="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight"
            >
              Soluciones profesionales en
              <span class="text-power-secondary"> productos de limpieza</span> de alto rendimiento
            </h3>
          </div>

          <!-- Párrafos -->
          <div class="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
            <p>
              En Power Cleaner somos una empresa manufacturera con más de 5 años de experiencia en
              el desarrollo, producción y comercialización de productos de limpieza de alto
              rendimiento.
            </p>
            <p>
              Nos especializamos en crear soluciones efectivas para empresas que buscan calidad,
              eficiencia y resultados profesionales en cada proceso de limpieza.
            </p>
            <p>
              Cada producto está diseñado para brindar confianza, rendimiento y practicidad,
              ayudando a hogares, negocios e industrias a mantener espacios más limpios, seguros y
              presentables.
            </p>
            <p>
              Nuestro compromiso es construir relaciones sólidas y duraderas con nuestros clientes,
              ofreciendo productos confiables, atención cercana y soluciones adaptadas a sus
              necesidades.
            </p>
          </div>

          <!-- Separador -->
          <div class="flex items-center gap-3">
            <div class="h-px flex-1 bg-gray-100"></div>
            <span class="text-gray-300 text-xs tracking-widest">★ ★ ★</span>
            <div class="h-px flex-1 bg-gray-100"></div>
          </div>

          <!-- Feature pills -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="feat in features"
              :key="feat"
              class="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 px-2.5 sm:px-3 py-1.5 rounded-full"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-power-secondary flex-shrink-0"></span>
              {{ feat }}
            </span>
          </div>

          <!-- CTA -->
          <router-link
            to="/tienda"
            class="self-start inline-flex items-center gap-2 text-white text-xs sm:text-sm font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all hover:opacity-90 bg-power-accent active:scale-95 shadow-sm mt-2"
          >
            <span>Conoce nuestros productos</span>
            <img
              src="/src/assets/icons/arrow-right.svg"
              alt="Ver productos"
              class="w-4 h-4"
            />
          </router-link>
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
