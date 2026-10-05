<template>
  <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
    <h1 class="text-xl font-bold text-gray-800 mb-6">Mis favoritos</h1>

    <!-- No Favorites State -->
    <div v-if="favorites.length === 0" class="py-12 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-12 h-12 text-gray-300 mx-auto mb-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <h3 class="text-sm font-bold text-gray-700">No tienes favoritos aún</h3>
      <p class="text-xs text-gray-500 mt-1 mb-4">
        Guarda los productos que más te gusten presionando el botón de corazón.
      </p>
      <router-link to="/tienda" class="inline-block text-xs font-semibold text-power-primary hover:underline">
        Explorar productos
      </router-link>
    </div>

    <!-- Favorites Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ProductoCard v-for="product in favorites" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { useFavorites } from '../../stores/favoritos.js'
import ProductoCard from '@/components/Inicio/ProductoCard.vue'

const { favorites } = useFavorites()
</script>
