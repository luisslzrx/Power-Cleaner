<template>
  <!-- Formulario de Interés - Franquicias Section -->
  <section class="max-w-7xl mx-auto px-4 md:px-6 my-16">
    <div class="relative overflow-hidden rounded-3xl bg-[#0b1a2e] px-4 md:px-6 py-12 md:py-16">
      <!-- Decorative circles -->
      <div class="absolute -top-16 -right-16 w-72 h-72 bg-[#1e3a5f] rounded-full opacity-40"></div>
      <div
        class="absolute -bottom-20 -left-10 w-64 h-64 bg-[#1e3a5f] rounded-full opacity-30"
      ></div>

      <div
        class="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <!-- Columna izquierda: copy -->
        <div>
          <span
            class="block mb-3 md:mb-4 text-xs font-bold tracking-[0.15em] uppercase text-[#ff5a55]"
          >
            Da el Siguiente Paso
          </span>
          <h2 class="mb-4 md:mb-6 text-2xl md:text-4xl font-extrabold text-white leading-tight">
            ¿Listo para Tener tu Propia Franquicia Power Cleaner?
          </h2>
          <p class="mb-8 text-sm md:text-base font-normal leading-[1.7] text-[#86a0cd]">
            Déjanos tus datos y un asesor de franquicias se pondrá en contacto contigo para resolver
            tus dudas y guiarte en cada paso del proceso. Sin compromiso.
          </p>

          <!-- Datos de contacto rápido -->
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <span class="text-sm md:text-base text-white">314 100 7071</span>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <span class="text-sm md:text-base text-white">franquicias@powercleaner.mx</span>
            </div>
          </div>
        </div>

        <!-- Columna derecha: formulario -->
        <div class="bg-white rounded-2xl p-6 md:p-8">
          <h3 class="text-lg md:text-xl font-bold text-[#0b1a2e] mb-1">Formulario de Interés</h3>
          <p class="text-sm text-[#43474e] mb-6">Cuéntanos sobre ti y nos pondremos en contacto.</p>

          <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
            <!-- Nombre -->
            <div>
              <label class="text-sm font-semibold text-[#0b1a2e] block mb-1.5">
                Nombre completo <span class="text-[#b52426]">*</span>
              </label>
              <input
                v-model="form.nombre"
                type="text"
                required
                placeholder="Tu nombre"
                class="w-full px-4 py-2.5 border border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none focus:border-[#b52426] transition-colors"
              />
            </div>

            <!-- Teléfono y Correo -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="text-sm font-semibold text-[#0b1a2e] block mb-1.5">
                  Teléfono <span class="text-[#b52426]">*</span>
                </label>
                <input
                  v-model="form.telefono"
                  type="tel"
                  required
                  placeholder="55 1234 5678"
                  class="w-full px-4 py-2.5 border border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none focus:border-[#b52426] transition-colors"
                />
              </div>
              <div>
                <label class="text-sm font-semibold text-[#0b1a2e] block mb-1.5">
                  Correo <span class="text-[#b52426]">*</span>
                </label>
                <input
                  v-model="form.correo"
                  type="email"
                  required
                  placeholder="tucorreo@email.com"
                  class="w-full px-4 py-2.5 border border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none focus:border-[#b52426] transition-colors"
                />
              </div>
            </div>

            <!-- Ciudad / Estado -->
            <div>
              <label class="text-sm font-semibold text-[#0b1a2e] block mb-1.5">
                Ciudad / Estado <span class="text-[#b52426]">*</span>
              </label>
              <input
                v-model="form.ciudad"
                type="text"
                required
                placeholder="Ej. Guadalajara, Jalisco"
                class="w-full px-4 py-2.5 border border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none focus:border-[#b52426] transition-colors"
              />
            </div>

            <!-- Inversión estimada -->
            <div>
              <label class="text-sm font-semibold text-[#0b1a2e] block mb-1.5">
                Inversión estimada disponible
              </label>
              <select
                v-model="form.inversion"
                class="w-full px-4 py-2.5 border border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none focus:border-[#b52426] transition-colors bg-white"
              >
                <option value="" disabled selected>Selecciona un rango</option>
                <option value="50k-100k">$50,000 - $100,000 MXN</option>
                <option value="100k-250k">$100,000 - $250,000 MXN</option>
                <option value="250k-500k">$250,000 - $500,000 MXN</option>
                <option value="500k+">Más de $500,000 MXN</option>
              </select>
            </div>

            <!-- Comentarios -->
            <div>
              <label class="text-sm font-semibold text-[#0b1a2e] block mb-1.5"> Comentarios </label>
              <textarea
                v-model="form.comentarios"
                rows="3"
                placeholder="Cuéntanos más sobre tu interés en la franquicia..."
                class="w-full px-4 py-2.5 border border-[#e0e3ed] rounded-lg text-sm text-[#0b1a2e] outline-none focus:border-[#b52426] transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Botón -->
            <button
              type="submit"
              class="flex items-center justify-center gap-2 bg-power-accent text-white text-sm font-semibold px-7 py-3 rounded-lg transition-all hover:opacity-90 mt-2"
            >
              Quiero más información
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
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nombre: '',
  telefono: '',
  correo: '',
  ciudad: '',
  inversion: '',
  comentarios: '',
})

const handleSubmit = () => {
  // Aquí se conecta la lógica de envío (API, email, CRM, etc.)
  console.log('Formulario de franquicia enviado:', form)
}
</script>
