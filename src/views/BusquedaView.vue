<template>
  <div class="min-h-screen bg-white py-8 md:py-12 font-sans">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Breadcrumb de navegación -->
      <nav aria-label="Migas de pan" class="mb-6 flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-500 flex-wrap">
        <RouterLink to="/" class="hover:text-power-secondary transition-colors font-medium">
          Inicio
        </RouterLink>
        <svg class="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>

        <RouterLink to="/tienda" class="hover:text-power-secondary transition-colors font-medium">
          Tienda
        </RouterLink>
        <svg class="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>

        <span class="text-gray-800 font-semibold truncate max-w-[200px] md:max-w-[400px]">
          Búsqueda: "{{ searchQuery }}"
        </span>
      </nav>

      <!-- Encabezado de la página de resultados -->
      <div class="mb-6">
        <h1 class="text-xl md:text-2xl font-bold text-power-primary">
          Resultados para: <span class="text-power-accent">"{{ searchQuery }}"</span>
        </h1>
        <div class="w-full h-px bg-blue-500 mt-2"></div>
      </div>

      <!-- Barra superior: Contador de productos y selector de ordenamiento -->
      <div class="flex items-center justify-between gap-3 mb-6">
        <p class="text-sm text-gray-500">
          {{ sortedProducts.length }} {{ sortedProducts.length === 1 ? 'producto encontrado' : 'productos encontrados' }}
        </p>

        <select
          v-if="sortedProducts.length > 0"
          v-model="selectedOrder"
          class="border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-600 outline-none focus:border-power-primary"
        >
          <option value="default">Relevancia</option>
          <option value="price-asc">Más barato</option>
          <option value="price-desc">Más caro</option>
          <option value="name-asc">Nombre A-Z</option>
          <option value="name-desc">Nombre Z-A</option>
        </select>
      </div>

      <!-- Estado de carga (Skeleton) -->
      <div
        v-if="loading"
        class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
      >
        <div
          v-for="i in 8"
          :key="i"
          class="bg-gray-100 rounded-2xl h-72 animate-pulse"
        ></div>
      </div>

      <!-- Cuadrícula de productos encontrados -->
      <div
        v-else-if="sortedProducts.length > 0"
        class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
      >
        <ProductoCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <!-- Paginación cuando hay muchos resultados -->
      <div
        v-if="!loading && totalPages > 1"
        class="flex items-center justify-center gap-2 mt-10"
      >
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Anterior
        </button>

        <template v-for="(page, idx) in visiblePages" :key="idx">
          <span v-if="page === '...'" class="px-2 py-2 text-gray-400 text-sm select-none">
            ...
          </span>
          <button
            v-else
            @click="goToPage(page)"
            class="px-3 py-2 rounded-lg border text-sm transition-colors"
            :class="
              currentPage === page
                ? 'bg-power-primary text-white border-power-primary'
                : 'border-gray-200 text-gray-600 hover:bg-gray-50'
            "
          >
            {{ page }}
          </button>
        </template>

        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Siguiente
        </button>
      </div>

      <!-- Estado cuando no hay resultados -->
      <div
        v-else-if="!loading && sortedProducts.length === 0"
        class="bg-gray-50 border border-gray-100 rounded-2xl p-10 md:p-16 text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-gray-300 mx-auto mb-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"
          />
        </svg>
        <p class="text-base font-semibold text-gray-800 mb-1">
          No encontramos productos para "{{ searchQuery }}"
        </p>
        <p class="text-sm text-gray-500 mb-6">
          Intenta buscar con palabras más generales o revisa nuestro catálogo completo.
        </p>
        <RouterLink
          to="/tienda"
          class="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-2.5 rounded-xl bg-power-primary hover:bg-power-secondary transition-colors"
        >
          Ver todos los productos
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { supabase } from '../supabase'
import ProductoCard from '@/components/Inicio/ProductoCard.vue'

const route = useRoute()

const searchQuery = computed(() => (route.query.q || '').toString().trim())
const allProducts = ref([])
const loading = ref(true)

const selectedOrder = ref('default')
const currentPage = ref(1)
const itemsPerPage = 12

/**
 * Normaliza cualquier texto: minúsculas y sin acentos ni diacríticos
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
 * Carga los productos de la base de datos agrupando variantes
 */
const getProducts = async () => {
  loading.value = true
  try {
    const { data, error } = await supabase
      .from('productos')
      .select('id, name, price, image, category, department, description, parent_sku, sku')

    if (error) throw error

    // Agrupar variantes para evitar tarjetas duplicadas
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
  } catch (err) {
    console.error('Error al cargar productos en vista de búsqueda:', err)
  } finally {
    loading.value = false
  }
}

/**
 * Búsqueda inteligente: coincide con nombre, categoría, departamento y descripción,
 * soportando palabras con o sin acento y ordenando por relevancia.
 */
const filteredProducts = computed(() => {
  const query = normalize(searchQuery.value)
  if (!query) return allProducts.value

  const terms = query.split(/\s+/).filter(Boolean)

  return allProducts.value
    .map((product) => {
      const normName = normalize(product.name)
      const normCat = normalize(product.category)
      const normDept = normalize(product.department)
      const normDesc = normalize(product.description)
      const fullText = `${normName} ${normCat} ${normDept} ${normDesc}`

      // Debe coincidir cada una de las palabras buscadas
      const matchesAllTerms = terms.every((term) => fullText.includes(term))
      if (!matchesAllTerms) return null

      // Cálculo de relevancia
      let score = 0
      if (normName === query) score += 100
      else if (normName.startsWith(query)) score += 60
      else if (normName.includes(query)) score += 40

      terms.forEach((term) => {
        if (normName.includes(term)) score += 20
        if (normCat.includes(term)) score += 10
        if (normDept.includes(term)) score += 5
        if (normDesc.includes(term)) score += 3 // Coincidencia en descripción
      })

      return { product, score }
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.product)
})

/**
 * Ordena los productos según la opción elegida
 */
const sortedProducts = computed(() => {
  const list = [...filteredProducts.value]

  if (selectedOrder.value === 'price-asc') {
    return list.sort((a, b) => Number(a.price) - Number(b.price))
  }
  if (selectedOrder.value === 'price-desc') {
    return list.sort((a, b) => Number(b.price) - Number(a.price))
  }
  if (selectedOrder.value === 'name-asc') {
    return list.sort((a, b) => a.name.localeCompare(b.name))
  }
  if (selectedOrder.value === 'name-desc') {
    return list.sort((a, b) => b.name.localeCompare(a.name))
  }

  return list
})

/**
 * Paginación de productos
 */
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sortedProducts.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(sortedProducts.value.length / itemsPerPage)
})

const visiblePages = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  const delta = 1
  const pages = []

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
    return pages
  }

  let rangeStart = Math.max(2, current - delta)
  let rangeEnd = Math.min(total - 1, current + delta)

  if (current <= 3) rangeEnd = 4
  else if (current >= total - 2) rangeStart = total - 3

  pages.push(1)
  if (rangeStart > 2) pages.push('...')
  for (let i = rangeStart; i <= rangeEnd; i++) pages.push(i)
  if (rangeEnd < total - 1) pages.push('...')
  pages.push(total)

  return pages
})

const goToPage = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Resetear a página 1 si cambia la búsqueda
watch(
  () => route.query.q,
  () => {
    currentPage.value = 1
  },
)

onMounted(() => {
  getProducts()
})
</script>
