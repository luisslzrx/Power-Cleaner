<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Nuestros Productos <span class="text-power-accent">Destacados</span>
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
        <!-- Productos destacados seleccionados -->
        <ProductoCard
          v-for="product in products"
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
// ⭐ CONFIGURACIÓN DE PRODUCTOS DESTACADOS:
// Coloca aquí los IDs de los 10 productos (o los que tú quieras) que deseas que aparezcan
// en la sección de Destacados. Se mostrarán exactamente en el orden en que los anotes aquí.
//
// Ejemplo: const DESTACADOS_IDS = [12, 5, 23, 40, 8, 19, 31, 15, 2, 7]
// =====================================================================================
const DESTACADOS_IDS = [
  // Reemplaza estos números con los IDs reales de tus 10 productos favoritos:
  869, 879, 811, 743, 731, 879, 203, 166, 12, 13,
]

const products = ref([])
const carouselRef = ref(null)

const getProducts = async () => {
  try {
    // Si el arreglo está vacío, carga los primeros 10 productos como respaldo
    if (!DESTACADOS_IDS || DESTACADOS_IDS.length === 0) {
      const { data, error } = await supabase.from('productos').select('*').limit(10)

      if (error) throw error
      products.value = data || []
      return
    }

    // Consultar a Supabase únicamente los productos cuyos IDs coincidan con la lista
    const { data, error } = await supabase.from('productos').select('*').in('id', DESTACADOS_IDS)

    if (error) throw error

    // Ordenar los productos resultantes para respetar el orden exacto del arreglo DESTACADOS_IDS
    const sorted = [...(data || [])].sort((a, b) => {
      const indexA = DESTACADOS_IDS.findIndex((id) => String(id) === String(a.id))
      const indexB = DESTACADOS_IDS.findIndex((id) => String(id) === String(b.id))
      return (indexA === -1 ? 9999 : indexA) - (indexB === -1 ? 9999 : indexB)
    })

    products.value = sorted
  } catch (err) {
    console.error('Error al cargar productos destacados por ID:', err)
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
