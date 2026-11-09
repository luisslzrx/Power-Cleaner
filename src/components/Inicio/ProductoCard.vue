<template>
  <router-link
    :to="`/producto/${product.id}`"
    class="relative rounded-2xl overflow-hidden flex flex-col cursor-pointer mb-4 transition-all hover:-translate-y-1"
    style="background: #fff; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08)"
  >
    <!-- Imagen superior con fondo degradado azul marino -->
    <div class="relative flex items-center justify-center h-44 md:h-56 bg-gray-100">
      <!-- Wishlist button -->
      <button
        class="absolute top-3 right-3 z-10 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        style="
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(6px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        "
        @click.stop.prevent="toggleFavorite(product)"
      >
        <IconHeart
          class="w-4 h-4 transition-colors duration-200"
          :class="
            isFavorite(product.id)
              ? 'text-red-500 fill-current'
              : 'text-gray-400 hover:text-red-500'
          "
        />
      </button>

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

        <!-- Botón Consultar disponibilidad -->
        <button
          class="text-white text-xs font-semibold px-2.5 md:px-3 py-1.5 md:py-2 rounded-lg transition-all hover:opacity-90 flex items-center gap-1 md:gap-1.5 bg-[#25D366] hover:bg-[#128C7E] flex-shrink-0 shadow-sm"
          title="Consultar disponibilidad por WhatsApp"
          @click.stop.prevent="consultarDisponibilidad"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
          <span class="text-xs">Consultar</span>
        </button>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { useFavorites } from '../../stores/favoritos.js'
import { IconHeart } from '@/components/Icons'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { isFavorite, toggleFavorite } = useFavorites()

const WHATSAPP_PHONE = '5213122454500'

const consultarDisponibilidad = () => {
  const productName = name.value || 'este producto'
  const text = `Hola, me gustaría consultar la disponibilidad del producto: *${productName}*`
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}

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
