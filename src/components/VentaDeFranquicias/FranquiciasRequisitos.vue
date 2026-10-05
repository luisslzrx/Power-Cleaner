<template>
  <!-- Requisitos y Proceso de Integración -->
  <section class="my-16">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Únete a Nosotros — <span class="text-power-accent">Requisitos y Proceso</span>
        </h2>
      </div>
      <div class="w-full h-px bg-blue-500 mb-8 md:mb-12"></div>

      <!-- Layout 2 columnas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- ===== COLUMNA IZQUIERDA: Requisitos ===== -->
        <div class="flex flex-col gap-6">
          <!-- Título con ícono -->
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-lg bg-[#fce8e8] flex items-center justify-center flex-shrink-0"
            >
              <img
                src="/src/assets/icons/clipboard-list-red.svg"
                alt="Requisitos"
                class="w-5 h-5"
              />
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold text-[#0b1a2e]">Requisitos</h3>
          </div>

          <!-- Lista de requisitos -->
          <ul class="flex flex-col gap-3">
            <li v-for="item in requisitos" :key="item" class="flex items-start gap-3">
              <img
                src="/src/assets/icons/check-circle-red.svg"
                alt="✓"
                class="w-5 h-5 flex-shrink-0 mt-0.5"
              />
              <span class="text-sm md:text-base text-[#43474e]">{{ item }}</span>
            </li>
          </ul>

          <!-- Card: Perfil ideal -->
          <div
            class="flex items-start gap-4 bg-[#fef8f8] border border-[#fce8e8] rounded-2xl p-5 mt-2"
          >
            <div
              class="w-10 h-10 rounded-lg bg-[#fce8e8] flex items-center justify-center flex-shrink-0"
            >
              <img
                src="/src/assets/icons/user-outline-red.svg"
                alt="Perfil"
                class="w-5 h-5"
              />
            </div>
            <div>
              <h4 class="text-sm md:text-base font-bold text-[#0b1a2e] mb-1">Perfil Ideal</h4>
              <p class="text-xs md:text-sm text-[#43474e] leading-relaxed">
                Personas emprendedoras, responsables y con deseos de crecer en el mundo de la
                distribución.
              </p>
            </div>
          </div>
        </div>

        <!-- ===== COLUMNA DERECHA: Proceso ===== -->
        <div class="flex flex-col gap-6">
          <!-- Título con ícono -->
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-lg bg-[#fce8e8] flex items-center justify-center flex-shrink-0"
            >
              <img
                src="/src/assets/icons/list-bullets-red.svg"
                alt="Proceso"
                class="w-5 h-5"
              />
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold text-[#0b1a2e]">
              Proceso para Integrarte
            </h3>
          </div>

          <!-- Timeline horizontal (desktop) / vertical (mobile) -->
          <div class="relative">
            <!-- Línea conectora (desktop) -->
            <div
              class="hidden md:block absolute top-5 left-5 right-5 h-px border-t-2 border-dashed border-[#e0e3ed]"
            ></div>

            <div class="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
              <div
                v-for="(paso, index) in pasos"
                :key="index"
                class="flex flex-col items-center text-center gap-3 relative"
              >
                <!-- Número círculo -->
                <div
                  class="relative z-10 w-10 h-10 rounded-full bg-[#0b1a2e] text-white flex items-center justify-center text-sm font-extrabold border-4 border-white shadow-[0_0_0_1px_#e0e3ed] flex-shrink-0"
                >
                  {{ index + 1 }}
                </div>
                <!-- Flecha hacia abajo -->
                <img
                  src="/src/assets/icons/chevron-down-red.svg"
                  alt="▼"
                  class="w-3.5 h-3.5"
                />
                <!-- Texto -->
                <div>
                  <p class="text-xs md:text-sm font-bold text-[#0b1a2e] mb-1 leading-tight">
                    {{ paso.titulo }}
                  </p>
                  <p class="text-xs text-[#5b6472] leading-relaxed">{{ paso.descripcion }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Banner inferior -->
          <div
            class="flex items-center gap-4 bg-[#0b1a2e] rounded-2xl px-5 md:px-7 py-4 md:py-5 mt-2"
          >
            <img
              src="/src/assets/icons/gift-box-coral.svg"
              alt="Garantía"
              class="w-6 h-6 flex-shrink-0"
            />
            <p class="text-sm md:text-base font-semibold text-white">
              Te acompañamos en cada paso para que tu negocio sea un éxito.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const requisitos = [
  'Ser mayor de edad.',
  'Interés en desarrollar un negocio propio.',
  'Compromiso con la marca y sus valores.',
  'Capacidad de atención al cliente.',
  'Disponibilidad para comercializar productos.',
  'Inversión inicial requerida.',
]

const pasos = [
  {
    titulo: 'Envía tu solicitud',
    descripcion: 'Completa el formulario de interés.',
  },
  {
    titulo: 'Entrevista inicial',
    descripcion: 'Conocemos tu perfil y tus objetivos.',
  },
  {
    titulo: 'Evaluación del perfil',
    descripcion: 'Analizamos la disponibilidad de zona.',
  },
  {
    titulo: 'Aprobación y firma',
    descripcion: 'Formalizamos tu integración a la red Power Cleaner.',
  },
  {
    titulo: 'Inicio de operaciones',
    descripcion: 'Recibes tu paquete de inicio y comienzas a vender.',
  },
]
</script>
