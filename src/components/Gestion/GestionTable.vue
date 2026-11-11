<template>
  <div class="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden font-sans">
    <!-- Barra superior de búsqueda, filtros y acción -->
    <div class="p-4 sm:p-6 border-b border-slate-200/80 bg-white">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <!-- Búsqueda rápida -->
        <div class="relative flex-1 max-w-md">
          <span
            class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar por nombre, SKU, departamento..."
            class="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all bg-slate-50/50 focus:bg-white"
          />
          <button
            v-if="searchQuery"
            type="button"
            @click="searchQuery = ''"
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <!-- Botón Nuevo Producto -->
        <div class="flex items-center gap-3">
          <button
            type="button"
            @click="handleAddClick"
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-power-accent hover:bg-power-accent/90 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer w-full sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span>Agregar Producto</span>
          </button>
        </div>
      </div>

      <!-- Filtros avanzados y ordenamiento -->
      <div
        class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-4 pt-4 border-t border-slate-100"
      >
        <!-- Filtro Departamento -->
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Departamento
          </label>
          <select
            v-model="selectedDepartment"
            class="w-full py-2 px-3 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white outline-none focus:border-power-primary"
          >
            <option value="">Todos ({{ departments.length }})</option>
            <option v-for="dept in departments" :key="dept" :value="dept">
              {{ dept }}
            </option>
          </select>
        </div>

        <!-- Filtro Categoría -->
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Categoría
          </label>
          <select
            v-model="selectedCategory"
            class="w-full py-2 px-3 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white outline-none focus:border-power-primary"
          >
            <option value="">Todas ({{ availableCategories.length }})</option>
            <option v-for="cat in availableCategories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>

        <!-- Filtro Imagen -->
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Imagen
          </label>
          <select
            v-model="selectedImageFilter"
            class="w-full py-2 px-3 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white outline-none focus:border-power-primary"
          >
            <option value="all">Todas</option>
            <option value="with">Con fotografía</option>
            <option value="without">Sin fotografía</option>
          </select>
        </div>

        <!-- Ordenamiento -->
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Ordenar por
          </label>
          <select
            v-model="sortBy"
            class="w-full py-2 px-3 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white outline-none focus:border-power-primary"
          >
            <option value="id_desc">Más recientes (ID)</option>
            <option value="id_asc">Más antiguos (ID)</option>
            <option value="name_asc">Nombre: A → Z</option>
            <option value="name_desc">Nombre: Z → A</option>
            <option value="price_asc">Precio: Menor a Mayor</option>
            <option value="price_desc">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Indicador de carga -->
    <div
      v-if="loading"
      class="py-16 flex flex-col items-center justify-center text-slate-400 gap-3"
    >
      <svg
        class="animate-spin h-8 w-8 text-power-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span class="text-xs text-slate-500 font-medium">Cargando catálogo de productos...</span>
    </div>

    <!-- Sin resultados -->
    <div v-else-if="filteredProducts.length === 0" class="py-16 text-center px-4">
      <div
        class="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>
      <h3 class="text-sm font-bold text-slate-800 mb-1">No se encontraron productos</h3>
      <p class="text-xs text-slate-500 max-w-sm mx-auto mb-4">
        Ningún producto coincide con los filtros o término de búsqueda seleccionado.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          @click="resetFilters"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-power-primary bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          Limpiar filtros
        </button>
        <button
          type="button"
          @click="handleAddClick"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-power-accent hover:bg-power-accent/90 transition-colors cursor-pointer shadow-xs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span>Agregar Producto</span>
        </button>
      </div>
    </div>

    <!-- Contenido cuando hay productos -->
    <template v-else>
      <!-- Tabla en Pantallas Medianas y Grandes -->
      <div class="hidden md:block overflow-x-auto">
        <table class="w-full text-left text-sm border-collapse">
          <thead
            class="bg-slate-50/75 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider"
          >
            <tr>
              <th class="py-3.5 px-4 w-16">Foto</th>
              <th class="py-3.5 px-4">Producto</th>
              <th class="py-3.5 px-4">Departamento / Categoría</th>
              <th class="py-3.5 px-4">SKU</th>
              <th class="py-3.5 px-4 text-right">Precio</th>
              <th class="py-3.5 px-4 text-center w-32">Acciones</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr
              v-for="product in paginatedProducts"
              :key="product.id"
              class="hover:bg-blue-50/30 transition-colors group"
            >
              <!-- Foto -->
              <td class="py-3 px-4">
                <div
                  class="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 flex items-center justify-center shrink-0"
                >
                  <img
                    v-if="product.image"
                    :src="product.image"
                    :alt="product.name"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-slate-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </td>

              <!-- Nombre e ID -->
              <td class="py-3 px-4">
                <div class="flex flex-col">
                  <div class="flex items-center gap-2">
                    <span
                      class="text-xs font-bold text-slate-900 group-hover:text-power-primary transition-colors"
                    >
                      {{ product.name }}
                    </span>
                    <span
                      v-if="product.variant_name && product.variant_name !== 'Única'"
                      class="text-[10px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded"
                    >
                      {{ product.variant_name }}
                    </span>
                  </div>
                  <span class="text-[11px] text-slate-400 mt-0.5">ID: #{{ product.id }}</span>
                </div>
              </td>

              <!-- Departamento y Categoría -->
              <td class="py-3 px-4">
                <div class="flex flex-col gap-1 items-start">
                  <span
                    v-if="product.department"
                    class="text-[10px] font-semibold uppercase tracking-wider text-power-secondary bg-blue-50 px-2 py-0.5 rounded-md"
                  >
                    {{ product.department }}
                  </span>
                  <span v-if="product.category" class="text-xs text-slate-600 font-medium">
                    {{ product.category }}
                  </span>
                  <span
                    v-if="!product.department && !product.category"
                    class="text-xs text-slate-400 italic"
                  >
                    Sin clasificación
                  </span>
                </div>
              </td>

              <!-- SKU -->
              <td class="py-3 px-4">
                <div class="flex flex-col text-xs font-mono text-slate-600">
                  <span class="truncate max-w-[150px]">{{ product.sku || '—' }}</span>
                  <span
                    v-if="product.parent_sku && product.parent_sku !== product.sku"
                    class="text-[10px] text-slate-400 font-sans truncate max-w-[150px]"
                  >
                    Padre: {{ product.parent_sku }}
                  </span>
                </div>
              </td>

              <!-- Precio -->
              <td class="py-3 px-4 text-right">
                <span class="text-sm font-extrabold text-slate-900">
                  ${{ formatPrice(product.price) }}
                </span>
              </td>

              <!-- Acciones -->
              <td class="py-3 px-4">
                <div class="flex items-center justify-center gap-1.5">
                  <!-- Ver en tienda -->
                  <router-link
                    :to="`/producto/${product.id}`"
                    target="_blank"
                    class="p-2 rounded-lg text-slate-400 hover:text-power-secondary hover:bg-blue-50 transition-colors cursor-pointer"
                    title="Ver en la tienda"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </router-link>

                  <!-- Editar -->
                  <button
                    type="button"
                    @click="$emit('edit-product', product)"
                    class="p-2 rounded-lg text-slate-500 hover:text-power-primary hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Editar producto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
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
                  </button>

                  <!-- Eliminar -->
                  <button
                    type="button"
                    @click="$emit('delete-product', product)"
                    class="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                    title="Eliminar producto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Lista Tipo Tarjetas para Pantallas Móviles -->
      <div class="md:hidden divide-y divide-slate-100">
        <div v-for="product in paginatedProducts" :key="product.id" class="p-4 flex flex-col gap-3">
          <div class="flex items-start gap-3">
            <div
              class="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 flex items-center justify-center"
            >
              <img
                v-if="product.image"
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-slate-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-2">
                <span class="text-xs text-slate-400">#{{ product.id }}</span>
                <span class="text-sm font-extrabold text-slate-900"
                  >${{ formatPrice(product.price) }}</span
                >
              </div>
              <h4
                class="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2 mt-0.5"
              >
                {{ product.name }}
              </h4>
              <div class="flex items-center gap-1.5 mt-1 flex-wrap">
                <span
                  v-if="product.department"
                  class="text-[9px] font-semibold uppercase text-power-secondary bg-blue-50 px-1.5 py-0.5 rounded"
                >
                  {{ product.department }}
                </span>
                <span
                  v-if="product.category"
                  class="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded"
                >
                  {{ product.category }}
                </span>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-50 text-xs">
            <span class="text-[11px] font-mono text-slate-400 truncate max-w-[140px]">
              SKU: {{ product.sku || 'N/A' }}
            </span>

            <div class="flex items-center gap-1">
              <router-link
                :to="`/producto/${product.id}`"
                target="_blank"
                class="px-2.5 py-1.5 rounded-lg text-slate-500 bg-slate-100 text-xs font-semibold"
              >
                Ver
              </router-link>
              <button
                type="button"
                @click="$emit('edit-product', product)"
                class="px-2.5 py-1.5 rounded-lg text-power-primary bg-blue-50 text-xs font-semibold"
              >
                Editar
              </button>
              <button
                type="button"
                @click="$emit('delete-product', product)"
                class="px-2.5 py-1.5 rounded-lg text-red-600 bg-red-50 text-xs font-semibold"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Paginación y contador -->
    <div
      v-if="filteredProducts.length > 0"
      class="p-4 sm:px-6 py-3 border-t border-slate-200/80 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500"
    >
      <!-- Contador -->
      <div>
        Mostrando <strong class="text-slate-800">{{ paginationStart }}</strong> a
        <strong class="text-slate-800">{{ paginationEnd }}</strong> de
        <strong class="text-slate-800">{{ filteredProducts.length }}</strong> productos
        <span v-if="filteredProducts.length !== products.length">
          (filtrados de {{ products.length }} totales)
        </span>
      </div>

      <!-- Controles de navegación de página -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          :disabled="currentPage === 1"
          @click="currentPage--"
          class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed font-medium transition-colors cursor-pointer"
        >
          Anterior
        </button>

        <span class="font-bold text-slate-700 px-1">
          {{ currentPage }} / {{ totalPages || 1 }}
        </span>

        <button
          type="button"
          :disabled="currentPage >= totalPages"
          @click="currentPage++"
          class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed font-medium transition-colors cursor-pointer"
        >
          Siguiente
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['add-product', 'edit-product', 'delete-product'])

