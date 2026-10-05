<template>
  <div
    ref="searchContainer"
    :class="isMobile ? 'relative w-full' : 'relative flex-1 mx-4 md:mx-8 hidden md:block'"
  >
    <!-- Formulario de búsqueda -->
    <form
      class="flex flex-1 items-center rounded-lg overflow-hidden bg-white/[0.06] border border-white/10 px-4 py-2.5 gap-3 hover:border-white/20 transition-colors"
      @submit.prevent="searchProduct"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 text-white/40 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"
        />
      </svg>

      <input
        ref="searchInput"
        v-model="search"
        type="text"
        placeholder="Buscar productos de limpieza..."
        class="bg-transparent outline-none text-sm text-white placeholder:text-white/40 flex-1 w-full"
        @input="handleInput"
        @focus="handleFocus"
      />

      <!-- Botón para limpiar búsqueda rápida -->
      <button
        v-if="search"
        type="button"
        class="text-white/40 hover:text-white text-xs px-1 transition-colors"
        @click="clearSearch"
      >
        ✕
      </button>
    </form>

    <!-- Menú flotante de resultados -->
    <div
      v-if="search.trim() && results.length > 0"
      class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-[380px] overflow-y-auto"
    >
      <button
        v-for="product in results"
        :key="product.id"
        class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left transition-colors border-b border-gray-50 last:border-b-0"
        @click="goToProduct(product.id)"
      >
        <img
          :src="product.image || '/src/assets/images/productos.webp'"
          :alt="product.name"
          class="w-10 h-10 rounded-lg object-contain bg-gray-50 flex-shrink-0"
        />

        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-gray-800 truncate">
            {{ product.name }}
          </p>
          <p class="text-xs text-gray-400 truncate">
            {{ product.category || product.department || 'Producto' }}
          </p>
        </div>

        <span class="text-sm font-bold text-gray-900 flex-shrink-0"> ${{ product.price }} </span>
      </button>

      <!-- Ver todos los resultados en la vista de búsqueda -->
      <button
        type="button"
        class="w-full py-2.5 px-4 bg-gray-50 hover:bg-gray-100 text-xs font-semibold text-power-secondary text-center transition-colors border-t border-gray-100 flex items-center justify-center gap-1.5"
        @click="searchProduct"
      >
        <span>Ver todos los resultados para "{{ search }}"</span>
        <span>→</span>
      </button>
    </div>

    <!-- Mensaje cuando no hay resultados -->
    <div
      v-if="search.trim() && results.length === 0 && !loading"
      class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50 text-center"
    >
      <p class="text-sm text-gray-500">No se encontraron productos para "{{ search }}".</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../supabase'

const props = defineProps({
  // Permite reutilizar el buscador en la barra desplegable móvil
  isMobile: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['navigate'])

const router = useRouter()

const search = ref('')
const results = ref([])
const searchContainer = ref(null)
const searchInput = ref(null)
const allProducts = ref([])
const loading = ref(false)

/**
 * Normaliza cualquier texto:
 * 1. Lo pasa a minúsculas
 * 2. Descompone y elimina acentos/tildes (á->a, é->e, í->i, ó->o, ú->u, ü->u)
 * Permite buscar indistintamente con o sin acento ("líquido" o "liquido")
 */
const normalize = (text) => {
  return (text || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

/**
 * Carga todos los productos de la base de datos una sola vez en memoria (caché).
 * Agrupa variantes por parent_sku para no saturar el buscador con duplicados del mismo producto.
 */
const loadProducts = async () => {
  if (allProducts.value.length > 0 || loading.value) return
  loading.value = true

  try {
    const { data, error } = await supabase
      .from('productos')
      .select('id, name, price, image, category, department, description, parent_sku, sku')

    if (error) throw error

    // Agrupamos variantes por parent_sku o sku para mostrar el producto principal
    const grouped = Object.values(
      (data || []).reduce((acc, product) => {
        const key = product.parent_sku || product.sku || product.id
        if (!acc[key]) {
          acc[key] = product
        }
        if (Number(product.price) < Number(acc[key].price)) {
          acc[key] = product
        }
        return acc
      }, {}),
    )

    allProducts.value = grouped
  } catch (error) {
    console.error('Error al cargar catálogo de productos para buscador:', error)
  } finally {
    loading.value = false
  }
}

/**
 * Búsqueda inteligente:
 * - Coincide con nombre, categoría, departamento Y descripción.
 * - Soporta palabras múltiples sin importar el orden (ej. "cloro multiusos").
 * - Sin importar acentos/tildes.
 * - Ordena los resultados por relevancia (coincidencias en el título primero).
 */
const executeSearch = () => {
  const query = normalize(search.value)
  if (!query) {
    results.value = []
    return
  }

  // Dividir por espacios para permitir buscar varias palabras clave
  const terms = query.split(/\s+/).filter(Boolean)

  const matches = allProducts.value
    .map((product) => {
      const normName = normalize(product.name)
      const normCat = normalize(product.category)
      const normDept = normalize(product.department)
      const normDesc = normalize(product.description)
      const fullText = `${normName} ${normCat} ${normDept} ${normDesc}`

      // Verificar que cada palabra buscada esté en alguna parte del producto (título, descripción, etc.)
      const matchesAllTerms = terms.every((term) => fullText.includes(term))
      if (!matchesAllTerms) return null

      // Puntuación de relevancia:
      // Coincidencias en nombre tienen mayor peso que en categoría o descripción
      let score = 0
      if (normName === query) score += 100
      else if (normName.startsWith(query)) score += 60
      else if (normName.includes(query)) score += 40

      terms.forEach((term) => {
        if (normName.includes(term)) score += 20
        if (normCat.includes(term)) score += 10
        if (normDept.includes(term)) score += 5
        if (normDesc.includes(term)) score += 3 // Coincidencia en la descripción
      })

      return { product, score }
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6) // Mostrar los 6 resultados más relevantes
    .map((item) => item.product)

  results.value = matches
}

const handleInput = async () => {
  if (allProducts.value.length === 0) {
    await loadProducts()
  }
  executeSearch()
}

const handleFocus = async () => {
  if (allProducts.value.length === 0) {
    await loadProducts()
  }
  if (search.value.trim()) {
    executeSearch()
  }
}

const clearSearch = () => {
  search.value = ''
  results.value = []
}

const goToProduct = (id) => {
  search.value = ''
  results.value = []
  emit('navigate')
  router.push(`/producto/${id}`)
}

/**
 * Al enviar la búsqueda (Enter o clic en 'Ver todos los resultados'):
 * Navega a la vista de resultados /buscar?q=...
 */
const searchProduct = () => {
  if (search.value.trim()) {
    const q = search.value.trim()
    search.value = ''
    results.value = []
    emit('navigate')
    router.push({
      path: '/buscar',
      query: { q },
    })
  }
}

const handleClickOutside = (event) => {
  if (searchContainer.value && !searchContainer.value.contains(event.target)) {
    results.value = []
  }
}

onMounted(() => {
  loadProducts()
  document.addEventListener('click', handleClickOutside)
  if (props.isMobile && searchInput.value) {
    searchInput.value.focus()
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
