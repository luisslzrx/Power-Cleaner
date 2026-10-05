<template>
  <section class="w-full bg-white py-6 md:py-10 font-sans">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Breadcrumbs / Migas de pan de navegación -->
      <nav
        aria-label="Migas de pan"
        class="mb-5 md:mb-7 flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-500 flex-wrap"
      >
        <RouterLink to="/" class="hover:text-power-secondary transition-colors font-medium">
          Inicio
        </RouterLink>

        <svg
          class="w-3 h-3 text-gray-400 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>

        <RouterLink to="/tienda" class="hover:text-power-secondary transition-colors font-medium">
          Tienda
        </RouterLink>

        <!-- Departamento (si está disponible en los datos del producto) -->
        <template v-if="productDepartment">
          <svg
            class="w-3 h-3 text-gray-400 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <RouterLink
            :to="{ path: '/tienda', query: { department: productDepartment } }"
            class="hover:text-power-secondary transition-colors font-medium"
          >
            {{ productDepartment }}
          </RouterLink>
        </template>

        <!-- Categoría (si está disponible en los datos del producto) -->
        <template v-if="productCategory">
          <svg
            class="w-3 h-3 text-gray-400 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <RouterLink
            :to="{
              path: '/tienda',
              query: {
                ...(productDepartment ? { department: productDepartment } : {}),
                category: productCategory,
              },
            }"
            class="hover:text-power-secondary transition-colors font-medium"
          >
            {{ productCategory }}
          </RouterLink>
        </template>

        <svg
          class="w-3 h-3 text-gray-400 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>

        <span
          class="text-gray-800 font-semibold truncate max-w-[180px] sm:max-w-[280px] md:max-w-[400px]"
        >
          {{ productName }}
        </span>
      </nav>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-start">
        <!-- LEFT: Galería -->
        <div class="flex flex-col">
          <!-- Imagen principal -->
          <div
            class="relative rounded-2xl bg-blue-50 flex items-center justify-center overflow-hidden cursor-pointer"
            style="min-height: 500px md:min-height: 600px"
            @click="openImageModal"
          >
            <img :src="productImage" :alt="productName" class="object-cover h-full w-full" />
          </div>
        </div>

        <!-- Modal de imagen en grande -->
        <div
          v-if="isImageModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          @click="closeImageModal"
        >
          <img
            :src="productImage"
            :alt="productName"
            class="max-w-full max-h-full object-contain"
            @click.stop
          />
        </div>

        <!-- RIGHT: Info -->
        <div class="flex flex-col gap-3.5 md:gap-4 pt-2">
          <!-- 1. Título + badge variante -->
          <div class="flex items-start justify-between gap-3 md:gap-4">
            <h1 class="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
              {{ productName }}
            </h1>
            <span
              class="flex-shrink-0 text-xs md:text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2 md:px-3 py-1 rounded-lg"
            >
              {{ selectedVariant?.variant_name || 'Estándar' }}
            </span>
          </div>

          <!-- 2. Categoría -->
          <div v-if="productCategory" class="flex items-center">
            <RouterLink
              :to="{
                path: '/tienda',
                query: {
                  ...(productDepartment ? { department: productDepartment } : {}),
                  category: productCategory,
                },
              }"
              class="inline-flex items-center text-xs font-semibold text-power-secondary bg-blue-50 hover:bg-blue-100 border border-blue-200/70 rounded-md px-2.5 py-1 transition-colors"
            >
              {{ productCategory }}
            </RouterLink>
          </div>

          <!-- 3. Estrellas -->
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-0.5">
              <img
                v-for="s in 5"
                :key="s"
                src="/src/assets/icons/star.svg"
                alt="★"
                class="w-4 h-4"
              />
            </div>
            <span class="text-sm font-bold text-gray-700">4.5</span>
          </div>

          <!-- Precio -->
          <div class="flex items-baseline gap-1">
            <span class="text-xl md:text-2xl text-gray-500 font-light">$</span>
            <span class="text-3xl md:text-4xl font-extrabold text-gray-900">{{
              productPrice
            }}</span>
          </div>

          <!-- Variantes -->
          <div v-if="hasVariants" class="flex flex-col gap-2">
            <p class="text-sm font-semibold text-gray-700">
              Presentación:
              <span class="text-power-primary">
                {{ selectedVariant?.variant_name }}
              </span>
            </p>

            <div class="flex flex-wrap gap-2">
              <button
                v-for="variant in variants"
                :key="variant.id"
                class="px-4 py-2 rounded-xl border text-sm font-semibold transition-all"
                :class="
                  selectedVariant?.id === variant.id
                    ? 'bg-power-primary text-white border-power-primary'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-power-primary'
                "
                @click="selectVariant(variant)"
              >
                {{ variant.variant_name }}
              </button>
            </div>
          </div>

          <!-- Features list -->
          <ul class="flex flex-col gap-2.5">
            <li class="flex items-center gap-2.5 text-sm text-gray-600">
              <img
                src="/src/assets/icons/check-circle-blue.svg"
                alt="✓"
                class="w-5 h-5 flex-shrink-0"
              />
              Alta Calidad
            </li>
            <li class="flex items-center gap-2.5 text-sm text-gray-600">
              <img
                src="/src/assets/icons/check-circle-blue.svg"
                alt="✓"
                class="w-5 h-5 flex-shrink-0"
              />
              Chat con nosotros 24 horas
            </li>
            <li class="flex items-center gap-2.5 text-sm text-gray-600">
              <img
                src="/src/assets/icons/check-circle-blue.svg"
                alt="✓"
                class="w-5 h-5 flex-shrink-0"
              />
              Viene con empaque incluido
            </li>
            <li class="flex items-center gap-2.5 text-sm text-gray-600">
              <img
                src="/src/assets/icons/check-circle-blue.svg"
                alt="✓"
                class="w-5 h-5 flex-shrink-0"
              />
              Envío seguro
            </li>
          </ul>

          <!-- Avatares + vendidos -->
          <div class="flex items-center gap-2">
            <!-- Avatares apilados -->
            <div class="flex items-center -space-x-2">
              <div
                class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style="background: #f97316"
              >
                A
              </div>
              <div
                class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style="background: #3b82f6"
              >
                B
              </div>
              <div
                class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style="background: #10b981"
              >
                C
              </div>
              <div
                class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style="background: #8b5cf6"
              >
                D
              </div>
              <div
                class="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                style="background: #ec4899"
              >
                E
              </div>
            </div>
            <p class="text-sm text-gray-700">
              <span class="font-bold text-gray-900">1,241</span>
              vendidos en las últimas 24 horas
            </p>
          </div>

          <!-- Descripción del producto -->
          <div>
            <h2 class="text-lg font-semibold text-gray-700 mb-2">Descripción</h2>
            <p class="text-gray-600 leading-relaxed">{{ productDescription }}</p>
          </div>

          <!-- Botones CTA -->
          <div class="flex flex-col md:flex-row items-center gap-3 mt-1">
            <button
              @click="handleBuyNow"
              class="flex-1 text-white text-sm font-bold py-3 px-4 md:px-6 rounded-xl transition-all hover:opacity-90"
              style="background: #1d4e89"
            >
              Comprar ahora
            </button>
            <button
              @click="handleAddToCart"
              class="flex-1 text-blue-600 text-sm font-semibold py-3 px-4 md:px-6 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 transition-all"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { supabase } from '../../supabase'
