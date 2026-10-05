<template>
  <section class="w-full bg-slate-50 py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Left Content -->
        <div class="w-full lg:w-1/3 text-left">
          <span class="text-xs font-bold uppercase tracking-widest text-power-accent">Beneficios</span>
          <h2 class="text-2xl md:text-4xl font-extrabold text-power-primary mt-2 mb-6">
            ¿Por qué invertir en una Franquicia?
          </h2>
          <p class="text-sm md:text-base text-gray-650 leading-relaxed mb-8">
            Adquiere un modelo de negocio probado con alta rentabilidad, demanda recurrente de productos básicos e infraestructura operativa consolidada.
          </p>
          <div class="hidden lg:block">
            <div class="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white">
              <img src="/src/assets/icons/bandera.svg" alt="Fórmula Americana" class="w-10 h-8 object-contain" />
              <div>
                <h4 class="text-xs font-bold text-power-primary uppercase tracking-wide">Modelo Llave en Mano</h4>
                <p class="text-[11px] text-gray-500 font-medium">Listo para facturar desde el primer día.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Grid (Visual con Iconos) -->
        <div class="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Card 1 -->
          <div class="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/currency-dollar.svg" alt="Inversión Accesible" class="w-6 h-6 text-power-primary" />
            </div>
            <div>
              <h3 class="text-base font-bold text-power-primary mb-2">Inversión Inteligente</h3>
              <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
                Costos de apertura optimizados para acelerar el retorno de inversión (ROI) en plazos cortos.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/cart.svg" alt="Alta Demanda" class="w-6 h-6 brightness-0" />
            </div>
            <div>
              <h3 class="text-base font-bold text-power-primary mb-2">Productos de Alta Demanda</h3>
              <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
                Suministro constante de químicos y accesorios de limpieza para hogares, oficinas y sector automotriz.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/users-support.svg" alt="Respaldo" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base font-bold text-power-primary mb-2">Soporte y Capacitación</h3>
              <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
                Entrenamiento exhaustivo del personal, manuales operativos digitales y asesoría de mercadotecnia nacional.
              </p>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/storefront.svg" alt="Venta Omnicanal" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base font-bold text-power-primary mb-2">Suministro Preferente</h3>
              <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
                Precios especiales máximos de fabricante con inventario reservado en nuestros almacenes centrales.
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
