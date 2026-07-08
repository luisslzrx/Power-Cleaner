<template>
  <section class="py-10">
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
              <span
                v-if="page === '...'"
                class="px-2 py-2 text-gray-400 text-sm select-none"
              >
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

        <aside class="lg:order-last order-first">
          <div class="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm sticky top-24">
            <h3 class="text-sm font-bold text-gray-800 mb-4">Filtrar productos</h3>

            <div class="mb-5">
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                Departamento
              </p>

              <div class="flex flex-col gap-2">
                <button
                  class="text-left text-sm px-3 py-2 rounded-xl transition-colors"
                  :class="
                    selectedDepartment === 'all'
                      ? 'bg-power-primary text-white font-semibold'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  "
                  @click="clearDepartment"
                >
                  Todos
                </button>

                <button
                  v-for="department in departments"
                  :key="department"
                  class="text-left text-sm px-3 py-2 rounded-xl transition-colors"
                  :class="
                    selectedDepartment === department
                      ? 'bg-power-primary text-white font-semibold'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  "
                  @click="selectDepartment(department)"
                >
                  {{ department }}
                </button>
              </div>
            </div>

            <div>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Categoría</p>

              <div class="flex flex-col gap-2">
                <button
                  class="text-left text-sm px-3 py-2 rounded-xl transition-colors"
                  :class="
                    selectedCategory === 'all'
                      ? 'bg-power-primary text-white font-semibold'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  "
                  @click="clearCategory"
                >
                  Todas
                </button>

                <button
                  v-for="category in availableCategories"
                  :key="category"
                  class="text-left text-sm px-3 py-2 rounded-xl transition-colors"
                  :class="
                    selectedCategory === category
                      ? 'bg-power-primary text-white font-semibold'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  "
                  @click="selectCategory(category)"
                >
                  {{ category }}
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '../../supabase'
import ProductoCard from '@/components/Inicio/ProductoCard.vue'

const route = useRoute()
const router = useRouter()

const products = ref([])

const selectedDepartment = ref(route.query.department || 'all')
const selectedCategory = ref(route.query.category || 'all')
const selectedOrder = ref('default')
const currentPage = ref(1)
const itemsPerPage = 12

const getProducts = async () => {
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error al cargar productos:', error)
    return
  }

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

const departments = computed(() => {
  return [...new Set(products.value.map((product) => product.department).filter(Boolean))]
})

const categories = computed(() => {
  return [...new Set(products.value.map((product) => product.category).filter(Boolean))]
})

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

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchDepartment =
      selectedDepartment.value === 'all' || product.department === selectedDepartment.value

    const matchCategory =
      selectedCategory.value === 'all' || product.category === selectedCategory.value

    return matchDepartment && matchCategory
  })
})

const sortedProducts = computed(() => {
  const sorted = [...filteredProducts.value]

  if (selectedOrder.value === 'price-asc') {
    return sorted.sort((a, b) => Number(a.price) - Number(b.price))
  }

  if (selectedOrder.value === 'price-desc') {
    return sorted.sort((a, b) => Number(b.price) - Number(a.price))
  }

  if (selectedOrder.value === 'name-asc') {
    return sorted.sort((a, b) => a.name.localeCompare(b.name))
  }

  if (selectedOrder.value === 'name-desc') {
    return sorted.sort((a, b) => b.name.localeCompare(a.name))
  }

  return sorted
})

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

const selectDepartment = (department) => {
  selectedDepartment.value = department
  selectedCategory.value = 'all'
}

const selectCategory = (category) => {
  selectedCategory.value = category
}

const clearDepartment = () => {
  selectedDepartment.value = 'all'
  selectedCategory.value = 'all'
}

const clearCategory = () => {
  selectedCategory.value = 'all'
}

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

watch(
  () => route.query,
  (query) => {
    selectedDepartment.value = query.department || 'all'
    selectedCategory.value = query.category || 'all'
    currentPage.value = 1
  },
)

watch([selectedDepartment, selectedCategory], () => {
  currentPage.value = 1
})

onMounted(() => {
  getProducts()
})
</script>
