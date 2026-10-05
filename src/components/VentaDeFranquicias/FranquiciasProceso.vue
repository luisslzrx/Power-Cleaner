<template>
  <!-- Proceso de Integración + FAQ Section -->
  <section class="my-16">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Cómo Empezar — <span class="text-power-accent">Proceso de Integración</span>
        </h2>
      </div>
      <div class="w-full h-px bg-blue-500 mb-10 md:mb-14"></div>

      <!-- Proceso: pasos con flechas -->
      <div class="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-3 mb-16 md:mb-24">
        <!-- Paso 1 -->
        <div class="flex-1 flex flex-col lg:flex-row items-center gap-4 lg:gap-3">
          <div
            class="w-full bg-[#0b1a2e] rounded-2xl p-6 flex flex-col items-center text-center gap-3"
          >
            <span class="text-3xl font-extrabold text-[#ff5a55]">01</span>
            <img
              src="/src/assets/icons/contact-support.svg"
              alt="Contacto"
              class="w-7 h-7"
            />
            <h3 class="text-sm md:text-base font-bold text-white">Contacto</h3>
            <p class="text-xs md:text-sm text-[#86a0cd] leading-relaxed">
              Llenas el formulario de interés o nos escribes por WhatsApp.
            </p>
          </div>
          <img
            src="/src/assets/icons/arrow-right-red.svg"
            alt="Siguiente"
            class="hidden lg:block w-6 h-6 flex-shrink-0"
          />
          <img
            src="/src/assets/icons/arrow-right-red.svg"
            alt="Siguiente"
            class="lg:hidden w-6 h-6 rotate-90"
          />
        </div>

        <!-- Paso 2 -->
        <div class="flex-1 flex flex-col lg:flex-row items-center gap-4 lg:gap-3">
          <div
            class="w-full bg-[#0b1a2e] rounded-2xl p-6 flex flex-col items-center text-center gap-3"
          >
            <span class="text-3xl font-extrabold text-[#ff5a55]">02</span>
            <img
              src="/src/assets/icons/map-pin.svg"
              alt="Zona"
              class="w-7 h-7"
            />
            <h3 class="text-sm md:text-base font-bold text-white">Validación de Zona</h3>
            <p class="text-xs md:text-sm text-[#86a0cd] leading-relaxed">
              Revisamos disponibilidad de territorio en tu ciudad.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="hidden lg:block w-6 h-6 text-[#b52426] flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="lg:hidden w-6 h-6 text-[#b52426] rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        <!-- Paso 3 -->
        <div class="flex-1 flex flex-col lg:flex-row items-center gap-4 lg:gap-3">
          <div
            class="w-full bg-[#0b1a2e] rounded-2xl p-6 flex flex-col items-center text-center gap-3"
          >
            <span class="text-3xl font-extrabold text-[#ff5a55]">03</span>
            <img
              src="/src/assets/icons/contract-pencil.svg"
              alt="Contrato"
              class="w-7 h-7"
            />
            <h3 class="text-sm md:text-base font-bold text-white">Firma de Contrato</h3>
            <p class="text-xs md:text-sm text-[#86a0cd] leading-relaxed">
              Formalizamos el acuerdo y se realiza la inversión inicial.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="hidden lg:block w-6 h-6 text-[#b52426] flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="lg:hidden w-6 h-6 text-[#b52426] rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        <!-- Paso 4 -->
        <div class="flex-1 flex flex-col lg:flex-row items-center gap-4 lg:gap-3">
          <div
            class="w-full bg-[#0b1a2e] rounded-2xl p-6 flex flex-col items-center text-center gap-3"
          >
            <span class="text-3xl font-extrabold text-[#ff5a55]">04</span>
            <img
              src="/src/assets/icons/academic-cap.svg"
              alt="Capacitación"
              class="w-7 h-7"
            />
            <h3 class="text-sm md:text-base font-bold text-white">Capacitación</h3>
            <p class="text-xs md:text-sm text-[#86a0cd] leading-relaxed">
              Recibes entrenamiento operativo y de atención al cliente.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="hidden lg:block w-6 h-6 text-[#b52426] flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="lg:hidden w-6 h-6 text-[#b52426] rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        <!-- Paso 5 -->
        <div class="flex-1">
          <div
            class="w-full bg-[#b52426] rounded-2xl p-6 flex flex-col items-center text-center gap-3 h-full justify-center"
          >
            <span class="text-3xl font-extrabold text-white">05</span>
            <img
              src="/src/assets/icons/star-outline-red.svg"
              alt="Apertura"
              class="w-7 h-7 brightness-0 invert"
            />
            <h3 class="text-sm md:text-base font-bold text-white">¡Apertura!</h3>
            <p class="text-xs md:text-sm text-white/80 leading-relaxed">
              Tu sucursal Power Cleaner está lista para operar.
            </p>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Resolvemos tus Dudas — <span class="text-power-accent">Preguntas Frecuentes</span>
        </h2>
      </div>
      <div class="w-full h-px bg-blue-500 mb-8 md:mb-10"></div>

      <div class="max-w-3xl mx-auto flex flex-col gap-3 md:gap-4">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="bg-white rounded-2xl border border-[#e8eaf0] overflow-hidden"
        >
          <!-- Pregunta -->
          <button
            @click="toggle(index)"
            class="w-full flex items-center justify-between gap-4 px-5 md:px-7 py-4 md:py-5 text-left"
          >
            <span class="text-sm md:text-base font-bold text-[#0b1a2e]">{{ item.question }}</span>
            <img
              src="/src/assets/icons/chevron-down-red.svg"
              alt="▼"
              class="w-5 h-5 flex-shrink-0 transition-transform duration-300"
              :class="activeIndex === index ? 'rotate-180' : ''"
            />
          </button>

          <!-- Respuesta -->
          <div
            v-show="activeIndex === index"
            class="px-5 md:px-7 pb-5 md:pb-6 border-t border-[#f0f1f5]"
          >
            <p class="text-sm md:text-base text-[#43474e] leading-relaxed pt-4">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: '¿Cuánto tiempo toma todo el proceso de integración?',
    answer:
      'Desde el primer contacto hasta la apertura de tu sucursal, el proceso completo toma entre 6 y 8 semanas en promedio. Esto incluye validación de zona, firma de contrato, capacitación y preparación del punto de venta. Los tiempos pueden variar según la disponibilidad de inventario y la rapidez en la adecuación del local.',
  },
  {
    question: '¿En qué consiste la capacitación inicial?',
    answer:
      'La capacitación cubre manejo y aplicación de productos, atención al cliente, procesos de venta al menudeo y mayoreo, y uso correcto de la imagen de marca. Tiene una duración de 5 días, combinando sesiones presenciales en nuestras oficinas centrales y acompañamiento en sitio durante tu primera semana de operación.',
  },
  {
    question: '¿Cómo sé si mi zona está disponible para franquicia?',
    answer:
      'Trabajamos con territorios exclusivos para evitar competencia entre franquiciatarios de la misma marca. Al enviar tu solicitud, nuestro equipo realiza un estudio de la zona para confirmar disponibilidad y potencial de mercado antes de avanzar a la siguiente etapa del proceso.',
  },
  {
    question: '¿Qué pasa si mi zona ya está ocupada?',
    answer:
      'Si la zona que buscas ya cuenta con un franquiciatario, te ofrecemos zonas cercanas disponibles o te agregamos a una lista de espera prioritaria en caso de que se libere el territorio. También podemos sugerirte formatos alternativos según el potencial de la región.',
  },
  {
    question: '¿La capacitación tiene algún costo adicional?',
    answer:
      'No. La capacitación inicial está incluida dentro de la inversión de apertura de tu franquicia. Las actualizaciones y capacitaciones continuas sobre nuevos productos o procesos también forman parte del soporte permanente que ofrecemos a todos nuestros franquiciatarios.',
  },
]
</script>
