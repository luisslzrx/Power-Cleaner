<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-4">
        <div>
          <span class="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase">
            Power Cleaner
          </span>
          <h2 class="text-xl md:text-2xl font-bold text-power-primary mt-2">
            Por qué elegirnos —
            <span class="text-power-accent">Nuestros Beneficios</span>
          </h2>
        </div>
        <p class="text-xs md:text-sm text-gray-500 max-w-md leading-relaxed">
          Productos profesionales, atención cercana y soluciones confiables para empresas que buscan
          resultados reales.
        </p>
      </div>

      <div class="w-full h-px bg-blue-500 mb-6 md:mb-10"></div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="group bg-white border border-gray-100 rounded-2xl p-5 md:p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-100"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 group-hover:bg-blue-50 transition-all"
            v-html="benefit.icon"
          ></div>

          <div class="flex flex-col gap-2">
            <h3 class="text-sm md:text-base font-bold text-gray-800 leading-tight">
              {{ benefit.title }}
            </h3>
            <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: 'Resultados comprobados',
    description: 'Productos de limpieza que realmente funcionan y ofrecen un desempeño confiable.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" class="w-7 h-7 text-power-secondary">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z" />
    </svg>`,
  },
  {
    title: 'Satisfacción garantizada',
    description: 'Clientes que confían en nosotros por la calidad, rendimiento y constancia.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" class="w-7 h-7 text-power-secondary">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14 9h3.5a2.5 2.5 0 012.4 3.2l-1.4 5A3 3 0 0115.6 19H8V9l4-5a2 2 0 013.5 1.3V9zM4 10h4v9H4z" />
    </svg>`,
  },
  {
    title: 'Atención personalizada',
    description: 'Asesoría técnica y soporte especializado para elegir la mejor solución.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" class="w-7 h-7 text-power-secondary">
      <path stroke-linecap="round" stroke-linejoin="round" d="M18 10a6 6 0 10-12 0v4a3 3 0 003 3h1m8-7v4a3 3 0 01-3 3h-1m-4 0h4m-2 0v3" />
    </svg>`,
  },
  {
    title: 'Disponibilidad y entrega',
    description: 'Suministro constante y entregas puntuales para mantener tu operación activa.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" class="w-7 h-7 text-power-secondary">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h10v10H3zM13 10h4l4 4v3h-8zM7 19a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z" />
    </svg>`,
  },
  {
    title: 'Calidad en cada proceso',
    description: 'Cuidamos cada etapa de producción para ofrecer productos seguros y efectivos.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" class="w-7 h-7 text-power-secondary">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3l2.4 4.8 5.3.8-3.8 3.7.9 5.2L12 15l-4.8 2.5.9-5.2-3.8-3.7 5.3-.8L12 3z" />
    </svg>`,
  },
  {
    title: 'Seguridad para tu empresa',
    description: 'Soluciones confiables para espacios comerciales, industriales y corporativos.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" class="w-7 h-7 text-power-secondary">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3l8 4v5c0 5-3.4 8.5-8 9-4.6-.5-8-4-8-9V7l8-4zM9 12l2 2 4-4" />
    </svg>`,
  },
  {
    title: 'Responsabilidad ambiental',
    description: 'Trabajamos con procesos más conscientes y productos pensados para el futuro.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" class="w-7 h-7 text-power-secondary">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14zM5 19c0-5 3-9 8-11" />
    </svg>`,
  },
  {
    title: 'Alianzas a largo plazo',
    description: 'Construimos relaciones sólidas y duraderas con clientes y distribuidores.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" class="w-7 h-7 text-power-secondary">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8 12l2.5 2.5a2 2 0 002.8 0L16 12M7 8h.01M17 8h.01M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z" />
    </svg>`,
  },
]
</script>
