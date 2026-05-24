<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Lo más vendido en <span class="text-power-accent">Power Cleaner</span>
        </h2>
        <a
          href="#"
          class="flex items-center gap-1 text-xs md:text-sm text-gray-500 hover:text-teal-500 transition-colors"
        >
          Ver más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 md:w-4 md:h-4"
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
      <div class="w-full h-px bg-blue-500 mb-4 md:mb-6"></div>

      <!-- Products grid/carrusel -->
      <div
        class="flex md:grid md:grid-cols-5 gap-3 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        <!-- Limitamos a los primeros 5 productos usando .slice(0, 5) -->
        <ProductoCard
          v-for="product in products.slice(0, 5)"
          :key="product.id"
          :product="product"
          class="snap-start shrink-0 w-[calc(50%-6px)] md:w-full"
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

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
