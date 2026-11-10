<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-[9999] overflow-y-auto font-sans">
      <!-- Backdrop oscuro -->
      <div
        class="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        @click="$emit('close')"
      ></div>

      <!-- Modal centrado -->
      <div class="min-h-full flex items-center justify-center p-3 sm:p-6 relative z-10">
        <div
          class="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden my-6 sm:my-8"
          @click.stop
        >
          <!-- Encabezado del Modal -->
          <div class="px-6 py-5 bg-power-primary text-white flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <svg v-if="isEditing" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h2 class="text-base sm:text-lg font-bold text-white leading-tight">
                  {{ isEditing ? 'Editar Producto' : 'Agregar Nuevo Producto' }}
                </h2>
                <p class="text-xs text-blue-200/80">
                  {{ isEditing ? `Modificando ID #${formData.id}` : 'Completa los campos para agregarlo al catálogo' }}
                </p>
              </div>
            </div>

            <button
              type="button"
              @click="$emit('close')"
              class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Cerrar ventana"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Cuerpo del formulario -->
          <form ref="formRef" @submit.prevent="handleSubmit" class="p-5 sm:p-8 space-y-6 max-h-[calc(90vh-140px)] overflow-y-auto">
            <!-- Alerta de error superior -->
            <div
              v-if="errorMessage"
              class="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs sm:text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <div class="flex-1 whitespace-pre-line leading-relaxed font-medium">
                {{ errorMessage }}
              </div>
            </div>

            <!-- SECCIÓN 1: Datos Generales -->
            <div class="space-y-4">
              <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100">
                1. Información General
              </h3>

              <!-- Nombre del Producto -->
              <div>
                <label for="prod-name" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Nombre del Producto <span class="text-red-500">*</span>
                </label>
                <input
                  id="prod-name"
                  v-model="formData.name"
                  type="text"
                  required
                  placeholder="Ej. Limpiador Multiusos Citrus 5L"
                  class="w-full py-2.5 px-3.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all bg-white"
                />
              </div>

              <!-- Fila: Precio y Presentación -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Precio -->
                <div>
                  <label for="prod-price" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Precio ($ MXN) <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-bold">$</span>
                    <input
                      id="prod-price"
                      v-model.number="formData.price"
                      type="number"
                      step="0.01"
                      min="0"
                      required
                      placeholder="0.00"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 outline-none focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all bg-white"
                    />
                  </div>
                </div>

                <!-- Variante / Presentación -->
                <div>
                  <label for="prod-variant" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Presentación / Variante
                  </label>
                  <input
                    id="prod-variant"
                    v-model="formData.variant_name"
                    type="text"
                    placeholder="Ej. Única, 1 Litro, 5 Litros, Caja 12pz"
                    class="w-full py-2.5 px-3.5 rounded-xl border border-slate-300 text-sm text-slate-900 outline-none focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all bg-white"
                  />
                </div>
              </div>

              <!-- Fila: Departamento y Categoría -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Departamento -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Departamento
                  </label>
                  <div class="space-y-2">
                    <select
                      v-model="selectedDeptOption"
                      @change="handleDeptSelectChange"
                      class="w-full py-2.5 px-3.5 rounded-xl border border-slate-300 text-sm text-slate-900 outline-none focus:border-power-primary transition-all bg-white"
                    >
                      <option value="">-- Sin departamento asignado --</option>
                      <option v-for="dept in existingDepartments" :key="dept" :value="dept">
                        {{ dept }}
                      </option>
                      <option value="__NEW__">+ Crear nuevo departamento...</option>
                    </select>
                    <input
                      v-if="selectedDeptOption === '__NEW__'"
                      v-model="customDeptName"
                      @input="formData.department = customDeptName"
                      type="text"
                      placeholder="Escribe el nombre del nuevo departamento"
                      class="w-full py-2 px-3 rounded-lg border border-power-primary/50 text-xs text-slate-900 outline-none bg-blue-50/20"
                    />
                  </div>
                </div>

                <!-- Categoría -->
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Categoría
                  </label>
                  <div class="space-y-2">
                    <select
                      v-model="selectedCatOption"
                      @change="handleCatSelectChange"
                      class="w-full py-2.5 px-3.5 rounded-xl border border-slate-300 text-sm text-slate-900 outline-none focus:border-power-primary transition-all bg-white"
                    >
                      <option value="">-- Sin categoría asignada --</option>
                      <option v-for="cat in existingCategories" :key="cat" :value="cat">
                        {{ cat }}
                      </option>
                      <option value="__NEW__">+ Crear nueva categoría...</option>
                    </select>
                    <input
                      v-if="selectedCatOption === '__NEW__'"
                      v-model="customCatName"
                      @input="formData.category = customCatName"
                      type="text"
                      placeholder="Escribe el nombre de la nueva categoría"
                      class="w-full py-2 px-3 rounded-lg border border-power-primary/50 text-xs text-slate-900 outline-none bg-blue-50/20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- SECCIÓN 2: SKU y Códigos -->
            <div class="space-y-4 pt-2">
              <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>2. Identificadores y Códigos (SKU)</span>
                <button
                  type="button"
                  @click="autoGenerateSku"
                  class="text-[11px] text-power-secondary hover:text-power-primary font-bold cursor-pointer transition-colors"
                >
                  🪄 Autogenerar desde nombre
                </button>
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- SKU -->
                <div>
                  <label for="prod-sku" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    SKU
                  </label>
                  <input
                    id="prod-sku"
                    v-model="formData.sku"
                    type="text"
                    placeholder="ej. desengrasante-industrial-5l"
                    class="w-full py-2.5 px-3.5 rounded-xl border border-slate-300 text-sm font-mono text-slate-900 outline-none focus:border-power-primary transition-all bg-white"
                  />
                </div>

                <!-- Parent SKU -->
                <div>
                  <label for="prod-parent-sku" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    SKU Padre (para variantes)
                  </label>
                  <input
                    id="prod-parent-sku"
                    v-model="formData.parent_sku"
                    type="text"
                    placeholder="ej. desengrasante-industrial"
                    class="w-full py-2.5 px-3.5 rounded-xl border border-slate-300 text-sm font-mono text-slate-900 outline-none focus:border-power-primary transition-all bg-white"
                  />
                </div>
              </div>
            </div>

            <!-- SECCIÓN 3: Descripción -->
            <div class="space-y-2 pt-2">
              <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100">
                3. Descripción del Producto
              </h3>
              <textarea
                v-model="formData.description"
                rows="4"
                placeholder="Detalla las características, modo de uso, beneficios y especificaciones técnicas..."
                class="w-full py-2.5 px-3.5 rounded-xl border border-slate-300 text-sm text-slate-900 outline-none focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all bg-white resize-y"
              ></textarea>
            </div>

            <!-- SECCIÓN 4: Fotografía del Producto -->
            <div class="space-y-4 pt-2">
              <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>4. Fotografía del Producto</span>
                <span v-if="formData.image" class="text-[11px] text-emerald-600 font-bold">
                  ✓ Imagen lista
                </span>
              </h3>

              <!-- Pestañas para subir archivo o pegar URL -->
              <div class="flex items-center gap-2 p-1 bg-slate-100 rounded-xl w-fit text-xs font-bold">
                <button
                  type="button"
                  @click="imageInputMode = 'upload'"
                  class="px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  :class="imageInputMode === 'upload' ? 'bg-white text-power-primary shadow-xs' : 'text-slate-500 hover:text-slate-800'"
                >
                  Subir archivo
                </button>
                <button
                  type="button"
                  @click="imageInputMode = 'url'"
                  class="px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  :class="imageInputMode === 'url' ? 'bg-white text-power-primary shadow-xs' : 'text-slate-500 hover:text-slate-800'"
                >
                  Pegar enlace URL
                </button>
              </div>

              <!-- Modo 1: Subir Archivo -->
              <div v-if="imageInputMode === 'upload'" class="space-y-3">
                <div
                  class="border-2 border-dashed border-slate-300 hover:border-power-primary rounded-2xl p-5 text-center transition-colors cursor-pointer bg-slate-50/50 hover:bg-blue-50/20"
                  @click="triggerFileInput"
                >
                  <input
                    ref="fileInputRef"
                    type="file"
                    accept="image/png, image/jpeg, image/webp, image/svg+xml"
                    class="hidden"
                    @change="handleFileUpload"
                  />
                  <div class="w-10 h-10 rounded-full bg-blue-50 text-power-secondary flex items-center justify-center mx-auto mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p class="text-xs font-bold text-slate-800">
                    <span class="text-power-secondary">Haz clic para seleccionar</span> o arrastra una imagen aquí
                  </p>
                  <p class="text-[11px] text-slate-400 mt-1">PNG, JPG, WEBP hasta 5MB</p>
                </div>

                <!-- Progreso de subida -->
                <div v-if="isUploadingImage" class="p-3 bg-blue-50 rounded-xl flex items-center gap-2 text-xs text-power-secondary font-medium">
                  <svg class="animate-spin h-4 w-4 text-power-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Subiendo archivo a Supabase Storage...</span>
                </div>
              </div>

              <!-- Modo 2: Enlace URL -->
              <div v-else class="space-y-1.5">
                <label for="prod-image-url" class="block text-xs font-semibold text-slate-700">
                  URL directa de la imagen (Cloudinary, Supabase o externa)
                </label>
                <input
                  id="prod-image-url"
                  v-model="formData.image"
                  type="url"
                  placeholder="https://res.cloudinary.com/... o https://..."
                  class="w-full py-2.5 px-3.5 rounded-xl border border-slate-300 text-xs font-mono text-slate-900 outline-none focus:border-power-primary transition-all bg-white"
                />
              </div>

              <!-- Vista previa de la imagen -->
              <div v-if="formData.image" class="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <div class="w-16 h-16 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0 flex items-center justify-center">
                  <img
                    :src="formData.image"
                    alt="Vista previa"
                    class="w-full h-full object-cover"
                    @error="imageLoadError = true"
                    @load="imageLoadError = false"
                  />
                </div>

                <div class="flex-1 min-w-0">
                  <p class="text-xs font-bold text-slate-800 truncate">Vista previa de imagen</p>
                  <p v-if="imageLoadError" class="text-[11px] text-red-500 font-semibold mt-0.5">
                    ⚠️ No se pudo cargar la imagen desde la URL provista.
                  </p>
                  <p v-else class="text-[11px] text-slate-400 truncate mt-0.5 font-mono">
                    {{ formData.image }}
                  </p>
                </div>

                <button
                  type="button"
                  @click="removeImage"
                  class="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                  title="Quitar imagen"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Botones de Acción y alerta de error inferior -->
            <div class="pt-4 border-t border-slate-200 sticky bottom-0 bg-white py-2 space-y-3">
              <div
                v-if="errorMessage"
                class="p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-xs font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <span class="whitespace-pre-line">{{ errorMessage }}</span>
              </div>

              <div class="flex items-center justify-end gap-3">
                <button
                  type="button"
                  @click="$emit('close')"
                  class="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  :disabled="isSaving || isUploadingImage"
                  class="px-6 py-2.5 rounded-xl bg-power-primary hover:bg-power-secondary text-white text-xs font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
                >
                  <svg
                    v-if="isSaving"
                    class="animate-spin -ml-1 mr-1 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ isSaving ? 'Guardando...' : isEditing ? 'Guardar Cambios' : 'Agregar Producto' }}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { supabase } from '../../supabase'

