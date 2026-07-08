<template>
  <section v-if="similarProducts.length > 0" class="w-full py-12 font-sans">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Title row -->
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-lg md:text-xl font-semibold text-power-primary">
          Productos <span class="text-power-accent">similares</span>
        </h2>
      </div>

      <!-- Underline -->
      <div class="w-full h-px bg-blue-500 mb-6"></div>

      <!-- Products grid / mobile scrollable carrousel -->
      <div
        class="flex md:grid md:grid-cols-5 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        <ProductoCard
          v-for="product in similarProducts"
          :key="product.id"
          :product="product"
          class="snap-start shrink-0 w-[calc(60%-8px)] sm:w-[calc(45%-8px)] md:w-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { supabase } from '../../supabase'
import ProductoCard from '@/components/Inicio/ProductoCard.vue'

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  currentProductId: {
    type: [Number, String],
    required: true,
  },
})

const similarProducts = ref([])

const getSimilarProducts = async () => {
  if (!props.category) {
    similarProducts.value = []
    return
  }

  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .eq('category', props.category)
    .neq('id', props.currentProductId)

  if (error) {
    console.error('Error al cargar productos similares:', error)
    return
  }

  // Agrupamos las variantes por parent_sku o sku o id
  // y nos quedamos con la versión más barata, idéntico a Tienda/Productos.vue
  const groupedProducts = Object.values(
    (data || []).reduce((acc, product) => {
      const key = product.parent_sku || product.sku || product.id

      if (!acc[key]) {
        acc[key] = product
      }

      if (Number(product.price) < Number(acc[key].price)) {
        acc[key] = product
      }

      return acc
    }, {}),
  )

  // Mostramos máximo 4 productos similares
  similarProducts.value = groupedProducts.slice(0, 5)
}

onMounted(() => {
  getSimilarProducts()
})

// Volvemos a consultar si cambia la categoría o el ID del producto actual
watch(
  () => [props.category, props.currentProductId],
  () => {
    getSimilarProducts()
  },
)
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
