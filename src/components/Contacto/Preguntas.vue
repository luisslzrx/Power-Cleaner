<template>
  <!-- Preguntas Frecuentes Section -->
  <section class="bg-[#eef0f8]">
    <div class="max-w-7xl mx-auto px-6 py-20">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-xl font-semibold text-power-primary">
          Resolvemos tus dudas <span class="text-power-accent"> - preguntas frecuentes</span>
        </h2>
      </div>

      <!-- Underline -->
      <div class="w-full h-px bg-blue-500 mb-6"></div>

      <!-- Acordeón -->
      <div class="max-w-7xl mx-auto grid grid-cols-2 gap-4">
        <!-- Columna izquierda -->
        <div class="flex flex-col gap-4">
          <div
            v-for="(item, index) in faqsLeft"
            :key="'left-' + index"
            class="bg-white rounded-2xl border border-[#e0e3ed] overflow-hidden"
          >
            <!-- Pregunta -->
            <button
              @click="toggle(index)"
              class="w-full flex items-center justify-between p-6 px-8 bg-transparent border-none cursor-pointer text-left gap-4"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  :style="{ backgroundColor: activeIndex === index ? '#b52426' : '#fce8e8' }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[18px] h-[18px]"
                    :style="{ color: activeIndex === index ? '#ffffff' : '#b52426' }"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span class="text-base font-bold text-[#0b1a2e]">{{ item.question }}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[22px] h-[22px] flex-shrink-0 transition-transform duration-300 ease"
                :style="{
                  color: activeIndex === index ? '#b52426' : '#43474e',
                  transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Respuesta -->
            <div v-show="activeIndex === index" class="px-8 pb-7 pl-22 border-t border-[#f0f1f5]">
              <p class="text-sm text-[#43474e] leading-[1.75] mt-5">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>

        <!-- Columna derecha -->
        <div class="flex flex-col gap-4">
          <div
            v-for="(item, index) in faqsRight"
            :key="'right-' + index"
            class="bg-white rounded-2xl border border-[#e0e3ed] overflow-hidden"
          >
            <!-- Pregunta -->
            <button
              @click="toggle(index + 4)"
              class="w-full flex items-center justify-between p-6 px-8 bg-transparent border-none cursor-pointer text-left gap-4"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  :style="{ backgroundColor: activeIndex === index + 4 ? '#b52426' : '#fce8e8' }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[18px] h-[18px]"
                    :style="{ color: activeIndex === index + 4 ? '#ffffff' : '#b52426' }"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span class="text-base font-bold text-[#0b1a2e]">{{ item.question }}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[22px] h-[22px] flex-shrink-0 transition-transform duration-300 ease"
                :style="{
                  color: activeIndex === index + 4 ? '#b52426' : '#43474e',
                  transform: activeIndex === index + 4 ? 'rotate(180deg)' : 'rotate(0deg)',
                }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Respuesta -->
            <div
              v-show="activeIndex === index + 4"
              class="px-8 pb-7 pl-22 border-t border-[#f0f1f5]"
            >
              <p class="text-sm text-[#43474e] leading-[1.75] mt-5">
                {{ item.answer }}
              </p>
            </div>
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
    question: '¿Sus productos están certificados por autoridades sanitarias?',
    answer:
      'Sí. Todos nuestros productos cuentan con registro y certificación ante COFEPRIS (Comisión Federal para la Protección contra Riesgos Sanitarios). Adicionalmente, nuestras fórmulas industriales han sido evaluadas bajo normas NOM aplicables para garantizar su seguridad y eficacia.',
  },
  {
    question: '¿Cuál es el pedido mínimo para compra al mayoreo?',
    answer:
      'Para acceder a precios de mayoreo, el pedido mínimo es de 12 piezas por producto o $2,000 MXN en total. A partir de este monto se aplican descuentos escalonados según el volumen de compra. Contáctanos para recibir una cotización personalizada.',
  },
  {
    question: '¿Hacen envíos a toda la República Mexicana?',
    answer:
      'Sí, realizamos envíos a los 32 estados de la República. Los pedidos al menudeo se envían en 24 a 48 horas hábiles a través de nuestros socios logísticos. Los pedidos al mayoreo se coordinan directamente con nuestro equipo de distribución para optimizar tiempos y costos.',
  },
  {
    question: '¿Sus productos son seguros para usar en presencia de niños y mascotas?',
    answer:
      'Contamos con una línea de fórmulas hipoalergénicas y biodegradables, especialmente diseñadas para entornos con niños y mascotas. Estos productos están libres de cloro, amoníaco y fosfatos, sin sacrificar el poder desinfectante. Cada etiqueta indica claramente el perfil de seguridad del producto.',
  },
  {
    question: '¿Cómo funciona el modelo de franquicias de Power Cleaner?',
    answer:
      'Nuestro modelo de franquicia ofrece territorio exclusivo, capacitación inicial, soporte continuo de marketing y acceso a toda nuestra línea de productos a precio preferencial. La inversión inicial incluye el kit de arranque, señalización y materiales de ventas. Contáctanos con nuestra ejecutiva Sofía Castillo para conocer la disponibilidad en tu ciudad.',
  },
  {
    question: '¿Con qué frecuencia se deben aplicar sus productos de desinfección?',
    answer:
      'La frecuencia depende del tipo de espacio y el nivel de riesgo. En hogares recomendamos desinfección profunda semanal y limpieza superficial diaria. En entornos hospitalarios, corporativos o industriales, nuestros especialistas pueden hacer una auditoría gratuita y diseñar un protocolo de higiene personalizado.',
  },
  {
    question: '¿Ofrecen servicio de limpieza profesional o solo venden productos?',
    answer:
      'Ofrecemos ambos. Además de nuestra línea de productos de venta directa, contamos con un servicio de limpieza y desinfección profesional para empresas, hoteles, hospitales, naves industriales y eventos. Puedes solicitar un presupuesto sin compromiso a través de nuestro formulario de contacto.',
  },
  {
    question: '¿Tienen algún programa de lealtad o descuentos para clientes frecuentes?',
    answer:
      'Sí. Contamos con el programa Power Club que ofrece puntos acumulables por cada compra, acceso anticipado a nuevos productos, descuentos exclusivos y envío gratuito a partir de cierto monto. La membresía es gratuita y se activa automáticamente al registrarte en nuestra plataforma en línea.',
  },
]

const faqsLeft = faqs.slice(0, 4)
const faqsRight = faqs.slice(4, 8)
</script>
