<template>
  <!-- ref="sectionRef": Referencia al inicio del catálogo para centrar la pantalla aquí al cambiar de página (ver scrollToProducts) -->
  <section ref="sectionRef" class="py-10">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="mb-6">
        <h2 class="text-xl md:text-2xl font-bold text-power-primary">
          Productos por <span class="text-power-accent">categoría</span>
        </h2>
        <div class="w-full h-px bg-blue-500 mt-2"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div>
          <div class="flex items-center justify-between gap-3 mb-5">
            <p class="text-sm text-gray-500">{{ sortedProducts.length }} productos encontrados</p>

            <select
              v-model="selectedOrder"
              class="border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-600 outline-none focus:border-power-primary"
            >
              <option value="default">Ordenar</option>
              <option value="price-asc">Más barato</option>
              <option value="price-desc">Más caro</option>
              <option value="name-asc">Nombre A-Z</option>
              <option value="name-desc">Nombre Z-A</option>
            </select>
          </div>

          <div
            v-if="sortedProducts.length > 0"
            class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
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
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
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
