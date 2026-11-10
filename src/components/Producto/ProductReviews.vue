<template>
  <section class="w-full py-10 md:py-14 font-sans bg-gray-50/60 border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Encabezado de la sección -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-2">
        <div>
          <span class="text-xs font-bold tracking-widest text-power-secondary uppercase">
            Experiencias de clientes
          </span>
          <h2 class="text-xl md:text-2xl font-bold text-power-primary mt-1">
            Opiniones del <span class="text-power-accent">producto</span>
          </h2>
        </div>

        <!-- Resumen rápido si hay opiniones -->
        <div v-if="reviews.length > 0" class="flex items-center gap-2">
          <div class="flex items-center gap-1">
            <svg
              v-for="i in 5"
              :key="i"
              class="w-4 h-4"
              :class="i <= Math.round(averageRating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.074 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.957z"
              />
            </svg>
          </div>
          <span class="text-sm font-extrabold text-gray-800">{{ averageRating }}</span>
          <span class="text-xs text-gray-400">({{ reviews.length }} {{ reviews.length === 1 ? 'opinión' : 'opiniones' }})</span>
        </div>
      </div>

      <!-- Línea divisoria decorativa -->
      <div class="w-full h-px bg-gradient-to-r from-blue-500 via-blue-400 to-transparent mb-8"></div>

      <!-- Contenedor principal: Formulario arriba / Opiniones debajo -->
      <div class="space-y-10">
        <!-- 1. Formulario para agregar una nueva opinión -->
        <div class="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-7 md:p-8 shadow-sm">
          <div class="max-w-3xl">
            <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-power-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Escribe tu opinión
            </h3>
            <p class="text-xs sm:text-sm text-gray-500 mb-6">
              Comparte tu experiencia con este producto para ayudar a otros clientes a tomar una mejor decisión.
            </p>

            <!-- Alerta de éxito con confirmación de estado pendiente -->
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div
                v-if="submitSuccess"
                class="mb-6 p-4 md:p-5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3.5 shadow-xs"
              >
                <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-sm font-bold text-emerald-900 mb-0.5">
                    ¡Gracias por tu opinión!
                  </h4>
                  <p class="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Tu comentario ha sido enviado exitosamente y <strong>está pendiente de aprobación</strong> por nuestro equipo antes de ser publicado.
                  </p>
                </div>
                <button
                  type="button"
                  @click="submitSuccess = false"
                  class="text-emerald-500 hover:text-emerald-700 transition-colors p-1"
                  title="Cerrar aviso"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </transition>

            <!-- Alerta de error -->
            <div
              v-if="submitError"
              class="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs sm:text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>{{ submitError }}</span>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-5">
              <!-- Calificación con estrellas interactivas -->
              <div>
                <label class="block text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                  Calificación <span class="text-red-500">*</span>
                </label>
                <div class="flex items-center gap-3">
                  <div class="flex items-center gap-1" @mouseleave="hoverRating = 0">
                    <button
                      v-for="star in 5"
                      :key="star"
                      type="button"
                      class="p-1 focus:outline-none transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                      :aria-label="`Calificar con ${star} estrellas`"
                      @mouseenter="hoverRating = star"
                      @click="rating = star"
                    >
                      <svg
                        class="w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-150"
                        :class="
                          (hoverRating || rating) >= star
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-200 fill-gray-200 hover:text-amber-200'
                        "
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.074 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.957z"
                        />
                      </svg>
                    </button>
                  </div>
                  <span class="text-xs sm:text-sm font-medium text-gray-500">
                    {{ ratingLabels[hoverRating || rating] || '' }}
                  </span>
                </div>
              </div>

              <!-- Nombre del usuario -->
              <div>
                <label for="reviewer_name" class="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Tu nombre <span class="text-red-500">*</span>
                </label>
                <input
                  id="reviewer_name"
                  v-model="reviewerName"
                  type="text"
                  required
                  placeholder="Ej. Juan Pérez"
                  class="w-full py-2.5 sm:py-3 px-3.5 sm:px-4 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 outline-none bg-white focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all"
                />
              </div>

              <!-- Comentario -->
              <div>
                <label for="comment" class="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Tu opinión <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="comment"
                  v-model="comment"
                  required
                  rows="4"
                  placeholder="¿Qué te pareció la calidad del producto, rendimiento y efectividad?"
                  class="w-full py-2.5 sm:py-3 px-3.5 sm:px-4 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 outline-none bg-white focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all resize-y"
                ></textarea>
              </div>

              <!-- Botón de publicar -->
              <div class="flex items-center justify-start pt-1">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-xl bg-power-accent hover:bg-power-accent/90 text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  <svg
                    v-if="isSubmitting"
                    class="animate-spin -ml-1 mr-1 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>{{ isSubmitting ? 'Publicando...' : 'Publicar opinión' }}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- 2. Lista de opiniones aprobadas (debajo del formulario) -->
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <h3 class="text-lg md:text-xl font-bold text-gray-900">
              Opiniones de clientes
              <span class="text-sm font-normal text-gray-500 ml-1">
                ({{ reviews.length }})
              </span>
            </h3>
          </div>

          <!-- Estado de carga -->
          <div v-if="isLoadingReviews" class="py-12 flex flex-col items-center justify-center text-gray-400 gap-3">
            <svg class="animate-spin h-7 w-7 text-power-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-xs text-gray-500">Cargando opiniones...</span>
          </div>

          <!-- Estado de error -->
          <div
            v-else-if="errorLoadingReviews"
            class="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 text-center"
          >
            {{ errorLoadingReviews }}
          </div>

          <!-- Estado vacío: sin opiniones aprobadas -->
          <div
            v-else-if="reviews.length === 0"
            class="bg-white rounded-2xl border border-gray-200/70 p-8 md:p-12 text-center flex flex-col items-center justify-center shadow-xs"
          >
            <div class="w-14 h-14 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h4 class="text-base font-bold text-gray-800 mb-1">
              Aún no hay opiniones aprobadas
            </h4>
            <p class="text-xs sm:text-sm text-gray-500 max-w-md">
              Sé la primera persona en compartir su experiencia usando el formulario superior.
            </p>
          </div>

          <!-- Cuadrícula / Lista de opiniones aprobadas -->
          <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div
              v-for="review in reviews"
              :key="review.id"
              class="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <!-- Encabezado de la tarjeta de opinión -->
                <div class="flex items-start justify-between gap-3 mb-3">
                  <div class="flex items-center gap-3">
                    <!-- Avatar con iniciales -->
                    <div
                      class="w-10 h-10 rounded-full bg-power-primary/10 text-power-primary font-bold text-sm flex items-center justify-center shrink-0 uppercase"
                    >
                      {{ getInitials(review.reviewer_name) }}
                    </div>

                    <div>
                      <h4 class="text-sm font-bold text-gray-900 leading-snug">
                        {{ review.reviewer_name }}
                      </h4>
                      <div class="flex items-center gap-1.5 mt-0.5">
                        <span class="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                          Opinión verificada
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Fecha de la opinión -->
                  <span class="text-[11px] text-gray-400 shrink-0">
                    {{ formatDate(review.created_at) }}
                  </span>
                </div>

                <!-- Estrellas de calificación -->
                <div class="flex items-center gap-1 mb-3">
                  <svg
                    v-for="s in 5"
                    :key="s"
                    class="w-4 h-4"
                    :class="s <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.074 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.957z"
                    />
                  </svg>
                  <span class="text-xs font-bold text-gray-600 ml-1.5">{{ review.rating }}.0</span>
                </div>

                <!-- Texto del comentario -->
                <p class="text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {{ review.comment }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { supabase } from '../../supabase'

