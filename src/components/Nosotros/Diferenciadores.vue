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
          >
            <img :src="benefit.icon" :alt="benefit.title" class="w-7 h-7" />
          </div>

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
    icon: '/src/assets/icons/dif-resultados.svg',
  },
  {
    title: 'Satisfacción garantizada',
    description: 'Clientes que confían en nosotros por la calidad, rendimiento y constancia.',
    icon: '/src/assets/icons/dif-satisfaccion.svg',
  },
  {
    title: 'Atención personalizada',
    description: 'Asesoría técnica y soporte especializado para elegir la mejor solución.',
    icon: '/src/assets/icons/dif-atencion.svg',
  },
  {
    title: 'Disponibilidad y entrega',
    description: 'Suministro constante y entregas puntuales para mantener tu operación activa.',
    icon: '/src/assets/icons/dif-disponibilidad.svg',
  },
  {
    title: 'Calidad en cada proceso',
    description: 'Cuidamos cada etapa de producción para ofrecer productos seguros y efectivos.',
    icon: '/src/assets/icons/dif-calidad.svg',
  },
  {
    title: 'Seguridad para tu empresa',
    description: 'Soluciones confiables para espacios comerciales, industriales y corporativos.',
    icon: '/src/assets/icons/dif-seguridad.svg',
  },
  {
    title: 'Responsabilidad ambiental',
    description: 'Trabajamos con procesos más conscientes y productos pensados para el futuro.',
    icon: '/src/assets/icons/dif-ambiente.svg',
  },
  {
    title: 'Alianzas a largo plazo',
    description: 'Construimos relaciones sólidas y duraderas con clientes y distribuidores.',
    icon: '/src/assets/icons/dif-alianzas.svg',
  },
]
</script>
