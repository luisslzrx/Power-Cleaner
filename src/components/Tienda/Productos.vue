<template>
  <!-- ref="sectionRef": Referencia al inicio del catálogo para centrar la pantalla aquí al cambiar de página (ver scrollToProducts) -->
  <section ref="sectionRef" id="catalogo-productos" class="py-10">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="mb-6">
        <h2 class="text-xl md:text-2xl font-bold text-power-primary">
          Productos por <span class="text-power-accent">categoría</span>
        </h2>
        <div class="w-full h-px bg-blue-500 mt-2"></div>
      </div>

      <!-- Barra superior de controles: Conteo, Filtros en móvil y Ordenamiento -->
      <div
        class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 bg-gray-50/80 p-3.5 sm:p-4 rounded-2xl border border-gray-100"
      >
        <!-- Izquierda: Botón de Filtros en móvil + Conteo de productos -->
        <div class="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
          <!-- Botón Filtros (visible solo en responsive < md) -->
          <button
            @click="isMobileFiltersOpen = true"
            class="md:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-power-primary text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-power-secondary transition-all active:scale-95"
            aria-label="Abrir filtros de productos"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-power-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <span>Filtros</span>
            <span
              v-if="activeFiltersCount > 0"
              class="ml-0.5 w-5 h-5 rounded-full bg-power-accent text-white text-[11px] font-extrabold flex items-center justify-center"
            >
              {{ activeFiltersCount }}
            </span>
          </button>

          <p class="text-xs sm:text-sm text-gray-500">
            <span class="font-bold text-gray-800">{{ sortedProducts.length }}</span> productos encontrados
          </p>
        </div>

        <!-- Derecha: Selector de Ordenamiento -->
        <div class="flex items-center justify-end gap-2 w-full sm:w-auto">
          <label class="hidden sm:inline text-xs text-gray-400 font-medium whitespace-nowrap">Ordenar por:</label>
          <select
            v-model="selectedOrder"
            class="w-full sm:w-auto border border-gray-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-gray-700 bg-white outline-none focus:border-power-primary shadow-sm cursor-pointer"
          >
            <option value="default">Relevancia</option>
            <option value="price-asc">Precio: Más barato</option>
            <option value="price-desc">Precio: Más caro</option>
            <option value="name-asc">Nombre: A - Z</option>
            <option value="name-desc">Nombre: Z - A</option>
          </select>
        </div>

        <!-- Chips de filtros activos en móvil -->
        <div
          v-if="activeFiltersCount > 0"
          class="w-full flex flex-wrap items-center gap-1.5 pt-2 border-t border-gray-200/60 md:hidden"
        >
          <span class="text-[11px] text-gray-400 font-semibold uppercase">Filtros activos:</span>

          <span
            v-if="selectedDepartment !== 'all'"
            class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-power-primary text-white shadow-xs"
          >
            {{ selectedDepartment }}
            <button @click="clearDepartment" class="hover:text-red-200">✕</button>
          </span>

          <span
            v-if="selectedCategory !== 'all'"
            class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-power-accent text-white shadow-xs"
          >
            {{ selectedCategory }}
            <button @click="clearCategory" class="hover:text-white/80">✕</button>
          </span>

          <button
            @click="clearAllFilters"
            class="text-xs text-gray-500 hover:text-power-accent underline ml-auto"
          >
            Limpiar filtros
          </button>
        </div>
      </div>

      <!-- Contenedor principal: Filtros del lado IZQUIERDO y Productos del lado DERECHO -->
      <div class="grid grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 items-start">
        <!-- Columna IZQUIERDA: Filtros (solo visible en pantallas md en adelante) -->
        <aside class="hidden md:block w-full">
          <Filtros
            :selected-department="selectedDepartment"
            :selected-category="selectedCategory"
            :departments="departments"
            :available-categories="availableCategories"
            @select-department="selectDepartment"
            @select-category="selectCategory"
            @clear-department="clearDepartment"
            @clear-category="clearCategory"
          />
        </aside>

        <!-- Columna DERECHA: Listado de Productos -->
        <div class="min-w-0 w-full">
          <!-- Cuadrícula responsive de productos -->
          <div
            v-if="sortedProducts.length > 0"
            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
          >
            <ProductoCard
              v-for="product in paginatedProducts"
              :key="product.id"
              :product="product"
            />
          </div>

          <!-- Paginación -->
          <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-8">
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

          <div
            v-else
            class="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center text-gray-500"
          >
            No hay productos con estos filtros.
          </div>
        </div>
      </div>
    </div>

    <!-- Drawer / Modal Móvil de Filtros -->
    <Teleport to="body">
      <div
        v-if="isMobileFiltersOpen"
        class="fixed inset-0 z-50 flex md:hidden"
        role="dialog"
        aria-modal="true"
      >
        <!-- Backdrop oscuro -->
        <div
          class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          @click="isMobileFiltersOpen = false"
        ></div>

        <!-- Panel lateral deslizable desde la izquierda -->
        <div
          class="relative w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col z-10 animate-fade-in-right"
        >
          <!-- Header del drawer móvil -->
          <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white">
            <div class="flex items-center gap-2">
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
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <h3 class="font-bold text-gray-900 text-base">Filtros y Categorías</h3>
            </div>
            <button
              class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
              aria-label="Cerrar filtros"
              @click="isMobileFiltersOpen = false"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Contenido scrolleable con el componente de filtros -->
          <div class="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <Filtros
              :selected-department="selectedDepartment"
              :selected-category="selectedCategory"
              :departments="departments"
              :available-categories="availableCategories"
              @select-department="selectDepartment"
              @select-category="selectCategory"
              @clear-department="clearDepartment"
              @clear-category="clearCategory"
            />
          </div>

          <!-- Footer con botón para aplicar y cerrar -->
          <div class="p-4 border-t border-gray-100 bg-gray-50 flex gap-2">
            <button
              v-if="activeFiltersCount > 0"
              @click="clearAllFilters"
              class="px-4 py-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Limpiar
            </button>
            <button
              @click="isMobileFiltersOpen = false"
              class="flex-1 bg-power-primary hover:bg-power-secondary text-white font-bold py-3 rounded-xl transition-all shadow-md text-sm flex items-center justify-center gap-1.5"
            >
              <span>Ver {{ sortedProducts.length }} productos</span>
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '../../supabase'
import ProductoCard from '@/components/Inicio/ProductoCard.vue'
import Filtros from './Filtros.vue'

