<template>
  <section class="w-full bg-power-primary font-sans mt-20">
    <!-- Main footer content -->
    <div
      class="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-14 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10"
    >
      <!-- Col 1: Brand -->
      <div class="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
        <img
          src="/src/assets/images/logo-power.png"
          alt="Power Cleaner"
          class="w-28 md:w-36 object-contain"
        />

        <!-- Social icons -->
        <div class="flex items-center gap-3 mt-1">
          <!-- Facebook -->
          <a
            href="https://www.facebook.com/MERICAN.CLEANING.PRODUCTS"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white"
            title="Facebook"
          >
            <img
              src="/src/assets/icons/facebook.svg"
              alt="Facebook"
              class="w-4 h-4"
            />
          </a>

          <!-- Instagram -->
          <a
            href="https://www.instagram.com/powercleaner.88"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white"
            title="Instagram"
          >
            <img
              src="/src/assets/icons/instagram.svg"
              alt="Instagram"
              class="w-4 h-4"
            />
          </a>

          <!-- TikTok -->
          <a
            href="https://www.tiktok.com/@elpoderdelalimpieza"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white"
            title="TikTok"
          >
            <img
              src="/src/assets/icons/tiktok.svg"
              alt="TikTok"
              class="w-4 h-4"
            />
          </a>
        </div>
      </div>

      <!-- Col 2: Categorías -->
      <div class="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
        <h4 class="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
          Categorías
        </h4>
        <RouterLink to="/tienda" class="text-sm text-white/80 hover:text-white transition-colors"
          >Productos de limpieza</RouterLink
        >
        <RouterLink to="/tienda" class="text-sm text-white/80 hover:text-white transition-colors"
          >Limpieza del hogar</RouterLink
        >
        <RouterLink to="/tienda" class="text-sm text-white/80 hover:text-white transition-colors"
          >Línea automotriz</RouterLink
        >
      </div>

      <!-- Col 3: Enlaces -->
      <div class="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
        <h4 class="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">Enlaces</h4>
        <RouterLink to="/nosotros" class="text-sm text-white/80 hover:text-white transition-colors"
          >Nosotros</RouterLink
        >
        <RouterLink to="/contacto" class="text-sm text-white/80 hover:text-white transition-colors"
          >Contacto</RouterLink
        >
        <RouterLink to="/tienda" class="text-sm text-white/80 hover:text-white transition-colors"
          >Tienda</RouterLink
        >
        <RouterLink to="/servicios" class="text-sm text-white/80 hover:text-white transition-colors"
          >Servicios</RouterLink
        >
        <RouterLink to="/maquila-tu-producto" class="text-sm text-white/80 hover:text-white transition-colors"
          >Maquila tu Producto</RouterLink
        >
      </div>

      <!-- Col 4: Newsletter -->
      <div class="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
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
      <div
        class="max-w-7xl mx-auto px-4 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0"
      >
        <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
          <p class="text-sm text-white/60">
            Derechos reservados para
            <span class="font-semibold text-white">Power Cleaner</span>
          </p>
          <div class="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-white/50">
            <RouterLink to="/aviso-de-privacidad" class="hover:text-white transition-colors">Aviso de Privacidad</RouterLink>
            <span class="hidden md:inline text-white/20">|</span>
            <RouterLink to="/terminos-y-condiciones" class="hover:text-white transition-colors">Términos y Condiciones</RouterLink>
            <span class="hidden md:inline text-white/20">|</span>
            <RouterLink to="/politica-de-envios" class="hover:text-white transition-colors">Envíos y Devoluciones</RouterLink>
          </div>
        </div>

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
