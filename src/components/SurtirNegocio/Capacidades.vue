<template>
  <section class="w-full bg-slate-50 py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Left Content -->
        <div class="w-full lg:w-1/3 text-left">
          <span class="text-xs font-bold uppercase tracking-widest text-power-accent">Beneficios</span>
          <h2 class="text-2xl md:text-4xl font-extrabold text-power-primary mt-2 mb-6">
            Alianzas Comerciales de Confianza
          </h2>
          <p class="text-sm md:text-base text-gray-650 leading-relaxed mb-8">
            Ofrecemos el respaldo de una marca consolidada y un catálogo robusto de productos químicos de alto desempeño para impulsar tu negocio.
          </p>
          <div class="hidden lg:block">
            <div class="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white">
              <img src="/src/assets/icons/bandera.svg" alt="Fórmula Americana" class="w-10 h-8 object-contain" />
              <div>
                <h4 class="text-xs font-bold text-power-primary uppercase tracking-wide">Fórmula Certificada</h4>
                <p class="text-[11px] text-gray-500 font-medium">Calidad de exportación americana.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Grid (Visual con Iconos) -->
        <div class="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Card 1 -->
          <div class="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/currency-dollar.svg" alt="Precios Directos" class="w-6 h-6 text-power-primary" />
            </div>
            <div>
              <h3 class="text-base font-bold text-power-primary mb-2">Precios Directos de Fábrica</h3>
              <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
                Compra sin intermediarios y obtén márgenes de ganancia altamente competitivos en reventa.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/shield-check.svg" alt="Garantía de Recompra" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base font-bold text-power-primary mb-2">Garantía de Recompra</h3>
              <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
                Nuestras fórmulas americanas son altamente efectivas, asegurando que tus clientes regresen una y otra vez.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/limpieza.svg" alt="Presentaciones Flexibles" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base font-bold text-power-primary mb-2">Presentaciones Flexibles</h3>
              <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
                Surtimos en porrones/bidones de 20L a granel para venta por litros, o en envases comerciales listos para anaquel.
              </p>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/truck.svg" alt="Logística Preferente" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base font-bold text-power-primary mb-2">Logística Nacional</h3>
              <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
                Aprovecha nuestros convenios preferenciales con fleteras nacionales para obtener tarifas de envío muy económicas.
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