import { useCarrito } from '../../stores/carrito.js'
import { createCheckout } from '../../services/checkout'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
})

const emit = defineEmits(['loaded'])

const productName = ref('Cargando...')
const productPrice = ref('Cargando...')
const productImage = ref('Cargando...')
const productDescription = ref('Cargando...')
const product = ref(null)

// Departamentos y categorías computadas para las migas de pan (breadcrumbs)
const productDepartment = computed(
  () => product.value?.department || product.value?.departamento || '',
)
const productCategory = computed(() => product.value?.category || product.value?.categoria || '')

const variants = ref([])
const selectedVariant = ref(null)

const isImageModalOpen = ref(false)

const { addToCart } = useCarrito()

const hasVariants = computed(() => {
  return variants.value.length > 1
})

const openImageModal = () => {
  isImageModalOpen.value = true
}

const closeImageModal = () => {
  isImageModalOpen.value = false
}

const updateProductDisplay = (variant) => {
  selectedVariant.value = variant
  product.value = variant

  productName.value = variant.name ?? 'No encontrado'
  productPrice.value = variant.price ?? 'No disponible'
  productImage.value = variant.image || '/src/assets/images/productos.webp'
  productDescription.value = variant.description ?? 'Sin descripción disponible'

  emit('loaded', variant)
}

const selectVariant = (variant) => {
  updateProductDisplay(variant)
}

const buildCartItem = () => {
  const item = selectedVariant.value || product.value

  const variantName =
    item.variant_name && item.variant_name !== 'Única' ? ` ${item.variant_name}` : ''

  return {
    ...item,
    name: `${item.name}${variantName}`,
    price: Number(item.price),
    image: item.image || productImage.value,
  }
}

const handleAddToCart = () => {
  if (!product.value) return
  addToCart(buildCartItem())
}

const handleBuyNow = async () => {
  if (!product.value) return

  try {
    const item = {
      ...buildCartItem(),
      quantity: 1,
    }

    const url = await createCheckout([item])
    window.location.href = url
  } catch (error) {
    console.error(error)
    alert('Error al iniciar el pago')
  }
}

const loadProduct = async (productId) => {
  const { data, error } = await supabase.from('productos').select('*').eq('id', productId).single()

  if (error) {
    productName.value = 'Error al cargar'
    productPrice.value = 'Error al cargar'
    productImage.value = 'Error al cargar'
    productDescription.value = 'Error al cargar'
    emit('loaded', null)
    return
  }

  const parentSku = data.parent_sku || data.sku

  const { data: variantsData, error: variantsError } = await supabase
    .from('productos')
    .select('*')
    .eq('parent_sku', parentSku)
    .order('price', { ascending: true })

  if (variantsError) {
    console.error('Error al cargar variantes:', variantsError)
    updateProductDisplay(data)
    return
  }

  variants.value = variantsData || []

  const currentVariant =
    variants.value.find((variant) => Number(variant.id) === Number(productId)) ||
    variants.value[0] ||
    data

  updateProductDisplay(currentVariant)
}

onMounted(() => {
  loadProduct(props.id)
})

watch(
  () => props.id,
  (newId) => {
    if (newId) {
      loadProduct(newId)
    }
  },
)
</script>
