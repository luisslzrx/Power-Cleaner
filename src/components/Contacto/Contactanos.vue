<template>
  <!-- Contacto Section -->
  <section id="formulario-contacto" class="scroll-mt-24">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-2">
        <h2 class="text-xl sm:text-2xl font-bold text-power-primary">
          Contáctanos <span class="text-power-accent">en Power Cleaner</span>
        </h2>
      </div>

      <!-- Underline -->
      <div class="w-full h-px bg-blue-500 mb-6 md:mb-10"></div>

      <div class="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <!-- Columna izquierda: Información de contacto -->
        <div class="w-full lg:w-5/12">
          <!-- Dirección -->
          <div class="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-7">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 bg-power-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            >
              <img
                src="/src/assets/icons/direccion.svg"
                alt="Dirección"
                class="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div>
              <p class="text-xs sm:text-sm font-bold text-[#0b1a2e] mb-1">Dirección:</p>
              <p class="text-xs sm:text-sm text-[#43474e] leading-relaxed">
                Av. Benito Juárez No. 794, esquina con José de Ruiz, Col. Jardines de la Villa,
                Villa de Álvarez, Colima, México.
              </p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-7">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 bg-power-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            >
              <img
                src="/src/assets/icons/email.svg"
                alt="Email"
                class="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-xs sm:text-sm font-bold text-[#0b1a2e] mb-1">Email:</p>
              <p class="text-xs sm:text-sm text-[#43474e] truncate">
                <a href="mailto:ventas@powercleaner.com" class="hover:text-power-accent transition-colors break-all">
                  ventas@powercleaner.com
                </a>
              </p>
            </div>
          </div>

          <!-- Teléfono -->
          <div class="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-7">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 bg-power-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            >
              <img
                src="/src/assets/icons/telefono.svg"
                alt="Teléfono"
                class="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div>
              <p class="text-xs sm:text-sm font-bold text-[#0b1a2e] mb-1">Teléfono:</p>
              <p class="text-xs sm:text-sm text-[#43474e]">
                <a href="tel:+523122454500" class="hover:text-power-accent transition-colors">
                  +52 312 245 4500
                </a>
              </p>
            </div>
          </div>

          <!-- WhatsApp -->
          <div class="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-9">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            >
              <img
                src="/src/assets/icons/whatsapp.svg"
                alt="WhatsApp"
                class="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div>
              <p class="text-xs sm:text-sm font-bold text-[#0b1a2e] mb-1">WhatsApp:</p>
              <p class="text-xs sm:text-sm text-[#43474e]">
                <a href="https://wa.me/5213122454500" target="_blank" rel="noopener noreferrer" class="hover:text-[#25D366] transition-colors font-semibold">
                  +52 1 312 245 4500
                </a>
              </p>
            </div>
          </div>

          <!-- Descripción -->
          <p class="text-xs sm:text-sm text-[#74777f] leading-relaxed mb-6 sm:mb-8">
            En Power Cleaner estamos listos para atenderte. Ya sea que necesites asesoría sobre
            nuestros productos, cotizar un pedido mayorista o explorar oportunidades de franquicia,
            nuestro equipo está disponible para ti.
          </p>

          <!-- Redes sociales -->
          <div class="flex items-center gap-3">
            <!-- Facebook -->
            <a
              href="https://www.facebook.com/MERICAN.CLEANING.PRODUCTS"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-power-primary hover:bg-power-accent transition-all flex items-center justify-center cursor-pointer shadow-sm text-white hover:scale-105 active:scale-95"
              title="Facebook"
            >
              <img
                src="/src/assets/icons/facebook.svg"
                alt="Facebook"
                class="w-5 h-5"
              />
            </a>

            <!-- Instagram -->
            <a
              href="https://www.instagram.com/powercleaner.88"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-power-primary hover:bg-power-accent transition-all flex items-center justify-center cursor-pointer shadow-sm text-white hover:scale-105 active:scale-95"
              title="Instagram"
            >
              <img
                src="/src/assets/icons/instagram.svg"
                alt="Instagram"
                class="w-5 h-5"
              />
            </a>

            <!-- TikTok -->
            <a
              href="https://www.tiktok.com/@elpoderdelalimpieza"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-power-primary hover:bg-power-accent transition-all flex items-center justify-center cursor-pointer shadow-sm text-white hover:scale-105 active:scale-95"
              title="TikTok"
            >
              <img
                src="/src/assets/icons/tiktok.svg"
                alt="TikTok"
                class="w-5 h-5"
              />
            </a>
          </div>
        </div>

        <!-- Columna derecha: formulario -->
        <div class="w-full lg:w-7/12 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200">
          <h3 class="text-xl sm:text-2xl font-bold text-[#0b1a2e] mb-2">
            Déjanos un mensaje
          </h3>
          <p class="text-xs sm:text-sm text-slate-500 mb-6">
            Completa tus datos y nos pondremos en contacto contigo a la brevedad.
          </p>

          <form @submit.prevent class="space-y-4 sm:space-y-5">
            <!-- Nombre y Email -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label class="block text-xs sm:text-sm font-semibold text-[#0b1a2e] mb-1.5">
                  Nombre completo <span class="text-[#b52426]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  required
                  class="w-full py-3 px-4 border border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none bg-white focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all"
                />
              </div>
              <div>
                <label class="block text-xs sm:text-sm font-semibold text-[#0b1a2e] mb-1.5">
                  Correo electrónico <span class="text-[#b52426]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="ejemplo@correo.com"
                  required
                  class="w-full py-3 px-4 border border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none bg-white focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all"
                />
              </div>
            </div>

            <!-- Asunto -->
            <div>
              <label class="block text-xs sm:text-sm font-semibold text-[#0b1a2e] mb-1.5">
                Asunto <span class="text-[#b52426]">*</span>
              </label>
              <input
                type="text"
                placeholder="Cotización, franquicia, soporte..."
                required
                class="w-full py-3 px-4 border border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none bg-white focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all"
              />
            </div>

            <!-- Mensaje -->
            <div>
              <label class="block text-xs sm:text-sm font-semibold text-[#0b1a2e] mb-1.5">
                Mensaje <span class="text-[#b52426]">*</span>
              </label>
              <textarea
                rows="5"
                placeholder="Escribe aquí tu consulta o requerimiento..."
                required
                class="w-full py-3 px-4 border border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none resize-none bg-white focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all"
              ></textarea>
            </div>

            <!-- Botón -->
            <button
              type="submit"
              class="w-full sm:w-auto py-3.5 px-8 md:px-10 bg-power-accent hover:bg-power-accent/90 text-white rounded-lg text-xs font-bold tracking-[0.1em] cursor-pointer shadow-md hover:shadow-lg active:scale-95 transition-all"
            >
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Contacto component
</script>
