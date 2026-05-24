<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const products = ref([])

const getProducts = async () => {
  const { data, error } = await supabase
    .from('productos')
    .select('*')

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

<template>
  <div>
    <h1>Productos</h1>

    <div v-if="products.length === 0">
      <p>No hay productos</p>
    </div>

    <div v-for="product in products" :key="product.id">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>${{ product.price }}</p>
      <img :src="product.image" width="150" />
    </div>
  </div>
</template>