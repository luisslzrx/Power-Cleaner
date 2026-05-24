<template>
  <section class="w-full bg-power-primary font-sans mt-20">
    <!-- Main footer content -->
    <div class="max-w-7xl mx-auto px-10 py-14 grid grid-cols-4 gap-10">
      <!-- Col 1: Brand -->
      <div class="flex flex-col gap-4">
        <img
          src="/src/assets/images/logo-power.png"
          alt="Power Cleaner"
          class="w-36 object-contain"
        />

        <!-- Social icons -->
        <div class="flex items-center gap-3 mt-1">
          <!-- Twitter -->
          <div class="cursor-pointer hover:opacity-70 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </div>

          <!-- Instagram -->
          <div class="cursor-pointer hover:opacity-70 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </div>

          <!-- Pinterest -->
          <div class="cursor-pointer hover:opacity-70 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"
              />
            </svg>
          </div>

          <!-- YouTube -->
          <div class="cursor-pointer hover:opacity-70 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Col 2: Categorías -->
      <div class="flex flex-col gap-3">
        <h4 class="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
          Categorías
        </h4>
        <a href="#" class="text-sm text-white/80 hover:text-white transition-colors"
          >Productos de limpieza</a
        >
        <a href="#" class="text-sm text-white/80 hover:text-white transition-colors"
          >Limpieza del hogar</a
        >
        <a href="#" class="text-sm text-white underline underline-offset-2">Línea automotriz</a>
      </div>

      <!-- Col 3: Enlaces -->
      <div class="flex flex-col gap-3">
        <h4 class="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">Enlaces</h4>
        <a href="#" class="text-sm text-white/80 hover:text-white transition-colors">Nosotros</a>
        <a href="#" class="text-sm text-white/80 hover:text-white transition-colors">Contacto</a>
        <a href="#" class="text-sm text-white/80 hover:text-white transition-colors">Tienda</a>
        <a href="#" class="text-sm text-white/80 hover:text-white transition-colors">Servicios</a>
      </div>

      <!-- Col 4: Newsletter -->
      <div class="flex flex-col gap-3">
        <h4 class="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
          Newsletter
        </h4>
        <div class="flex items-center gap-2">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            class="flex-1 min-w-0 border border-white/30 rounded-md px-3 py-2 text-sm text-white placeholder-white/40 bg-white/10 outline-none focus:border-white/60 transition-colors"
          />
          <button
            class="bg-white hover:bg-white/90 text-power-blue text-sm font-bold px-4 py-2 rounded-md transition-colors flex-shrink-0"
          >
            Suscribir
          </button>
        </div>
        <p class="text-xs text-white leading-relaxed">
          Recibe nuestras últimas ofertas y novedades<br />directamente en tu bandeja de entrada.
        </p>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/15 bg-black/20">
      <div class="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
        <p class="text-sm text-white/60">
          Derechos reservados para
          <span class="font-semibold text-white">Power Cleaner</span>
        </p>

        <!-- Payment icons -->
        <div class="flex items-center gap-3">
          <!-- Mastercard -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-6" viewBox="0 0 38 24">
            <rect width="38" height="24" rx="3" fill="rgba(255,255,255,0.15)" />
            <circle cx="15" cy="12" r="7" fill="#EB001B" />
            <circle cx="23" cy="12" r="7" fill="#F79E1B" />
            <path d="M19 7.1a7 7 0 010 9.8A7 7 0 0119 7.1z" fill="#FF5F00" />
          </svg>

          <!-- PayPal -->
          <div class="flex items-center">
            <span class="text-sm font-bold text-white/80">Pay</span>
            <span class="text-sm font-bold text-white">Pal</span>
          </div>

          <!-- Amex -->
          <div class="bg-white/20 border border-white/30 rounded px-1.5 py-0.5">
            <span class="text-white text-xs font-bold tracking-tight">AMEX</span>
          </div>

          <!-- Visa -->
          <span class="text-lg font-bold italic text-white">VISA</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No functions — design only
</script>
