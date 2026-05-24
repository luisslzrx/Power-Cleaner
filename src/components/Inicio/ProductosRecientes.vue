<template>
  <section>
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-xl font-semibold text-power-primary">
          Nuevas soluciones <span class="text-power-accent">de limpieza</span>
        </h2>
        <a
          href="#"
          class="flex items-center gap-1 text-sm text-gray-500 hover:text-teal-500 transition-colors"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <!-- Underline -->
      <div class="w-full h-px bg-blue-500 mb-6"></div>

      <!-- Products grid -->
      <div class="grid grid-cols-5 gap-6">
        <!-- Mostramos los últimos 5 productos usando .reverse().slice(0, 5) -->
        <ProductoCard
          v-for="product in products.slice().reverse().slice(0, 5)"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../../supabase'
import ProductoCard from './ProductoCard.vue'

const products = ref([])

const getProducts = async () => {
  const { data, error } = await supabase.from('productos').select('*')

  console.log('DATA:', data)
  console.log('ERROR:', error)

  if (error) {
    console.error(error)
  } else {
    products.value = data
  }
}

onMounted(() => {
  getProducts()
})
</script>