const props = defineProps({
  productId: {
    type: [String, Number],
    required: true,
  },
})

// Estado de identificación del producto
const productKey = ref('')
const isLoadingKey = ref(false)

// Estado del formulario
const reviewerName = ref('')
const rating = ref(5)
const hoverRating = ref(0)
const comment = ref('')
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

// Estado de la lista de opiniones aprobadas
const reviews = ref([])
const isLoadingReviews = ref(false)
const errorLoadingReviews = ref(null)

// Etiquetas para las estrellas
const ratingLabels = {
  1: '1 de 5 - Muy insatisfecho',
  2: '2 de 5 - Insatisfecho',
  3: '3 de 5 - Regular',
  4: '4 de 5 - Bueno',
  5: '5 de 5 - ¡Excelente!',
}

// Promedio de calificación basado en opiniones aprobadas
const averageRating = computed(() => {
  if (reviews.value.length === 0) return '0.0'
  const total = reviews.value.reduce((acc, curr) => acc + (Number(curr.rating) || 0), 0)
  return (total / reviews.value.length).toFixed(1)
})

// Formato de iniciales para avatar
const getInitials = (name) => {
  if (!name) return 'U'
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

// Formato legible de fecha
const formatDate = (isoString) => {
  if (!isoString) return ''
  try {
    const date = new Date(isoString)
    return date.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return ''
  }
}

/**
 * Requerimiento 3:
 * Obtener el product_key desde la tabla product_registry,
 * relacionándolo con el id del producto actual mediante supabase_product_id.
 */
const resolveProductKey = async (currentId) => {
  if (!currentId) return null
  isLoadingKey.value = true

  try {
    const strId = String(currentId).trim()

    // 1. Consulta principal en product_registry por supabase_product_id
    const { data, error } = await supabase
      .from('product_registry')
      .select('product_key')
      .eq('supabase_product_id', strId)
      .maybeSingle()

    if (error) {
      console.warn('Consulta a product_registry:', error.message)
    }

    if (data?.product_key) {
      productKey.value = data.product_key
      return data.product_key
    }

    // 2. Si no encontró como texto y es numérico, intentar con número
    if (!isNaN(Number(strId))) {
      const { data: numData } = await supabase
        .from('product_registry')
        .select('product_key')
        .eq('supabase_product_id', Number(strId))
        .maybeSingle()

      if (numData?.product_key) {
        productKey.value = numData.product_key
        return numData.product_key
      }
    }

    // 3. Fallback controlado: si el producto no está en el registro, usamos el ID directo como key
    productKey.value = strId
    return productKey.value
  } catch (err) {
    console.error('Error al resolver product_key:', err)
    productKey.value = String(currentId)
    return productKey.value
  } finally {
    isLoadingKey.value = false
  }
}

/**
 * Requerimiento 4:
 * Mostrar únicamente las opiniones con status = 'approved',
 * incluyendo nombre, estrellas, comentario y fecha.
 */
const loadApprovedReviews = async () => {
  if (!productKey.value) {
    await resolveProductKey(props.productId)
  }

  if (!productKey.value) return

  isLoadingReviews.value = true
  errorLoadingReviews.value = null

  try {
    const { data, error } = await supabase
      .from('product_reviews')
      .select('id, product_key, reviewer_name, rating, comment, status, created_at')
      .eq('product_key', productKey.value)
      .eq('status', 'approved')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error al consultar product_reviews:', error)
      errorLoadingReviews.value = 'No fue posible cargar las opiniones.'
      reviews.value = []
      return
    }

    reviews.value = data || []
  } catch (err) {
    console.error('Error inesperado al cargar opiniones:', err)
    errorLoadingReviews.value = 'Ocurrió un error al cargar las opiniones.'
    reviews.value = []
  } finally {
    isLoadingReviews.value = false
  }
}