// Instancias de rutas y router para interactuar con los parámetros query de la URL
const route = useRoute()
const router = useRouter()

// Listado reactivo de todos los productos cargados desde la base de datos
const products = ref([])

// Estados reactivos de filtrado, ordenamiento y paginación
const selectedDepartment = ref(route.query.department || 'all') // Departamento activo
const selectedCategory = ref(route.query.category || 'all') // Categoría activa
const selectedOrder = ref('default') // Criterio de ordenación por precio o nombre
const currentPage = ref(1) // Página actual visible en el paginador
const itemsPerPage = 12 // Límite de productos mostrados por página
const isMobileFiltersOpen = ref(false) // Control del drawer / modal de filtros en móvil

// Cantidad de filtros activos
const activeFiltersCount = computed(() => {
  let count = 0
  if (selectedDepartment.value && selectedDepartment.value !== 'all') count++
  if (selectedCategory.value && selectedCategory.value !== 'all') count++
  return count
})

// Bloquea el scroll del body cuando el drawer de filtros está abierto
watch(isMobileFiltersOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})

/**
 * Consulta a Supabase para cargar todos los productos de la tabla 'productos'.
 * Filtra agrupando variantes por SKU padre y selecciona como principal la variante de menor precio.
 */
const getProducts = async () => {
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error al cargar productos:', error)
    return
  }

  // Agrupar variantes por parent_sku o sku para evitar productos duplicados en tienda
  const groupedProducts = Object.values(
    (data || []).reduce((acc, product) => {
      const key = product.parent_sku || product.sku || product.id

      if (!acc[key]) {
        acc[key] = product
      }

      // Si hay variantes, muestra como principal la más barata
      if (Number(product.price) < Number(acc[key].price)) {
        acc[key] = product
      }

      return acc
    }, {}),
  )

  products.value = groupedProducts
}

/**
 * Propiedad computada: Obtiene el conjunto único de Departamentos a partir de los productos cargados.
 */
const departments = computed(() => {
  return [...new Set(products.value.map((product) => product.department).filter(Boolean))]
})

/**
 * Propiedad computada: Obtiene el conjunto único de Categorías a partir de los productos cargados.
 */
const categories = computed(() => {
  return [...new Set(products.value.map((product) => product.category).filter(Boolean))]
})

/**
 * Propiedad computada: Obtiene las categorías específicas asociadas al departamento seleccionado.
 * Si el departamento es "all" (Todos), devuelve todas las categorías disponibles.
 */
const availableCategories = computed(() => {
  if (selectedDepartment.value === 'all') {
    return categories.value
  }

  return [
    ...new Set(
      products.value
        .filter((product) => product.department === selectedDepartment.value)
        .map((product) => product.category)
        .filter(Boolean),
    ),
  ]
})

/**
 * Propiedad computada: Filtra los productos en base al Departamento y la Categoría seleccionados.
 */
const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchDepartment =
      selectedDepartment.value === 'all' || product.department === selectedDepartment.value

    const matchCategory =
      selectedCategory.value === 'all' || product.category === selectedCategory.value

    return matchDepartment && matchCategory
  })
})

/**
 * Propiedad computada: Ordena los productos filtrados según la opción elegida en el desplegable.
 */