const props = defineProps({
  product: {
    type: Object,
    default: null,
  },
  existingProducts: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['close', 'saved'])

const isEditing = computed(() => !!props.product?.id)

const formData = reactive({
  id: null,
  name: '',
  price: 0,
  department: '',
  category: '',
  sku: '',
  parent_sku: '',
  variant_name: 'Única',
  description: '',
  image: '',
})

const formRef = ref(null)
const fileInputRef = ref(null)
const imageInputMode = ref('upload')
const isUploadingImage = ref(false)
const isSaving = ref(false)
const errorMessage = ref('')
const imageLoadError = ref(false)

const customDeptName = ref('')
const customCatName = ref('')
const selectedDeptOption = ref('')
const selectedCatOption = ref('')

// Opciones de departamentos y categorías
const existingDepartments = computed(() => {
  return [...new Set(props.existingProducts.map((p) => p.department).filter(Boolean))].sort()
})

const existingCategories = computed(() => {
  return [...new Set(props.existingProducts.map((p) => p.category).filter(Boolean))].sort()
})

const handleDeptSelectChange = () => {
  if (selectedDeptOption.value === '__NEW__') {
    formData.department = customDeptName.value
  } else {
    formData.department = selectedDeptOption.value
  }
}

const handleCatSelectChange = () => {
  if (selectedCatOption.value === '__NEW__') {
    formData.category = customCatName.value
  } else {
    formData.category = selectedCatOption.value
  }
}

// Inicializar datos al abrir modal
watch(
  () => props.product,
  (prod) => {
    if (prod) {
      formData.id = prod.id
      formData.name = prod.name || ''
      formData.price = prod.price ?? 0
      formData.department = prod.department || ''
      formData.category = prod.category || ''
      formData.sku = prod.sku || ''
      formData.parent_sku = prod.parent_sku || ''
      formData.variant_name = prod.variant_name || 'Única'
      formData.description = prod.description || ''
      formData.image = prod.image || ''

      if (existingDepartments.value.includes(prod.department)) {
        selectedDeptOption.value = prod.department
      } else if (prod.department) {
        selectedDeptOption.value = '__NEW__'
        customDeptName.value = prod.department
      } else {
        selectedDeptOption.value = ''
      }

      if (existingCategories.value.includes(prod.category)) {
        selectedCatOption.value = prod.category
      } else if (prod.category) {
        selectedCatOption.value = '__NEW__'
        customCatName.value = prod.category
      } else {
        selectedCatOption.value = ''
      }

      imageInputMode.value = prod.image && prod.image.includes('supabase') ? 'upload' : 'url'
    } else {
      resetForm()
    }
  },
  { immediate: true },
)

const resetForm = () => {
  formData.id = null
  formData.name = ''
  formData.price = 0
  formData.department = ''
  formData.category = ''
  formData.sku = ''
  formData.parent_sku = ''
  formData.variant_name = 'Única'
  formData.description = ''
  formData.image = ''
  customDeptName.value = ''
  customCatName.value = ''
  selectedDeptOption.value = ''
  selectedCatOption.value = ''
  imageInputMode.value = 'upload'
  errorMessage.value = ''
}

// Generador de SKU
const autoGenerateSku = () => {
  if (!formData.name) return
  const clean = formData.name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  formData.sku = clean
  if (!formData.parent_sku) {
    formData.parent_sku = clean
  }
}

const triggerFileInput = () => {
  fileInputRef.value?.click()
}

// Subida de imagen a Supabase Storage
const handleFileUpload = async (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  if (file.size > 5 * 1024 * 1024) {
    errorMessage.value = 'La imagen seleccionada supera el límite máximo de 5MB.'
    return
  }

  isUploadingImage.value = true
  errorMessage.value = ''

  try {
    const fileExt = file.name.split('.').pop() || 'webp'
    const fileName = `prod_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('productos')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      })

    if (uploadError) {
      if (uploadError.message?.includes('Bucket not found') || uploadError.statusCode === '404') {
        throw new Error(
          'El bucket "productos" no existe en Supabase Storage.\nPuedes crearlo en Supabase Dashboard > Storage > New bucket (público) o ingresar la URL de la imagen en la pestaña "Pegar enlace URL".'
        )
      }
      throw uploadError
    }

    const { data: urlData } = supabase.storage.from('productos').getPublicUrl(filePath)

    if (urlData?.publicUrl) {
      formData.image = urlData.publicUrl
    }
  } catch (err) {
    console.error('Error al subir imagen:', err)
    errorMessage.value = err.message || 'Error al subir la imagen a Supabase Storage.'
  } finally {
    isUploadingImage.value = false
    if (event.target) {
      event.target.value = ''
    }
  }
}

const removeImage = () => {
  formData.image = ''
}

// Envío del formulario
const handleSubmit = async () => {
  errorMessage.value = ''

  if (!formData.name || !formData.name.trim()) {
    errorMessage.value = 'El nombre del producto es obligatorio.'
    formRef.value?.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const numericPrice = Number(formData.price)
  if (isNaN(numericPrice) || numericPrice < 0) {
    errorMessage.value = 'El precio debe ser un número válido mayor o igual a 0.'
    formRef.value?.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  isSaving.value = true

  try {
    const deptToSave =
      selectedDeptOption.value === '__NEW__'
        ? customDeptName.value?.trim() || null
        : selectedDeptOption.value?.trim() || formData.department?.trim() || null

    const catToSave =
      selectedCatOption.value === '__NEW__'
        ? customCatName.value?.trim() || null
        : selectedCatOption.value?.trim() || formData.category?.trim() || null

    const payload = {
      name: formData.name.trim(),
      price: numericPrice,
      department: deptToSave,
      category: catToSave,
      sku: formData.sku?.trim() || null,
      parent_sku: formData.parent_sku?.trim() || formData.sku?.trim() || null,
      variant_name: formData.variant_name?.trim() || 'Única',
      description: formData.description?.trim() || null,
      image: formData.image?.trim() || null,
    }

    if (isEditing.value) {
      // Actualizar producto existente
      const { data, error } = await supabase
        .from('productos', { bypassFotoFilter: true })
        .update(payload)
        .eq('id', formData.id)
        .select()

      if (error) throw error
      emit('saved', { type: 'update', product: data?.[0] || { ...payload, id: formData.id } })
    } else {
      // Crear nuevo producto
      let createdProduct = null

      const { data, error } = await supabase
        .from('productos', { bypassFotoFilter: true })
        .insert([payload])
        .select()

      if (error) {
        if (
          error.code === '42501' ||
          error.message?.toLowerCase().includes('row-level security') ||
          error.message?.toLowerCase().includes('permission denied')
        ) {
          throw error
        }

        // Fallback: si select falla por RLS, intentar insert directo
        const { error: insertOnlyError } = await supabase
          .from('productos', { bypassFotoFilter: true })
          .insert([payload])

        if (insertOnlyError) throw insertOnlyError
        createdProduct = payload
      } else {
        createdProduct = data?.[0] || payload
      }

      emit('saved', { type: 'create', product: createdProduct })
    }
  } catch (err) {
    console.error('Error al guardar producto:', err)
    if (
      err.code === '42501' ||
      err.message?.toLowerCase().includes('row-level security') ||
      err.message?.toLowerCase().includes('permission denied')
    ) {
      errorMessage.value =
        'Error de permisos en Supabase (RLS 42501).\nTu usuario administrador no tiene políticas de RLS habilitadas para INSERT/UPDATE en la tabla "productos". Debes ejecutar el script SQL de permisos RLS en el SQL Editor de Supabase.'
    } else {
      errorMessage.value = err.message || 'Ocurrió un error al guardar el producto.'
    }
    formRef.value?.scrollTo({ top: 0, behavior: 'smooth' })
  } finally {
    isSaving.value = false
  }
}
</script>
