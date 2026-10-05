<template>
  <section class="max-w-7xl mx-auto px-4 md:px-6 my-16 md:my-24">
    <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      <h2 class="text-2xl md:text-4xl font-extrabold text-power-primary mb-4">
        ¿Cómo es el Proceso de <span class="text-power-accent">Maquila</span>?
      </h2>
      <div class="w-24 h-1 bg-power-accent mx-auto mb-6"></div>
      <p class="text-sm md:text-base text-gray-500">
        Te acompañamos en cada etapa para convertir tu idea en un producto comercializable y altamente competitivo.
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
              <img src="/src/assets/icons/contract-pencil.svg" alt="Asesoría" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Asesoría Inicial</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Definimos tu idea, tipo de producto, aplicaciones deseadas y estimaciones iniciales de volumen.
          </p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-power-primary/15 group-hover:text-power-primary/35 transition-colors">02</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/academic-cap.svg" alt="Desarrollo" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Formulación I+D</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Nuestro laboratorio de I+D desarrolla la muestra física de tu producto con tecnología americana.
          </p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-power-primary/15 group-hover:text-power-primary/35 transition-colors">03</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/calidad.svg" alt="Pruebas" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Aprobación</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Realizas las pruebas físicas del producto para validar consistencia, aroma, color y efectividad.
          </p>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-power-primary/15 group-hover:text-power-primary/35 transition-colors">04</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/storefront.svg" alt="Diseño y Envase" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Diseño y Envase</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Elegimos la botella/porrón adecuado y diseñamos la etiqueta cumpliendo con regulaciones comerciales.
          </p>
        </div>
      </div>

      <!-- Step 5 -->
      <div class="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-4xl font-black text-power-primary/15 group-hover:text-power-primary/35 transition-colors">05</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center">
              <img src="/src/assets/icons/envio.svg" alt="Producción" class="w-5 h-5" />
            </div>
          </div>
          <h3 class="text-base font-bold text-power-primary mb-2">Producción y Envío</h3>
          <p class="text-xs md:text-sm text-gray-500 leading-relaxed">
            Fabricamos en volumen, envasamos, empacamos y enviamos tus productos a cualquier parte del país.
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
