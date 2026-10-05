<template>
  <!-- Contacto Section -->
  <section>
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Contactanos <span class="text-power-accent"> en Power Cleaner</span>
        </h2>
      </div>

      <!-- Underline -->
      <div class="w-full h-px bg-blue-500 mb-4 md:mb-6"></div>

      <div class="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
        <!-- Columna izquierda: Find us here -->
        <div class="w-full md:flex-1">
          <!-- Dirección -->
          <div class="flex items-center gap-3 md:gap-5 mb-6 md:mb-8">
            <div
              class="w-11 h-11 md:w-13 md:h-13 bg-power-primary rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <img
                src="/src/assets/icons/direccion.svg"
                alt="Dirección"
                class="w-5 h-5 md:w-[22px] md:h-[22px]"
              />
            </div>
            <div>
              <p class="text-xs md:text-sm font-bold text-[#0b1a2e] mb-1">Dirección:</p>
              <p class="text-xs md:text-sm text-[#43474e] leading-[1.5]">
                Av. Benito Juárez No. 794, esquina con José de Ruiz, Col. Jardines de la Villa,
                Villa de Álvarez, Colima, México.
              </p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-center gap-3 md:gap-5 mb-6 md:mb-8">
            <div
              class="w-11 h-11 md:w-13 md:h-13 bg-power-primary rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <img
                src="/src/assets/icons/email.svg"
                alt="Email"
                class="w-5 h-5 md:w-[22px] md:h-[22px]"
              />
            </div>
            <div>
              <p class="text-xs md:text-sm font-bold text-[#0b1a2e] mb-1">Email:</p>
              <p class="text-xs md:text-sm text-[#43474e]">
                <a href="mailto:ventas@powercleaner.com" class="hover:text-power-accent transition-colors">
                  ventas@powercleaner.com
                </a>
              </p>
            </div>
          </div>

          <!-- Teléfono -->
          <div class="flex items-center gap-3 md:gap-5 mb-6 md:mb-8">
            <div
              class="w-11 h-11 md:w-13 md:h-13 bg-power-primary rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <img
                src="/src/assets/icons/telefono.svg"
                alt="Teléfono"
                class="w-5 h-5 md:w-[22px] md:h-[22px]"
              />
            </div>
            <div>
              <p class="text-xs md:text-sm font-bold text-[#0b1a2e] mb-1">Teléfono:</p>
              <p class="text-xs md:text-sm text-[#43474e]">
                <a href="tel:+523122454500" class="hover:text-power-accent transition-colors">
                  +52 312 245 4500
                </a>
              </p>
            </div>
          </div>

          <!-- WhatsApp -->
          <div class="flex items-center gap-3 md:gap-5 mb-8 md:mb-12">
            <div
              class="w-11 h-11 md:w-13 md:h-13 bg-power-primary rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <img
                src="/src/assets/icons/whatsapp.svg"
                alt="WhatsApp"
                class="w-5 h-5 md:w-[22px] md:h-[22px]"
              />
            </div>
            <div>
              <p class="text-xs md:text-sm font-bold text-[#0b1a2e] mb-1">WhatsApp:</p>
              <p class="text-xs md:text-sm text-[#43474e]">
                <a href="https://wa.me/5213122454500" target="_blank" rel="noopener noreferrer" class="hover:text-[#25D366] transition-colors font-semibold">
                  +52 1 312 245 4500
                </a>
              </p>
            </div>
          </div>

          <!-- Descripción -->
          <p class="text-xs md:text-sm text-[#74777f] leading-[1.7] mb-6 md:mb-10">
            En Power Cleaner estamos listos para atenderte. Ya sea que necesites asesoría sobre
            nuestros productos, cotizar un pedido mayorista o explorar oportunidades de franquicia,
            nuestro equipo está disponible para ti.
          </p>

          <!-- Redes sociales -->
          <div class="flex items-center gap-3 md:gap-4">
            <!-- Facebook -->
            <a
              href="https://www.facebook.com/MERICAN.CLEANING.PRODUCTS"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 md:w-10 md:h-10 rounded-full bg-power-primary hover:bg-power-accent transition-colors flex items-center justify-center cursor-pointer shadow-sm text-white"
              title="Facebook"
            >
              <img
                src="/src/assets/icons/facebook.svg"
                alt="Facebook"
                class="w-[18px] h-[18px]"
              />
            </a>

            <!-- Instagram -->
            <a
              href="https://www.instagram.com/powercleaner.88"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 md:w-10 md:h-10 rounded-full bg-power-primary hover:bg-power-accent transition-colors flex items-center justify-center cursor-pointer shadow-sm text-white"
              title="Instagram"
            >
              <img
                src="/src/assets/icons/instagram.svg"
                alt="Instagram"
                class="w-[18px] h-[18px]"
              />
            </a>

            <!-- TikTok -->
            <a
              href="https://www.tiktok.com/@elpoderdelalimpieza"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 md:w-10 md:h-10 rounded-full bg-power-primary hover:bg-power-accent transition-colors flex items-center justify-center cursor-pointer shadow-sm text-white"
              title="TikTok"
            >
              <img
                src="/src/assets/icons/tiktok.svg"
                alt="TikTok"
                class="w-[18px] h-[18px]"
              />
            </a>
          </div>
        </div>

        <!-- Columna derecha: formulario -->
        <div class="w-full md:flex-1">
          <h3 class="text-xl md:text-2xl font-bold text-[#0b1a2e] mb-4 md:mb-6">
            Déjanos un mensaje
          </h3>

          <!-- Nombre y Email -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
            <div>
              <label class="block text-sm font-semibold text-[#0b1a2e] mb-2">
                Nombre <span class="text-[#b52426]">*</span>
              </label>
              <input
                type="text"
                class="w-full py-[14px] px-4 border-[1.5px] border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none bg-white"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-[#0b1a2e] mb-2">
                Email <span class="text-[#b52426]">*</span>
              </label>
              <input
                type="email"
                class="w-full py-[14px] px-4 border-[1.5px] border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none bg-white"
              />
            </div>
          </div>

          <!-- Asunto -->
          <div class="mb-5">
            <label class="block text-sm font-semibold text-[#0b1a2e] mb-2">
              Asunto <span class="text-[#b52426]">*</span>
            </label>
            <input
              type="text"
              class="w-full py-[14px] px-4 border-[1.5px] border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none bg-white"
            />
          </div>

          <!-- Mensaje -->
          <div class="mb-8">
            <label class="block text-sm font-semibold text-[#0b1a2e] mb-2"> Mensaje </label>
            <textarea
              rows="6"
              class="w-full py-[14px] px-4 border-[1.5px] border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none resize-none bg-white"
            ></textarea>
          </div>

          <!-- Botón -->
          <button
            class="py-3 md:py-[18px] px-8 md:px-12 bg-power-accent text-white border-none rounded-lg text-xs font-bold tracking-[0.1em] cursor-pointer"
          >
            ENVIAR MENSAJE
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Contacto component
</script>
