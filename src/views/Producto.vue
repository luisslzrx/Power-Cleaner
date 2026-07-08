<template>
  <div>
    <CaracteristicasProducto :id="route.params.id" @loaded="handleLoaded" />

    <ProductosSimilares
      v-if="productCategory"
      :category="productCategory"
      :current-product-id="route.params.id"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CaracteristicasProducto from '@/components/Producto/CaracteristicasProducto.vue'
import ProductosSimilares from '@/components/Producto/ProductosSimilares.vue'

const route = useRoute()
const productCategory = ref('')

const handleLoaded = (product) => {
  productCategory.value = product?.category || product?.categoria || ''
}

// Reset category when route ID changes to hide similar products while loading the new one
watch(
  () => route.params.id,
  () => {
    productCategory.value = ''
  },
)
</script>
