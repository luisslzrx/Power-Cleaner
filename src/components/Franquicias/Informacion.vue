<template>
  <section class="max-w-7xl mx-auto px-4 md:px-6 my-16 md:my-24">
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      
      <!-- Left Column: Photo -->
      <div class="w-full lg:w-1/2 relative">
        <div class="relative overflow-hidden rounded-2xl w-full h-[320px] md:h-[450px] shadow-lg">
          <img
            src="/src/assets/images/franquicias.webp"
            alt="Sucursal Franquicia Power Cleaner"
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <!-- Decorative grid points -->
        <div class="hidden md:grid grid-cols-3 gap-2 absolute -top-4 -right-4 opacity-60">
          <span v-for="n in 9" :key="n" class="w-1.5 h-1.5 rounded-full bg-power-accent"></span>
        </div>
      </div>

      <!-- Right Column: Text content -->
      <div class="w-full lg:w-1/2 text-left">
        <!-- Eyebrow -->
        <span class="text-xs font-bold uppercase tracking-widest text-power-accent">
          Sobre el Modelo
        </span>

        <!-- Title -->
        <h2 class="text-2xl md:text-4xl font-extrabold text-power-primary mt-2 mb-6 leading-tight">
          Una Oportunidad de Negocio Real
        </h2>

        <!-- Paragraphs -->
        <div class="space-y-4 text-sm md:text-base text-gray-650 leading-relaxed mb-8">
          <p>
            Power Cleaner ofrece un modelo de franquicia llave en mano enfocado en un mercado de alta demanda y consumo constante. No dependemos de modas pasajeras; la limpieza es una necesidad diaria en hogares, comercios e industrias.
          </p>
          <p>
            Nuestros franquiciatarios cuentan con el respaldo directo de fábrica, asegurando un suministro preferente de fórmulas de alto rendimiento y una amplia variedad de soluciones de limpieza efectivas que garantizan la fidelidad de sus clientes.
          </p>
        </div>

        <!-- Features list -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
          <!-- Feature 1 -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-power-secondary/15 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/trending-up-red.svg" alt="Mercado" class="w-5 h-5" />
            </div>
            <span class="text-xs md:text-sm font-semibold text-power-primary leading-tight">
              Alta demanda<br />del mercado
            </span>
          </div>

          <!-- Feature 2 -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-power-secondary/15 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/star-outline-red.svg" alt="Calidad" class="w-5 h-5" />
            </div>
            <span class="text-xs md:text-sm font-semibold text-power-primary leading-tight">
              Productos de<br />calidad premium
            </span>
          </div>

          <!-- Feature 3 -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-power-secondary/15 flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/icons/heart-outline-red.svg" alt="Soporte" class="w-5 h-5" />
            </div>
            <span class="text-xs md:text-sm font-semibold text-power-primary leading-tight">
              Respaldo y<br />acompañamiento
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Informacion component
</script>