const sortedProducts = computed(() => {
  const sorted = [...filteredProducts.value]

  if (selectedOrder.value === 'price-asc') {
    return sorted.sort((a, b) => Number(a.price) - Number(b.price)) // Menor a mayor precio
  }

  if (selectedOrder.value === 'price-desc') {
    return sorted.sort((a, b) => Number(b.price) - Number(a.price)) // Mayor a menor precio
  }

  if (selectedOrder.value === 'name-asc') {
    return sorted.sort((a, b) => a.name.localeCompare(b.name)) // Alfabético A-Z
  }

  if (selectedOrder.value === 'name-desc') {
    return sorted.sort((a, b) => b.name.localeCompare(a.name)) // Alfabético Z-A
  }

  return sorted
})

/**
 * Propiedad computada: Divide la lista ordenada de productos según la página actual de paginación.
 */
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sortedProducts.value.slice(start, end)
})

/**
 * Propiedad computada: Retorna la cantidad total de páginas necesarias.
 */
const totalPages = computed(() => {
  return Math.ceil(sortedProducts.value.length / itemsPerPage)
})

/**
 * Propiedad computada: Calcula los botones numéricos de paginación visibles (incluyendo elipsis '...') de forma dinámica.
 */
const visiblePages = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  const delta = 1
  const pages = []

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
    return pages
  }

  let rangeStart = Math.max(2, current - delta)
  let rangeEnd = Math.min(total - 1, current + delta)

  if (current <= 3) {
    rangeEnd = 4
  } else if (current >= total - 2) {
    rangeStart = total - 3
  }

  pages.push(1)

  if (rangeStart > 2) {
    pages.push('...')
  }

  for (let i = rangeStart; i <= rangeEnd; i++) {
    pages.push(i)
  }

  if (rangeEnd < total - 1) {
    pages.push('...')
  }

  pages.push(total)

  return pages
})

/**
 * Sincroniza y actualiza la URL del navegador agregando los filtros de búsqueda activos como query parameters.
 */
const updateUrlFilters = () => {
  const query = {}

  if (selectedDepartment.value !== 'all') {
    query.department = selectedDepartment.value
  }

  if (selectedCategory.value !== 'all') {
    query.category = selectedCategory.value
  }

  router.replace({
    path: '/tienda',
    query,
  })
}

/**
 * Selecciona un departamento específico y limpia cualquier filtro de categoría activo.
 * NOTA: updateUrlFilters() sincroniza la URL con router.replace sin recargar la página.
 * Si deseas no actualizar la URL al cambiar de departamento, simplemente comenta esa línea.
 */
const selectDepartment = (department) => {
  selectedDepartment.value = department
  selectedCategory.value = 'all'
  updateUrlFilters()
}

/**
 * Selecciona una categoría específica.
 * NOTA: updateUrlFilters() guarda la categoría activa en la URL (?category=...).
 * Gracias a esto, si el usuario entra a un producto y da "Atrás", el filtro no se pierde.
 */
const selectCategory = (category) => {
  selectedCategory.value = category
  updateUrlFilters()
}

/**
 * Restablece los filtros de departamento y categoría a sus valores por defecto ('all').
 */
const clearDepartment = () => {
  selectedDepartment.value = 'all'
  selectedCategory.value = 'all'
  updateUrlFilters()
}

/**
 * Restablece el filtro de categoría activo manteniendo el departamento si lo hubiera.
 */
const clearCategory = () => {
  selectedCategory.value = 'all'
  updateUrlFilters()
}

/**
 * Restablece todos los filtros aplicados.
 */
const clearAllFilters = () => {
  selectedDepartment.value = 'all'
  selectedCategory.value = 'all'
  updateUrlFilters()
}

// =========================================================================================
// CONTROL DE DESPLAZAMIENTO (SCROLL) EN PAGINACIÓN
// =========================================================================================
// Referencia al elemento <section ref="sectionRef"> donde inicia el catálogo de productos.
const sectionRef = ref(null)

/**
 * Desplaza la pantalla suavemente al inicio de los productos.
 * CÓMO CAMBIARLO:
 * - Para que el salto sea instantáneo en lugar de animado: cambia behavior a 'auto'.
 * - Para que la pantalla no se mueva en absoluto: deja la función vacía {}.
 */
const scrollToProducts = () => {
  sectionRef.value?.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Navega a un número de página específico (ej. página 1, 2, 3...) y sube la vista al inicio de productos.
 */
const goToPage = (page) => {
  currentPage.value = page
  scrollToProducts()
}

/**
 * Avanza a la siguiente página del catálogo.
 */
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    scrollToProducts()
  }
}

/**
 * Retrocede a la página anterior del catálogo.
 */
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    scrollToProducts()
  }
}

// Observa cambios en el query string de la URL (ej. al dar click en el menú principal) para re-aplicar filtros
watch(
  () => route.query,
  (query) => {
    selectedDepartment.value = query.department || 'all'
    selectedCategory.value = query.category || 'all'
    currentPage.value = 1
  },
)

// Observa cambios en los filtros para regresar a la primera página automáticamente
watch([selectedDepartment, selectedCategory], () => {
  currentPage.value = 1
})

// Hook al montar el componente: Carga la lista inicial de productos de la base de datos
onMounted(() => {
  getProducts()
})
</script>
