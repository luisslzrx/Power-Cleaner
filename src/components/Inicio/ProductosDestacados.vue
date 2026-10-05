<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Lo más vendido en <span class="text-power-accent">Power Cleaner</span>
        </h2>

        <!-- Controls & Ver más -->
        <div class="flex items-center gap-4">
          <!-- Navigation arrows -->
          <div class="hidden md:flex items-center gap-1.5">
            <button
              @click="scrollLeft"
              class="w-7 h-7 rounded-full border border-gray-200 bg-white hover:border-power-accent hover:text-power-accent flex items-center justify-center text-gray-400 transition-all duration-300"
              aria-label="Desplazar a la izquierda"
            >
              <IconChevronLeft class="w-3.5 h-3.5" />
            </button>
            <button
              @click="scrollRight"
              class="w-7 h-7 rounded-full border border-gray-200 bg-white hover:border-power-accent hover:text-power-accent flex items-center justify-center text-gray-400 transition-all duration-300"
              aria-label="Desplazar a la derecha"
            >
              <IconChevronRight class="w-3.5 h-3.5" />
            </button>
          </div>

          <RouterLink
            to="/tienda"
            class="flex items-center gap-1 text-xs md:text-sm text-gray-500 hover:text-teal-500 transition-colors"
          >
            Ver más
            <IconChevronRight class="w-3 h-3 md:w-4 md:h-4 opacity-60" />
          </RouterLink>
        </div>
      </div>

      <!-- Underline -->
      <div class="w-full h-px bg-blue-500 mb-4 md:mb-6"></div>

      <!-- Products grid/carrusel -->
      <div
        ref="carouselRef"
        class="flex gap-3 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide py-1"
      >
        <!-- Limitamos a los primeros 10 productos usando .slice(0, 10) -->
        <ProductoCard
          v-for="product in products.slice(0, 10)"
          :key="product.id"
          :product="product"
          class="snap-start shrink-0 w-[calc(50%-6px)] md:w-[calc(20%-19.2px)]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../../supabase'
import ProductoCard from './ProductoCard.vue'
import { IconChevronLeft, IconChevronRight } from '@/components/Icons'

// =====================================================================================
// NOTA DE CONFIGURACIÓN PARA EL DESARROLLADOR:
// Puedes seleccionar qué categoría deseas mostrar en esta sección de "Destacados"
// cambiando el valor de 'selectedCategory' a continuación.
//
// Valores válidos (ejemplos): 'Trapeadores', 'Escobas', 'Detergentes', 'Aroma Ambiental', etc.
// Si deseas mostrar todos los productos sin filtrar por categoría, define el valor como null.
// =====================================================================================
const selectedCategory = ref('Trapeadores')

const products = ref([])
const carouselRef = ref(null)

const getProducts = async () => {
  let query = supabase.from('productos').select('*')

  // Aplicar filtro si se seleccionó una categoría específica
  if (selectedCategory.value) {
    query = query.eq('category', selectedCategory.value)
  }

  const { data, error } = await query

  console.log('DATA:', data)
  console.log('ERROR:', error)

  if (error) {
    console.error(error)
  } else {
    products.value = data || []
  }
}

const scrollLeft = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: -carouselRef.value.offsetWidth, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: carouselRef.value.offsetWidth, behavior: 'smooth' })
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
