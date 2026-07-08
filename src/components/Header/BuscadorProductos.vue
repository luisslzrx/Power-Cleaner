<template>
  <div ref="searchContainer" class="relative flex-1 mx-4 md:mx-8">
    <form
      class="hidden md:flex flex-1 items-center rounded-lg overflow-hidden bg-white/[0.06] border border-white/10 px-4 py-2.5 gap-3 hover:border-white/20 transition-colors"
      @submit.prevent="searchProduct"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 text-white/30 flex-shrink-0"
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
        v-model="search"
        type="text"
        placeholder="Buscar productos de limpieza..."
        class="bg-transparent outline-none text-sm text-white placeholder:text-white/30 flex-1"
        @input="getResults"
      />
    </form>

    <div
      v-if="search && results.length > 0"
      class="hidden md:block absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
    >
      <button
        v-for="product in results"
        :key="product.id"
        class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left transition-colors"
        @click="goToProduct(product.id)"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-10 h-10 rounded-lg object-contain bg-gray-50"
        />

        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-gray-800 truncate">
            {{ product.name }}
          </p>
          <p class="text-xs text-gray-400 truncate">
            {{ product.category || 'Producto' }}
          </p>
        </div>

        <span class="text-sm font-bold text-gray-900"> ${{ product.price }} </span>
      </button>
    </div>

    <div
      v-if="search && results.length === 0"
      class="hidden md:block absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50"
    >
      <p class="text-sm text-gray-500">No se encontraron productos.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../supabase'

const router = useRouter()

const search = ref('')
const results = ref([])
const searchContainer = ref(null)

let debounceTimer = null

const getResults = () => {
  clearTimeout(debounceTimer)

  debounceTimer = setTimeout(async () => {
    if (!search.value.trim()) {
      results.value = []
      return
    }

    const { data, error } = await supabase
      .from('productos')
      .select('id, name, price, image, category, department')
      .or(
        `name.ilike.%${search.value}%,category.ilike.%${search.value}%,department.ilike.%${search.value}%`,
      )
      .limit(6)

    if (error) {
      console.error(error)
      results.value = []
      return
    }

    results.value = data || []
  }, 300)
}

const goToProduct = (id) => {
  search.value = ''
  results.value = []
  router.push(`/producto/${id}`)
}

const searchProduct = () => {
  if (results.value.length > 0) {
    goToProduct(results.value[0].id)
  }
}

const handleClickOutside = (event) => {
  if (searchContainer.value && !searchContainer.value.contains(event.target)) {
    results.value = []
  }
}

onMounted(() => {
  getResults()

  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
