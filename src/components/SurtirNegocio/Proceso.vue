<template>
  <section class="max-w-7xl mx-auto px-4 md:px-6 my-16 md:my-24">
    <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      <h2 class="text-2xl md:text-4xl font-extrabold text-power-primary mb-4">
        ¿Cómo es el Proceso de <span class="text-power-accent">Surtido</span>?
      </h2>
      <div class="w-24 h-1 bg-power-accent mx-auto mb-6"></div>
      <p class="text-sm md:text-base text-gray-500">
        Facilitamos tu abastecimiento de forma rápida y estructurada para que tu negocio nunca se quede sin stock.
      </p>
    </div>

    <!-- Process Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <!-- Step 1 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-power-primary/15 group-hover:text-power-primary/35 transition-colors">01</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/clipboard-list-red.svg" alt="Selección" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Selección de Líneas</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Elige en nuestro catálogo los productos a granel en bidones o líneas envasadas listas para anaquel.
          </p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-power-primary/15 group-hover:text-power-primary/35 transition-colors">02</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/descuento.svg" alt="Cotización" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Cotización Especial</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Calculamos descuentos escalables y cotizamos precios especiales según tus volúmenes estimados de compra.
          </p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-power-primary/15 group-hover:text-power-primary/35 transition-colors">03</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/check-circle-red.svg" alt="Validación" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Aprobación y Stock</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Confirmamos la disponibilidad inmediata en almacén, validamos la facturación fiscal y coordinamos el pago.
          </p>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-power-primary/15 group-hover:text-power-primary/35 transition-colors">04</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/limpieza.svg" alt="Embalaje" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Embalaje y Carga</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Acondicionamos tus porrones, bidones o tarimas con embalajes reforzados para garantizar cero fugas en camino.
          </p>
        </div>
      </div>

      <!-- Step 5 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-power-primary/15 group-hover:text-power-primary/35 transition-colors">05</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/envio.svg" alt="Envío" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Envío Nacional</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Despachamos tu lote a través de fleteras asociadas de primer nivel directo a tu local o bodega de entrega.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Proceso timeline component
</script>

<style scoped>
.group {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.group:hover {
  transform: translateY(-4px);
}
</style>
