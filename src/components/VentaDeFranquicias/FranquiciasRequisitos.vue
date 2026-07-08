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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-[#b52426]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
                />
              </svg>
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold text-[#0b1a2e]">Requisitos</h3>
          </div>

          <!-- Lista de requisitos -->
          <ul class="flex flex-col gap-3">
            <li v-for="item in requisitos" :key="item" class="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-[#b52426] flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-[#b52426]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-[#b52426]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                />
              </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 h-3.5 text-[#b52426]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-[#ff5a55] flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
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
