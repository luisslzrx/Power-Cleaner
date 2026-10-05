<template>
  <section id="franquicias-form" class="max-w-7xl mx-auto px-4 md:px-6 my-16 md:my-24">
    <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
      <!-- Columna izquierda: Información comercial y soporte de Franquicias -->
      <div class="w-full lg:w-5/12 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-power-accent">Da el Siguiente Paso</span>
          <h2 class="text-2xl md:text-4xl font-extrabold text-power-primary mt-2 mb-6">
            ¿Listo para tener tu propia sucursal?
          </h2>
          <p class="text-sm md:text-base text-gray-650 leading-relaxed mb-8">
            Déjanos tus datos de contacto y un asesor de nuestro departamento de expansión se pondrá en contacto contigo para resolver tus dudas y guiarte en el proceso de solicitud, sin compromiso alguno.
          </p>

          <div class="space-y-6">
            <!-- Teléfono -->
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 bg-power-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <img src="/src/assets/icons/telefono.svg" alt="Teléfono" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Línea de Expansión</p>
                <a href="tel:+523141007071" class="text-sm font-bold text-power-primary hover:text-power-accent transition-colors">
                  +52 314 100 7071
                </a>
              </div>
            </div>

            <!-- Correo -->
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 bg-power-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <img src="/src/assets/icons/email.svg" alt="Email" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Correo de Expansión</p>
                <a href="mailto:franquicias@powercleaner.mx" class="text-sm font-bold text-power-primary hover:text-power-accent transition-colors">
                  franquicias@powercleaner.mx
                </a>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 bg-power-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <img src="/src/assets/icons/whatsapp.svg" alt="WhatsApp" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Chat de Ventas</p>
                <a href="https://wa.me/5213141007071" target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-[#25D366] hover:underline">
                  +52 1 314 100 7071
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Nota de privacidad -->
        <div class="mt-8 p-5 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-power-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-xs text-gray-500 leading-relaxed">
            <strong>Protección de Datos:</strong> Tus datos de contacto y la información financiera compartida están resguardados por nuestro aviso de privacidad y serán tratados con absoluta confidencialidad comercial.
          </p>
        </div>
      </div>

      <!-- Columna derecha: Formulario de Interés -->
      <div class="w-full lg:w-7/12 bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden flex flex-col justify-center">
        
        <!-- Success State -->
        <div v-if="formEnviado" class="text-center py-10 px-4 flex flex-col items-center">
          <div class="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-100 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-power-primary mb-2">¡Solicitud Registrada!</h3>
          <p class="text-sm text-gray-500 leading-relaxed max-w-md mx-auto mb-8">
            Tu información ha sido recibida con éxito. Un ejecutivo de expansión analizará tu perfil y la disponibilidad de zona, y se pondrá en contacto contigo en un plazo no mayor a 24 horas hábiles.
          </p>
          <button 
            @click="resetForm" 
            class="px-6 py-2.5 bg-power-primary text-white text-xs font-bold tracking-[0.1em] rounded-lg hover:bg-power-secondary transition-colors cursor-pointer border-none outline-none"
          >
            ENVIAR OTRA SOLICITUD
          </button>
        </div>

        <!-- Form Fields -->
        <form v-else @submit.prevent="submitForm" class="space-y-6">
          <h3 class="text-lg md:text-xl font-bold text-power-primary pb-3 border-b border-gray-100">
            Formulario de Perfil de Franquiciatario
          </h3>

          <!-- Fila 1: Nombre y Correo -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
                Nombre Completo <span class="text-power-accent">*</span>
              </label>
              <input
                v-model="formData.nombre"
                type="text"
                required
                placeholder="Ej. María González"
                class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white"
              />
            </div>
            <div>
              <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
                Email de Contacto <span class="text-power-accent">*</span>
              </label>
              <input
                v-model="formData.email"
                type="email"
                required
                placeholder="maria@correo.com"
                class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white"
              />
            </div>
          </div>

          <!-- Fila 2: Teléfono y Ciudad/Estado -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
                Teléfono <span class="text-power-accent">*</span>
              </label>
              <input
                v-model="formData.telefono"
                type="tel"
                required
                placeholder="33 1234 5678"
                class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white"
              />
            </div>
            <div>
              <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
                Ciudad y Estado de Interés <span class="text-power-accent">*</span>
              </label>
              <input
                v-model="formData.ciudad"
                type="text"
                required
                placeholder="Ej. Colima, Colima"
                class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white"
              />
            </div>
          </div>

          <!-- Fila 3: Inversión disponible -->
          <div>
            <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
              Inversión Estimada Disponible <span class="text-power-accent">*</span>
            </label>
            <select
              v-model="formData.inversion"
              required
              class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white cursor-pointer"
            >
              <option value="" disabled>Selecciona un rango de inversión disponible</option>
              <option value="50k-100k">$50,000 - $100,000 MXN</option>
              <option value="100k-250k">$100,000 - $250,000 MXN</option>
              <option value="250k-500k">$250,000 - $500,000 MXN</option>
              <option value="500k+">Más de $500,000 MXN</option>
            </select>
          </div>

          <!-- Fila 4: Mensaje -->
          <div>
            <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
              Mensaje / Comentarios Adicionales
            </label>
            <textarea
              v-model="formData.mensaje"
              rows="4"
              placeholder="Platícanos por qué te interesa adquirir una franquicia y si cuentas con experiencia previa en el sector comercial..."
              class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary resize-none bg-white"
            ></textarea>
          </div>

          <!-- Botón de Envío -->
          <button
            type="submit"
            :disabled="cargando"
            class="w-full md:w-auto py-3.5 px-10 bg-power-accent hover:bg-red-800 text-white border-none rounded-lg text-xs font-bold tracking-[0.15em] cursor-pointer shadow-lg shadow-power-accent/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="cargando">PROCESANDO...</span>
            <span v-else>SOLICITAR INFORMACIÓN</span>
            <svg v-if="!cargando" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formEnviado = ref(false)
const cargando = ref(false)

const formData = reactive({
  nombre: '',
  email: '',
  telefono: '',
  ciudad: '',
  inversion: '',
  mensaje: ''
})

const submitForm = () => {
  cargando.value = true
  // Simular envío
  setTimeout(() => {
    cargando.value = false
    formEnviado.value = true
  }, 1000)
}

const resetForm = () => {
  formData.nombre = ''
  formData.email = ''
  formData.telefono = ''
  formData.ciudad = ''
  formData.inversion = ''
  formData.mensaje = ''
  formEnviado.value = false
}
</script>