const handleAddClick = () => {
  emit('add-product')
}

// Filtros y búsqueda
const searchQuery = ref('')
const selectedDepartment = ref('')
const selectedCategory = ref('')
const selectedImageFilter = ref('all')
const sortBy = ref('id_desc')

// Paginación
const currentPage = ref(1)
const perPage = ref(20)

// Lista de departamentos únicos
const departments = computed(() => {
  return [...new Set(props.products.map((p) => p.department).filter(Boolean))].sort()
})

// Lista de categorías disponibles (opcionalmente filtradas por departamento)
const availableCategories = computed(() => {
  let list = props.products
  if (selectedDepartment.value) {
    list = list.filter((p) => p.department === selectedDepartment.value)
  }
  return [...new Set(list.map((p) => p.category).filter(Boolean))].sort()
})

// Resetear categoría si cambia el departamento
watch(selectedDepartment, () => {
  selectedCategory.value = ''
  currentPage.value = 1
})

watch([searchQuery, selectedCategory, selectedImageFilter, sortBy], () => {
  currentPage.value = 1
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedDepartment.value = ''
  selectedCategory.value = ''
  selectedImageFilter.value = 'all'
  sortBy.value = 'id_desc'
  currentPage.value = 1
}

// Productos filtrados y ordenados
const filteredProducts = computed(() => {
  let result = [...props.products]

  // Búsqueda de texto
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    result = result.filter((p) => {
      const name = (p.name || '').toLowerCase()
      const sku = (p.sku || '').toLowerCase()
      const dept = (p.department || '').toLowerCase()
      const cat = (p.category || '').toLowerCase()
      const desc = (p.description || '').toLowerCase()
      const id = String(p.id || '')
      return (
        name.includes(q) ||
        sku.includes(q) ||
        dept.includes(q) ||
        cat.includes(q) ||
        desc.includes(q) ||
        id === q
      )
    })
  }

  // Filtro por departamento
  if (selectedDepartment.value) {
    result = result.filter((p) => p.department === selectedDepartment.value)
  }

  // Filtro por categoría
  if (selectedCategory.value) {
    result = result.filter((p) => p.category === selectedCategory.value)
  }

  // Filtro por imagen
  if (selectedImageFilter.value === 'with') {
    result = result.filter((p) => p.image && p.image.trim() !== '')
  } else if (selectedImageFilter.value === 'without') {
    result = result.filter((p) => !p.image || p.image.trim() === '')
  }

  // Ordenamiento
  result.sort((a, b) => {
    switch (sortBy.value) {
      case 'id_asc':
        return Number(a.id) - Number(b.id)
      case 'id_desc':
        return Number(b.id) - Number(a.id)
      case 'name_asc':
        return (a.name || '').localeCompare(b.name || '')
      case 'name_desc':
        return (b.name || '').localeCompare(a.name || '')
      case 'price_asc':
        return Number(a.price || 0) - Number(b.price || 0)
      case 'price_desc':
        return Number(b.price || 0) - Number(a.price || 0)
      default:
        return Number(b.id) - Number(a.id)
    }
  })

  return result
})

// Paginación calculada
const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / perPage.value)
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return filteredProducts.value.slice(start, start + perPage.value)
})

const paginationStart = computed(() => {
  if (filteredProducts.value.length === 0) return 0
  return (currentPage.value - 1) * perPage.value + 1
})

const paginationEnd = computed(() => {
  return Math.min(currentPage.value * perPage.value, filteredProducts.value.length)
})

const formatPrice = (val) => {
  if (val === undefined || val === null || isNaN(Number(val))) return '0.00'
  return Number(val).toLocaleString('es-MX', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
</script>
