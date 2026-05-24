<template>
  <router-link
    :to="`/producto/${product.id}`"
    class="relative rounded-2xl overflow-hidden flex flex-col cursor-pointer mb-4 transition-all hover:-translate-y-1"
    style="background: #fff; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08)"
  >
    <!-- Imagen superior con fondo degradado azul marino -->
    <div class="relative flex items-center justify-center h-56 bg-gray-100">
      <!-- Wishlist button -->
      <div
        class="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center"
        style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(6px)"
        @click.stop.prevent
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>

      <!-- Badge descuento -->
      <div
        v-if="product.discount"
        class="absolute top-3 left-3 z-10 text-white text-xs font-bold px-2.5 py-1 rounded-lg leading-tight text-center"
        style="background: #b91c1c"
      >
        {{ product.discount }} OFF
      </div>

      <!-- Imagen del producto -->
      <img :src="product.image" :alt="product.name" class="h-44 object-contain" />
    </div>

    <!-- Info inferior -->
    <div class="flex flex-col gap-2.5 px-4 pt-4 pb-4 bg-white">
      <!-- Nombre -->
      <p class="text-sm font-bold text-gray-900 leading-snug">{{ product.name }}</p>

      <!-- Tags estáticos -->
      <div class="flex items-center gap-2">
        <span
          class="text-xs font-medium text-gray-500 border border-gray-200 rounded-md px-2 py-0.5"
        >
          500ml
        </span>
        <span
          class="text-xs font-medium text-gray-500 border border-gray-200 rounded-md px-2 py-0.5 uppercase"
        >
          Multiusos
        </span>
      </div>

      <!-- Descripción corta -->
      <p v-if="product.description" class="text-xs text-gray-400 leading-relaxed line-clamp-2">
        {{ product.description }}
      </p>

      <!-- Precio + botón -->
      <div class="flex items-end justify-between mt-0.5">
        <!-- Precio -->
        <div>
          <p
            class="text-xs font-semibold text-gray-400 uppercase tracking-widest leading-none mb-1"
          >
            Precio
          </p>
          <div class="flex items-baseline gap-1.5">
            <span class="text-lg font-extrabold text-power-color">${{ product.price }}</span>
            <span v-if="product.original_price" class="text-xs text-gray-400 line-through"
              >${{ product.original_price }}</span
            >
          </div>
          <p v-if="product.savings" class="text-xs text-green-500 font-medium mt-0.5">
            Ahorras ${{ product.savings }}
          </p>
        </div>

        <!-- Botón -->
        <button
          class="text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all hover:opacity-90 flex items-center gap-1.5 bg-power-secondary"
          @click.stop.prevent="addToCart(product)"
        >
          <img
            src="/src/assets/icons/cart.svg"
            alt="Añadir al carrito"
            class="w-4 h-4 flex-shrink-0 brightness-0 invert"
          />
          Añadir
        </button>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { useCarrito } from '../../stores/carrito.js'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { addToCart } = useCarrito()
</script>
