<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Por qué elegirnos — <span class="text-power-accent">Nuestros Beneficios</span>
        </h2>
      </div>
      <div class="w-full h-px bg-blue-500 mb-6 md:mb-10"></div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 md:divide-x md:divide-gray-100">
        <!-- Card 1: Calidad -->
        <div class="flex flex-col items-center text-center px-4 md:px-8 gap-3 md:gap-4">
          <div class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <IconCalidad class="w-10 h-10 md:w-14 md:h-14 text-yellow-400" />
          </div>
          <h3 class="text-sm md:text-base font-bold text-gray-800">Calidad Garantizada</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Cada producto pasa por estrictos controles de calidad. Trabajamos solo con materias
            primas certificadas para asegurar resultados consistentes y superiores.
          </p>
        </div>

        <!-- Card 2: Envío / Mayoreo -->
        <div class="flex flex-col items-center text-center px-4 md:px-8 gap-3 md:gap-4">
          <div class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <IconTruck class="w-10 h-10 md:w-14 md:h-14 text-blue-400" />
          </div>
          <h3 class="text-sm md:text-base font-bold text-gray-800">Precios de Mayoreo</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Accede a los mejores precios con nuestros planes por volumen. A mayor cantidad, mayor
            ahorro. Ideal para distribuidores y negocios en crecimiento.
          </p>
        </div>

        <!-- Card 3: Fórmulas -->
        <div class="flex flex-col items-center text-center px-4 md:px-8 gap-3 md:gap-4">
          <div class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <IconShieldCheck class="w-10 h-10 md:w-14 md:h-14 text-power-primary" />
          </div>
          <h3 class="text-sm md:text-base font-bold text-gray-800">Fórmulas Mejoradas</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Nuestro equipo de I+D perfecciona cada fórmula incorporando los últimos avances
            científicos para ofrecerte productos más eficaces, seguros y confiables.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { IconCalidad, IconTruck, IconShieldCheck } from '@/components/Icons'
</script>
