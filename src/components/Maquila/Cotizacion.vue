<template>
  <section id="cotizacion-form" class="max-w-7xl mx-auto px-4 md:px-6 my-16 md:my-24">
    <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
      <!-- Columna izquierda: Información comercial y WhatsApp -->
      <div class="w-full lg:w-5/12 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-power-accent">Ponte en Contacto</span>
          <h2 class="text-2xl md:text-4xl font-extrabold text-power-primary mt-2 mb-6">
            Inicia tu proyecto de maquila hoy mismo
          </h2>
          <p class="text-sm md:text-base text-gray-650 leading-relaxed mb-8">
            Completa el formulario con los detalles iniciales de tu producto y volumen estimado. Uno de nuestros ingenieros químicos te contactará en menos de 24 horas hábiles.
          </p>

          <div class="space-y-6">
            <!-- Teléfono -->
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 bg-power-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <img src="/src/assets/icons/telefono.svg" alt="Teléfono" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Teléfono de Ventas</p>
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
                <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Correo Especializado</p>
                <a href="mailto:maquila@powercleaner.com" class="text-sm font-bold text-power-primary hover:text-power-accent transition-colors">
                  maquila@powercleaner.com
                </a>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="flex items-center gap-4">
              <div class="w-11 h-11 bg-power-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <img src="/src/assets/icons/whatsapp.svg" alt="WhatsApp" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-xs text-gray-400 font-semibold uppercase tracking-wider">WhatsApp Express</p>
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
            <strong>Nota de Privacidad:</strong> Tus datos personales y la información técnica provista están protegidos bajo nuestra política de privacidad empresarial y solo se utilizarán para la cotización de este servicio.
          </p>
        </div>
      </div>

      <!-- Columna derecha: Formulario interactivo -->
      <div class="w-full lg:w-7/12 bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden flex flex-col justify-center">
        
        <!-- Success State -->
        <div v-if="formEnviado" class="text-center py-10 px-4 flex flex-col items-center">
          <div class="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-100 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-power-primary mb-2">¡Solicitud Enviada con Éxito!</h3>
          <p class="text-sm text-gray-500 leading-relaxed max-w-md mx-auto mb-8">
            Agradecemos tu interés en maquilar con nosotros. Un especialista de laboratorio se pondrá en contacto contigo en breve para dar seguimiento a tu requerimiento.
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
            Solicitud de Cotización
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
                Email <span class="text-power-accent">*</span>
              </label>
              <input
                v-model="formData.email"
                type="email"
                required
                placeholder="juan@empresa.com"
                class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white"
              />
            </div>
          </div>

          <!-- Fila 2: Teléfono y Empresa -->
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
                Nombre de tu Empresa / Marca
              </label>
              <input
                v-model="formData.empresa"
                type="text"
                placeholder="Opcional"
                class="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white"
              />
            </div>
          </div>

          <!-- Fila 3: Tipo de Producto y Volumen -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
                Línea de Producto a Maquilar <span class="text-power-accent">*</span>
              </label>
              <select
                v-model="formData.tipoProducto"
                required
                class="w-full py-3 px-4 border border-gray-205 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white cursor-pointer"
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="Hogar">Limpieza del Hogar</option>
                <option value="Automotriz">Línea Automotriz</option>
                <option value="Industrial">Limpieza Industrial / Institucional</option>
                <option value="Desinfectantes">Desinfectantes y Sanitizantes</option>
                <option value="Cuidado Personal">Jabones y Cuidado Personal</option>
                <option value="Otro">Otro / Fórmulas Especiales</option>
              </select>
            </div>
            <div>
              <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
                Volumen Inicial Estimado <span class="text-power-accent">*</span>
              </label>
              <select
                v-model="formData.volumen"
                required
                class="w-full py-3 px-4 border border-gray-205 rounded-lg text-sm text-power-primary outline-none focus:border-power-secondary transition-all bg-white cursor-pointer"
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="Pequeño">Menos de 500 L / kg</option>
                <option value="Medio">500 a 1,000 L / kg</option>
                <option value="Grande">1,000 a 5,000 L / kg</option>
                <option value="Industrial">Más de 5,000 L / kg</option>
                <option value="No definido">Por definir en asesoría</option>
              </select>
            </div>
          </div>

          <!-- Fila 4: Radios de Fórmula y Envase -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div>
              <span class="block text-xs font-bold text-power-primary uppercase tracking-wider mb-2">
                ¿Cuenta con fórmula propia?
              </span>
              <div class="flex items-center gap-4">
                <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    v-model="formData.formulaPropia"
                    value="Si"
                    class="w-4 h-4 text-power-secondary border-gray-300 focus:ring-power-secondary"
                  />
                  Sí
                </label>
                <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    v-model="formData.formulaPropia"
                    value="No"
                    class="w-4 h-4 text-power-secondary border-gray-300 focus:ring-power-secondary"
                  />
                  No / Requiero desarrollo
                </label>
              </div>
            </div>

            <div>
              <span class="block text-xs font-bold text-power-primary uppercase tracking-wider mb-2">
                ¿Requiere envases y etiquetas?
              </span>
              <div class="flex items-center gap-4">
                <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    v-model="formData.envaseEtiqueta"
                    value="Si"
                    class="w-4 h-4 text-power-secondary border-gray-300 focus:ring-power-secondary"
                  />
                  Sí / Servicio completo
                </label>
                <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    v-model="formData.envaseEtiqueta"
                    value="No"
                    class="w-4 h-4 text-power-secondary border-gray-300 focus:ring-power-secondary"
                  />
                  No / Ya los tengo
                </label>
              </div>
            </div>
          </div>

          <!-- Fila 5: Mensaje -->
          <div>
            <label class="block text-xs md:text-sm font-semibold text-power-primary mb-2">
              Descripción del Proyecto / Requerimientos Adicionales
            </label>
            <textarea
              v-model="formData.mensaje"
              rows="4"
              placeholder="Por favor cuéntanos más sobre el producto que deseas maquilar..."
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
            <span v-else>SOLICITAR COTIZACIÓN</span>
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
  empresa: '',
  tipoProducto: '',
  volumen: '',
  formulaPropia: 'No',
  envaseEtiqueta: 'Si',
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
  formData.empresa = ''
  formData.tipoProducto = ''
  formData.volumen = ''
  formData.formulaPropia = 'No'
  formData.envaseEtiqueta = 'Si'
  formData.mensaje = ''
  formEnviado.value = false
}
</script>
