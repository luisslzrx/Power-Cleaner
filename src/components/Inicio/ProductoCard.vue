<template>
  <router-link
    :to="`/producto/${product.id}`"
    class="relative rounded-2xl overflow-hidden flex flex-col cursor-pointer mb-4 transition-all hover:-translate-y-1"
    style="background: #fff; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08)"
  >
    <!-- Imagen superior con fondo degradado azul marino -->
    <div class="relative flex items-center justify-center h-44 md:h-56 bg-gray-100">
      <!-- Wishlist button -->
      <div
        class="absolute top-3 right-3 z-10 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center"
        style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(6px)"
        @click.stop.prevent
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-3.5 h-3.5 md:w-4 md:h-4 text-white"
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
        v-if="discount"
        class="absolute top-3 left-3 z-10 text-white text-xs font-bold px-2 md:px-2.5 py-1 rounded-lg leading-tight text-center"
        style="background: #b91c1c"
      >
        {{ discount }} OFF
      </div>

      <!-- Imagen del producto -->
      <img :src="image" :alt="name" class="h-full w-full object-cover" />
    </div>

    <!-- Info inferior -->
    <div
      class="flex flex-col justify-between gap-2 md:gap-2.5 px-3 md:px-4 pt-3 md:pt-4 pb-3 md:pb-4 bg-white flex-1"
    >
      <!-- Nombre -->
      <p class="text-xs md:text-sm font-bold text-gray-900 leading-snug">{{ name }}</p>

      <!-- Categoría -->
      <div v-if="category" class="flex items-center">
        <span
          class="text-xs font-medium text-gray-500 border border-gray-200 rounded-md px-1.5 md:px-2 py-0.5"
        >
          {{ category }}
        </span>
      </div>

      <!-- Descripción corta -->
      <p v-if="description" class="text-xs text-gray-400 leading-relaxed line-clamp-2">
        {{ description }}
      </p>

      <!-- Precio + botón -->
      <div class="flex items-end justify-between gap-2 md:gap-4 mt-0.5">
        <!-- Precio -->
        <div>
          <p
            class="text-xs font-semibold text-gray-400 uppercase tracking-widest leading-none mb-0.5 md:mb-1"
          >
            Precio
          </p>
          <div class="flex items-baseline gap-1 md:gap-1.5">
            <span class="text-base md:text-lg font-extrabold text-power-color">${{ price }}</span>
            <span v-if="originalPrice" class="text-xs text-gray-400 line-through"
              >${{ originalPrice }}</span
            >
          </div>
          <p v-if="savings" class="text-xs text-green-500 font-medium mt-0.5">
            Ahorras ${{ savings }}
          </p>
        </div>

        <!-- Botón -->
        <button
          class="text-white text-xs font-semibold px-3 md:px-4 py-2 rounded-lg transition-all hover:opacity-90 flex items-center gap-1 md:gap-1.5 bg-power-secondary flex-shrink-0"
          @click.stop.prevent="addToCart(product)"
        >
          <img
            src="/src/assets/icons/cart.svg"
            alt="Añadir al carrito"
            class="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 brightness-0 invert"
          />
          <span class="hidden md:inline">Añadir</span>
        </button>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { useCarrito } from '../../stores/carrito.js'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { addToCart } = useCarrito()

// Tu tabla de Supabase usa nombres en español (nombre, precio, etc.),
// pero esta tarjeta estaba leyendo campos en inglés que no existían
// (product.name, product.price...), por eso siempre se veían vacíos
// o como "$undefined" sin importar el producto.
//
// Dejo cada campo con un fallback al nombre en inglés por si en algún
// punto tu tabla sí usa esa variante para algo en particular. Si conoces
// el nombre exacto de cada columna en Supabase, puedes simplificar esto
// quitando el "||" y dejando solo el campo correcto.
const name = computed(() => props.product.nombre || props.product.name || '')
const price = computed(() => props.product.precio ?? props.product.price ?? 0)
const image = computed(() => props.product.imagen || props.product.image || '')
const description = computed(() => props.product.descripcion || props.product.description || '')
const category = computed(() => props.product.category || props.product.categoria || '')
const discount = computed(() => props.product.descuento || props.product.discount || null)
const originalPrice = computed(
  () => props.product.precio_original || props.product.original_price || null,
)
const savings = computed(() => props.product.ahorro || props.product.savings || null)
</script>
