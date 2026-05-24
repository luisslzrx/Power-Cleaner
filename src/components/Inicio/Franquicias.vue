<template>
  <section class="max-w-7xl mx-auto px-6 py-10">
    <div class="relative w-full overflow-hidden rounded-3xl" style="min-height: 380px">
      <!-- Background image -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('/src/assets/images/fondo4.png')"
      ></div>

      <!-- Blue overlay -->
      <div class="absolute inset-0 bg-power-primary/90"></div>

      <!-- Right image -->
      <div class="absolute right-0 top-0 w-1/2 h-[380px] hidden lg:block">
        <div
          class="absolute inset-0 z-10"
          style="background: linear-gradient(to right, #0a2340 15%, transparent 50%)"
        ></div>
        <img
          class="w-full h-full object-cover"
          src="/src/assets/images/sucursal1.png"
          alt="Sucursal Power Cleaner"
        />
      </div>

      <!-- Content -->
      <div
        class="relative z-20 max-w-7xl mx-auto px-16 flex items-center h-full"
        style="min-height: 380px"
      >
        <div style="max-width: 600px">
          <!-- Eyebrow -->
          <span class="text-xs font-bold tracking-[0.25em] text-white uppercase mb-4 block">
            Somos los mejores en México
          </span>

          <!-- Title -->
          <h2 class="text-3xl font-extrabold text-white leading-snug tracking-tight mb-6">
            <span class="text-power-accent">Power Cleaner</span><br />
            Venta de Franquicias a Nivel Nacional
          </h2>

          <!-- Subtitle -->
          <p class="text-sm text-blue-200 leading-relaxed mb-8">
            Lleva nuestra marca a tu ciudad y forma parte de nuestro éxito.
          </p>

          <!-- CTA Button -->
          <button
            class="flex items-center gap-2 bg-power-accent text-white text-sm font-semibold px-7 py-3 rounded-lg w-fit transition-all hover:opacity-90"
          >
            Quiero mi franquicia
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No functions — design only
</script>