/**
 * Requerimientos 1, 2, 5 y 6:
 * - Formulario con nombre, calificación de 1 a 5 estrellas, comentario y botón.
 * - Guardar en product_reviews con: product_key, reviewer_name, rating, comment, status = 'pending'.
 * - Mensaje de confirmación indicando que está pendiente de aprobación.
 * - Envío seguro respetando RLS y sin exponer claves privadas.
 */
const handleSubmit = async () => {
  submitError.value = ''

  const trimmedName = reviewerName.value.trim()
  const trimmedComment = comment.value.trim()
  const numRating = Number(rating.value)

  if (!trimmedName) {
    submitError.value = 'Por favor ingresa tu nombre completo.'
    return
  }

  if (!numRating || numRating < 1 || numRating > 5) {
    submitError.value = 'Por favor selecciona una calificación entre 1 y 5 estrellas.'
    return
  }

  if (!trimmedComment) {
    submitError.value = 'Por favor escribe tu comentario u opinión sobre el producto.'
    return
  }

  let key = productKey.value
  if (!key) {
    key = await resolveProductKey(props.productId)
  }

  if (!key) {
    submitError.value = 'No se pudo vincular el producto. Por favor intenta recargar la página.'
    return
  }

  isSubmitting.value = true

  try {
    const payload = {
      product_key: key,
      reviewer_name: trimmedName,
      rating: numRating,
      comment: trimmedComment,
      status: 'pending',
    }

    const { error } = await supabase
      .from('product_reviews')
      .insert([payload])

    if (error) {
      console.error('Error al guardar opinión en product_reviews:', error)
      if (error.code === '42501') {
        submitError.value =
          'Permiso denegado (Error 42501). La tabla product_reviews en Supabase requiere habilitar la política RLS para permitir la inserción pública de opiniones.'
      } else {
        submitError.value = error.message || 'No se pudo publicar la opinión. Por favor intenta de nuevo.'
      }
      return
    }

    // Éxito: mostrar mensaje de confirmación
    submitSuccess.value = true
    comment.value = ''
    rating.value = 5
    hoverRating.value = 0

    // Si el usuario no está logueado, limpiamos también el nombre
    try {
      const { data: authData } = await supabase.auth.getUser()
      if (!authData?.user) {
        reviewerName.value = ''
      }
    } catch {
      // noop
    }
  } catch (err) {
    console.error('Error inesperado al enviar opinión:', err)
    submitError.value = 'Error al enviar la opinión. Revisa tu conexión a internet.'
  } finally {
    isSubmitting.value = false
  }
}

// Pre-llenar nombre si el usuario está autenticado
const checkAuthUser = async () => {
  try {
    const { data } = await supabase.auth.getUser()
    if (data?.user) {
      const name =
        data.user.user_metadata?.full_name ||
        data.user.user_metadata?.name ||
        data.user.email?.split('@')[0] ||
        ''
      if (name && !reviewerName.value) {
        reviewerName.value = name
      }
    }
  } catch {
    // Si no está autenticado, no hay problema
  }
}

// Carga inicial y reactividad ante cambio de producto
const initialize = async (id) => {
  submitSuccess.value = false
  submitError.value = ''
  reviews.value = []
  await resolveProductKey(id)
  await loadApprovedReviews()
}

onMounted(() => {
  checkAuthUser()
  if (props.productId) {
    initialize(props.productId)
  }
})

watch(
  () => props.productId,
  (newId) => {
    if (newId) {
      initialize(newId)
    }
  },
)
</script>

