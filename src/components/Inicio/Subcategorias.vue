<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Header row -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-2xl font-semibold text-power-primary">
          Todo en limpieza en <span class="text-power-accent">un solo lugar</span>
        </h2>

        <!-- Controls & Ver más -->
        <div class="flex items-center gap-4">
          <!-- Navigation arrows for desktop -->
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
            class="flex items-center gap-1 text-xs md:text-sm text-gray-500 hover:text-power-secondary transition-colors"
          >
            Ver más
            <IconChevronRight class="w-3 h-3 md:w-4 md:h-4 opacity-60" />
          </RouterLink>
        </div>
      </div>

      <!-- Underline -->
      <div class="w-full h-px bg-blue-500 mb-4 md:mb-8"></div>

      <!-- Categories row/carrusel -->
      <div
        ref="carouselRef"
        class="flex gap-3 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide py-2"
      >
        <!-- Skeleton loaders if loading -->
        <template v-if="loading">
          <div
            v-for="i in 15"
            :key="'skeleton-' + i"
            class="flex flex-col items-center gap-2 md:gap-3 shrink-0 w-[calc(33.333%-6px)] md:w-44 snap-start animate-pulse"
          >
            <div class="w-24 h-24 md:w-44 md:h-44 rounded-full bg-gray-200"></div>
            <div class="h-3 w-16 md:w-24 bg-gray-200 rounded"></div>
          </div>
        </template>

        <!-- Categories rendered dynamically -->
        <template v-else>
          <RouterLink
            v-for="(category, index) in categories"
            :key="category.id"
            :to="{
              path: '/tienda',
              query: {
                department: getStoreDepartmentName(category.department),
                category: getStoreCategoryName(category.name),
              },
            }"
            class="flex flex-col items-center gap-2 md:gap-3 cursor-pointer group shrink-0 w-[calc(33.333%-6px)] md:w-44 snap-start"
          >
            <div
              class="w-24 h-24 md:w-44 md:h-44 rounded-full bg-gray-100 border-2 border-transparent group-hover:border-power-secondary flex items-center justify-center overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_24px_rgba(12,30,74,0.12)]"
            >
              <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
              />
            </div>
            <span
              class="text-[10px] md:text-sm text-gray-700 font-medium group-hover:text-power-secondary transition-colors text-center line-clamp-2 px-1"
            >
              {{ category.name }}
            </span>
          </RouterLink>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase'
import { RouterLink } from 'vue-router'
import { IconChevronLeft, IconChevronRight } from '@/components/Icons'

const categories = ref([])
const loading = ref(true)
const carouselRef = ref(null)

// Standardizes category names to match values in the 'productos' table
const getStoreCategoryName = (categoryName) => {
  if (!categoryName) return 'all'
  const name = categoryName.trim()
  const mapping = {
    'Kits Emprendedores': 'Kit de paquetes',
    'Paquetes Emprendedores': 'Kit de paquetes',
    Shampoo: 'Shampoo Automotriz',
    Aromatizantes: 'Aroma Ambiental',
  }
  return mapping[name] || name
}

// Cleans up department names (removes newlines, normalizes spaces) to match values in the 'productos' table
const getStoreDepartmentName = (deptName) => {
  if (!deptName) return 'all'
  return deptName.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
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

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('id, name, department, image')
      .order('id', { ascending: true })
      .limit(15)

    if (error) throw error
    categories.value = data || []
  } catch (error) {
    console.error('Error al cargar categorías:', error)
  } finally {
    loading.value = false
  }
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
