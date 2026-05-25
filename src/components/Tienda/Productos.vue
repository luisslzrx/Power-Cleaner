<template>
  <section class="w-full bg-white py-6 md:py-10 font-sans min-h-screen">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Título y ordenamiento -->
      <div class="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900">Nuestra Tienda</h1>
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">Ordenar por:</label>
          <div class="relative">
            <select
              v-model="sortBy"
              class="px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 appearance-none cursor-pointer"
            >
              <option value="default">Relevancia</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="name-asc">Nombre: A-Z</option>
              <option value="name-desc">Nombre: Z-A</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="flex items-center justify-center py-20">
        <p class="text-gray-500">Cargando productos...</p>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="flex items-center justify-center py-20">
        <p class="text-red-500">{{ error }}</p>
      </div>

      <!-- Contenedor principal con filtros y productos -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
        <!-- Columna izquierda: Filtros -->
        <div class="lg:col-span-1 hidden lg:block">
          <div class="bg-gray-50 rounded-lg p-6 sticky top-4">
            <!-- Filtro de categorías -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Categorías</h3>
              <div class="space-y-2">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="w-4 h-4 text-red-600 rounded" />
                  <span class="text-sm text-gray-700">Limpieza de Hogar</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="w-4 h-4 text-red-600 rounded" />
                  <span class="text-sm text-gray-700">Limpieza Industrial</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="w-4 h-4 text-red-600 rounded" />
                  <span class="text-sm text-gray-700">Automotriz</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="w-4 h-4 text-red-600 rounded" />
                  <span class="text-sm text-gray-700">Desinfectantes</span>
                </label>
              </div>
            </div>

            <!-- Filtro de precios -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Precio</h3>
              <div class="space-y-4">
                <div>
                  <label class="text-sm text-gray-600 mb-1 block">Precio mínimo</label>
                  <input
                    v-model.number="priceMin"
                    type="number"
                    placeholder="0"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label class="text-sm text-gray-600 mb-1 block">Precio máximo</label>
                  <input
                    v-model.number="priceMax"
                    type="number"
                    placeholder="1000"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500"
                  />
                </div>
                <button
                  @click="applyPriceFilter"
                  class="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  Aplicar filtro
                </button>
                <button
                  @click="clearPriceFilter"
                  class="w-full bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors"
                >
                  Limpiar filtro
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna derecha: Grid de productos -->
        <div class="lg:col-span-3 col-span-1">
          <!-- Sin productos -->
          <div v-if="filteredProducts.length === 0" class="flex items-center justify-center py-20">
            <p class="text-gray-500">No hay productos disponibles</p>
          </div>

          <!-- Grid de productos -->
          <div v-else class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <ProductoCard
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { supabase } from '../../supabase'
import ProductoCard from '@/components/Inicio/ProductoCard.vue'

const products = ref([])
const loading = ref(true)
const error = ref(null)
const priceMin = ref(null)
const priceMax = ref(null)
const sortBy = ref('default')

const filteredProducts = computed(() => {
  let result = products.value

  console.log('SORT BY:', sortBy.value)
  console.log('PRODUCTS BEFORE SORT:', result.length)

  // Filtrar por precio
  if (priceMin.value || priceMax.value) {
    result = result.filter((product) => {
      const price = product.precio || 0
      const min = priceMin.value || 0
      const max = priceMax.value || Infinity

      return price >= min && price <= max
    })
  }

  // Ordenar
  if (sortBy.value === 'price-asc') {
    result = [...result].sort((a, b) => (a.precio || 0) - (b.precio || 0))
    console.log('ORDENADO POR PRECIO ASC')
  } else if (sortBy.value === 'price-desc') {
    result = [...result].sort((a, b) => (b.precio || 0) - (a.precio || 0))
    console.log('ORDENADO POR PRECIO DESC')
  } else if (sortBy.value === 'name-asc') {
    result = [...result].sort((a, b) => (a.nombre || '').localeCompare(b.nombre || ''))
    console.log('ORDENADO POR NOMBRE ASC')
  } else if (sortBy.value === 'name-desc') {
    result = [...result].sort((a, b) => (b.nombre || '').localeCompare(a.nombre || ''))
    console.log('ORDENADO POR NOMBRE DESC')
  }

  console.log('PRODUCTS AFTER SORT:', result.length)
  return result
})

const getProducts = async () => {
  const { data, error: fetchError } = await supabase.from('productos').select('*')

  console.log('DATA:', data)
  console.log('ERROR:', fetchError)

  if (data && data.length > 0) {
    console.log('PRIMER PRODUCTO:', data[0])
  }

  if (fetchError) {
    error.value = 'Error al cargar los productos'
    console.error(fetchError)
  } else {
    products.value = data || []
  }
  loading.value = false
}

const applyPriceFilter = () => {
  // El filtro se aplica automáticamente mediante computed property
  console.log('Filtro aplicado:', { min: priceMin.value, max: priceMax.value })
}

const clearPriceFilter = () => {
  priceMin.value = null
  priceMax.value = null
}

onMounted(() => {
  getProducts()
})
</script>
