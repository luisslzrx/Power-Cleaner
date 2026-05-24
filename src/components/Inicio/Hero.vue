<template>
  <section class="w-full font-sans px-8">
    <div
      class="relative w-full overflow-hidden rounded-b-3xl min-h-[580px]"
      style="
        min-height: 580px;
        background-image: url('/images/fondo2.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      <!-- Blue overlay -->
      <div class="absolute inset-0 bg-power-primary/60"></div>

      <!-- Prev arrow -->
      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center hover:bg-white/10 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 text-white/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Next arrow -->
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center hover:bg-white/10 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 text-white/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Slide content -->
      <div
        class="max-w-7xl mx-auto px-16 flex items-center justify-between h-full"
        style="min-height: 580px"
      >
        <!-- Left: Text -->
        <div class="flex flex-col gap-6 z-10 max-w-lg">
          <span class="text-xs font-semibold tracking-[0.25em] text-white/80 uppercase">
            Power Cleaner
          </span>

          <h1 class="font-extrabold leading-none tracking-tight" style="font-size: 3.4rem">
            <span class="text-white">LIMPIEZA</span><br />
            <span style="color: #b91c1c">PREMIUM</span><br />
            <span class="text-white">PARA TU HOGAR</span>
          </h1>

          <div class="flex items-center gap-1">
            <span v-for="i in 5" :key="i" class="text-white text-base">★</span>
            <span class="text-white/70 text-xs ml-2">Calidad garantizada</span>
          </div>

          <button
            class="flex items-center gap-2 text-white text-sm font-semibold px-7 py-3 rounded-lg w-fit transition-all hover:opacity-90"
            style="background: #b91c1c"
          >
            Comprar Ahora
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

        <!-- Right: Product image -->
        <div
          class="relative flex items-center justify-center flex-shrink-0"
          style="width: 520px; height: 520px"
        >
          <!-- Círculo exterior -->
          <div
            class="absolute rounded-full border border-power-secondary/30"
            style="
              width: 480px;
              height: 480px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            "
          ></div>

          <!-- Círculo interior -->
          <div
            class="absolute rounded-full border border-power-secondary/10"
            style="
              width: 400px;
              height: 400px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: radial-gradient(
                circle,
                rgb(var(--color-power-primary) / 0.9) 0%,
                rgb(var(--color-power-primary) / 0.6) 100%
              );
            "
          ></div>

          <!-- Glow suave -->
          <div
            class="absolute rounded-full"
            style="
              width: 280px;
              height: 280px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: radial-gradient(circle, rgba(12, 30, 74, 0.6) 0%, transparent 70%);
            "
          ></div>

          <!-- Product image -->
          <img
            src="/src/assets/images/productos-principal.png"
            alt="Productos Power Cleaner"
            class="relative z-10 object-contain"
            style="
              max-height: 500px;
              max-width: 500px;
              filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5));
            "
          />

          <!-- Fórmula Americana — barra horizontal debajo de la imagen -->
          <div
            class="absolute bottom-14 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 border border-white/10 bg-white/[0.05] backdrop-blur-sm rounded-md px-5 py-2 max-w-fit"
          >
            <img
              src="/src/assets/icons/bandera.svg"
              alt="Bandera"
              class="w-6 h-4 object-contain flex-shrink-0"
            />

            <!-- Texto -->
            <p
              class="text-white font-bold tracking-[0.25em] uppercase text-xs flex items-center gap-2 whitespace-nowrap"
            >
              <span class="text-white/40">★</span>
              Fórmula Americana
              <span class="text-white/40">★</span>
            </p>

            <!-- Franjas derecha -->
            <img
              src="/src/assets/icons/bandera.svg"
              alt="Bandera"
              class="w-6 h-4 object-contain flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No functions — design only
</script>
