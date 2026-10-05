<template>
  <section id="mayoreo-form" class="max-w-7xl mx-auto px-4 md:px-6 my-16 md:my-24">
    <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
      <!-- Columna izquierda: Información comercial y WhatsApp -->
      <div class="w-full lg:w-5/12 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-power-accent">Mayoreo & Distribución</span>
          <h2 class="text-2xl md:text-4xl font-extrabold text-power-primary mt-2 mb-6">
            Únete a nuestra red de distribuidores
          </h2>
          <p class="text-sm md:text-base text-gray-650 leading-relaxed mb-8">
            Si ya vendes productos a granel, tienes una tienda local establecida o quieres comenzar a distribuir en tu localidad, escríbenos. Ofrecemos asesoría y precios preferenciales.
          </p>

          <div class="space-y-6">
            <!-- Teléfono -->
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 bg-power-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <img src="/src/assets/icons/telefono.svg" alt="Teléfono" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Línea Mayorista</p>
                <a href="tel:+523122454500" class="text-sm font-bold text-power-primary hover:text-power-accent transition-colors">
                  +52 312 245 4500
                </a>
              </div>
            </div>

            <!-- Correo -->
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 bg-power-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <img src="/src/assets/icons/email.svg" alt="Email" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Correo de Ventas</p>
                <a href="mailto:ventas@powercleaner.com" class="text-sm font-bold text-power-primary hover:text-power-accent transition-colors">
                  ventas@powercleaner.com
                </a>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 bg-power-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <img src="/src/assets/icons/whatsapp.svg" alt="WhatsApp" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Atención de Negocios</p>
                <a href="https://wa.me/5213122454500" target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-[#25D366] hover:underline">
                  +52 1 312 245 4500
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
            <strong>Protección de Datos:</strong> La información comercial provista está protegida por nuestra política de privacidad empresarial y se procesará únicamente para la cotización de surtido mayorista.
          </p>
        </div>
      </div>

      <!-- Columna derecha: Formulario de Mayoreo -->
      <div class="w-full lg:w-7/12 bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden flex flex-col justify-center">
        
        <!-- Success State -->
        <div v-if="formEnviado" class="text-center py-10 px-4 flex flex-col items-center">
          <div class="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-100 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-power-primary mb-2">¡Solicitud Recibida!</h3>
          <p class="text-sm text-gray-500 leading-relaxed max-w-md mx-auto mb-8">
            Agradecemos tu información comercial. Un ejecutivo de cuentas mayoristas analizará tu requerimiento y te enviará nuestro catálogo oficial de precios y descuentos en breve.
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
            Registro de Distribuidor / Negocio
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
                placeholder="Ej. Juan Pérez"
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
                placeholder="juan@negocio.com"
                class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white"
              />
            </div>
          </div>

          <!-- Fila 2: Teléfono y Nombre del Negocio -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
                Teléfono / WhatsApp <span class="text-power-accent">*</span>
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
                Nombre de tu Negocio / Razón Social <span class="text-power-accent">*</span>
              </label>
              <input
                v-model="formData.negocio"
                type="text"
                required
                placeholder="Ej. Productos a granel La Villa"
                class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white"
              />
            </div>
          </div>

          <!-- Fila 3: Estado y Tipo de Negocio -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
                Estado de la República <span class="text-power-accent">*</span>
              </label>
              <input
                v-model="formData.estado"
                type="text"
                required
                placeholder="Ej. Colima"
                class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white"
              />
            </div>
            <div>
              <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
                Perfil de tu Negocio <span class="text-power-accent">*</span>
              </label>
              <select
                v-model="formData.tipoNegocio"
                required
                class="w-full py-3 px-4 border border-gray-205 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white cursor-pointer"
              >
                <option value="" disabled>Selecciona tu perfil</option>
                <option value="Granel">Tienda de productos a granel</option>
                <option value="Envasados">Tienda de artículos de limpieza envasados</option>
                <option value="Distribuidor">Distribuyo a empresas / instituciones</option>
                <option value="Emprendedor">Emprendedor iniciando negocio</option>
                <option value="Otro">Otro modelo comercial</option>
              </select>
            </div>
          </div>

          <!-- Fila 4: Volumen Estimado y Checkboxes de Interés -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div>
              <label class="block text-xs font-bold text-power-primary uppercase tracking-wider mb-2">
                Volumen Mensual Estimado <span class="text-power-accent">*</span>
              </label>
              <select
                v-model="formData.volumen"
                required
                class="w-full py-2.5 px-3 border border-gray-200 rounded-lg text-xs text-power-primary outline-none focus:border-power-secondary bg-white cursor-pointer"
              >
                <option value="" disabled>Selecciona un monto</option>
                <option value="Pequeño">Menos de $10,000 MXN</option>
                <option value="Medio">$10,000 a $30,000 MXN</option>
                <option value="Grande">Más de $30,000 MXN</option>
                <option value="No definido">Por definir en llamada</option>
              </select>
            </div>

            <div>
              <span class="block text-xs font-bold text-power-primary uppercase tracking-wider mb-2">
                Líneas de Interés
              </span>
              <div class="grid grid-cols-2 gap-2">
                <label class="flex items-center gap-1.5 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="formData.lineasInteres"
                    value="Granel"
                    class="w-3.5 h-3.5 text-power-secondary border-gray-300 rounded focus:ring-power-secondary"
                  />
                  A Granel (Bidones)
                </label>
                <label class="flex items-center gap-1.5 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="formData.lineasInteres"
                    value="Hogar"
                    class="w-3.5 h-3.5 text-power-secondary border-gray-300 rounded focus:ring-power-secondary"
                  />
                  Línea Hogar
                </label>
                <label class="flex items-center gap-1.5 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="formData.lineasInteres"
                    value="Automotriz"
                    class="w-3.5 h-3.5 text-power-secondary border-gray-300 rounded focus:ring-power-secondary"
                  />
                  Automotriz
                </label>
                <label class="flex items-center gap-1.5 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="formData.lineasInteres"
                    value="Industrial"
                    class="w-3.5 h-3.5 text-power-secondary border-gray-300 rounded focus:ring-power-secondary"
                  />
                  Industrial
                </label>
              </div>
            </div>
          </div>

          <!-- Fila 5: Mensaje -->
          <div>
            <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
              Comentarios / Requerimientos Específicos
            </label>
            <textarea
              v-model="formData.mensaje"
              rows="4"
              placeholder="Platícanos sobre tu mercado y qué productos necesitas para surtir tu negocio..."
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
  negocio: '',
  estado: '',
  tipoNegocio: '',
  volumen: '',
  lineasInteres: [],
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
  formData.negocio = ''
  formData.estado = ''
  formData.tipoNegocio = ''
  formData.volumen = ''
  formData.lineasInteres = []
  formData.mensaje = ''
  formEnviado.value = false
}
</script>
