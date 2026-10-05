<template>
  <section class="w-full bg-slate-50 py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Left Content -->
        <div class="w-full lg:w-1/3 text-left">
          <span class="text-xs font-bold uppercase tracking-widest text-power-accent">Capacidades</span>
          <h2 class="text-2xl md:text-4xl font-extrabold text-power-primary mt-2 mb-6">
            ¿Por qué maquilar con nosotros?
          </h2>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
            Contamos con la infraestructura industrial y la excelencia científica que tu marca requiere para sobresalir en el mercado de la limpieza.
          </p>
          <div class="hidden lg:block">
            <div class="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white">
              <img src="/src/assets/icons/bandera.svg" alt="Fórmula Americana" class="w-10 h-8 object-contain" />
              <div>
                <h4 class="text-xs font-bold text-power-primary uppercase tracking-wide">Fórmulas Certificadas</h4>
                <p class="text-[11px] text-gray-500 font-medium">Garantía con fórmula americana.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Grid (Visual con Iconos) -->
        <div class="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Card 1 -->
          <div class="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/shield-check.svg" alt="Fórmulas" class="w-6 h-6 text-power-primary" />
            </div>
            <div>
              <h3 class="text-base font-bold text-power-primary mb-2">Ingredientes de Alta Calidad</h3>
              <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
                Utilizamos insumos de primer nivel y aditivos con tecnología americana para garantizar el mejor poder de limpieza.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/seguro.svg" alt="Confidencialidad" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base font-bold text-power-primary mb-2">Confidencialidad Absoluta</h3>
              <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
                Protegemos tu marca e ideas comerciales. Trabajamos bajo estrictos contratos de confidencialidad (NDA).
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/dif-resultados.svg" alt="Lotes" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base font-bold text-power-primary mb-2">Volúmenes Flexibles</h3>
              <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
                Nos adaptamos a tu ritmo de crecimiento. Fabricamos lotes medianos para emprendedores y grandes producciones industriales.
              </p>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/contact-support.svg" alt="Soporte" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base font-bold text-power-primary mb-2">Soporte Regulatorio</h3>
              <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
                Te orientamos en el diseño técnico y normativo de tus etiquetas para que tus productos cumplan con todas las regulaciones de ley.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Capacidades component
</script>

<style scoped>
.hover\:-translate-y-1 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}
</style>
