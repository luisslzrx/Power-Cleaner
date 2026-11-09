<template>
  <div v-if="isOpen">
    <!-- Backdrop -->
    <div
      class="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity"
      @click="closeCarrito"
    ></div>

    <!-- Cart panel -->
    <div class="fixed top-0 right-0 h-full w-96 bg-white z-50 flex flex-col shadow-2xl">
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-power-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 class="text-base font-bold text-gray-800">Mi Carrito</h2>
          <span
            class="text-xs font-semibold bg-power-primary text-white rounded-full px-2 py-0.5"
            >{{ items.length }}</span
          >
        </div>
        <button
          class="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          @click="closeCarrito"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Items list -->
      <div class="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
        <!-- Mensaje cuando el carrito está vacío -->
        <div
          v-if="items.length === 0"
          class="flex flex-col items-center justify-center py-12 text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p class="text-sm font-medium">Tu carrito está vacío</p>
          <p class="text-xs mt-1">Añade productos para empezar</p>
        </div>

        <!-- Productos dinámicos -->
        <div
          v-for="(item, index) in items"
          :key="item.id"
          class="flex items-start gap-3 pb-4 border-b border-gray-100"
          :class="{ 'border-b-0': index === items.length - 1 }"
        >
          <div
            class="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden"
          >
            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">{{ item.name }}</p>
            <p class="text-xs text-gray-400 mt-0.5">
              {{ item.description || 'Producto de limpieza' }}
            </p>
            <div class="flex items-center justify-between mt-2">
              <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button
                  class="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors text-sm font-bold"
                  @click="updateQuantity(item.id, item.quantity - 1)"
                >
                  −
                </button>
                <span
                  class="w-7 h-7 flex items-center justify-center text-sm font-semibold text-gray-800 border-x border-gray-200"
                  >{{ item.quantity }}</span
                >
                <button
                  class="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors text-sm font-bold"
                  @click="updateQuantity(item.id, item.quantity + 1)"
                >
                  +
                </button>
              </div>
              <span class="text-sm font-bold text-gray-900"
                >${{ (item.price * item.quantity).toFixed(2) }}</span
              >
            </div>
          </div>
          <button
            class="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-red-400 transition-colors flex-shrink-0 mt-0.5"
            @click="removeFromCart(item.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Coupon -->
      <div class="px-6 py-3 border-t border-gray-100">
        <div class="flex items-center gap-2">
          <input
            type="text"
            placeholder="Código de cupón"
            class="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-power-primary"
          />
          <button
            class="bg-power-primary hover:bg-power-secondary text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex-shrink-0"
          >
            Aplicar
          </button>
        </div>
      </div>

      <!-- Summary & Checkout -->
      <div class="px-6 pb-6 pt-3 border-t border-gray-100 flex flex-col gap-3 bg-gray-50">
        <div class="flex flex-col gap-1.5">
          <div class="flex items-center justify-between text-sm text-gray-500">
            <span>Subtotal ({{ getTotalItems() }} artículos)</span>
            <span>${{ getTotalPrice().toFixed(2) }}</span>
          </div>
          <div class="flex items-center justify-between text-sm text-gray-500">
            <span>Envío estimado</span>
            <span class="text-power-accent font-medium">Gratis</span>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2 border-t border-gray-200">
          <span class="text-base font-bold text-gray-800">Total</span>
          <span class="text-lg font-bold text-gray-900">${{ getTotalPrice().toFixed(2) }}</span>
        </div>

        <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Envíos en línea temporalmente no disponibles. Puedes consultar disponibilidad y acordar entrega por WhatsApp.</span>
        </div>

        <button
          @click="consultarPedidoWhatsApp"
          class="w-full bg-[#25D366] hover:bg-[#128C7E] transition-colors text-white text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2"
          :disabled="items.length === 0"
          :class="{ 'opacity-50 cursor-not-allowed': items.length === 0 }"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Consultar disponibilidad por WhatsApp
        </button>

        <button
          class="w-full text-sm text-gray-400 hover:text-gray-600 transition-colors text-center py-1"
          @click="closeCarrito"
        >
          Seguir comprando
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCarrito } from '../stores/carrito.js'
import { createCheckout } from '../services/checkout'
import { useRouter } from 'vue-router'

const router = useRouter()

const {
  isOpen,
  items,
  closeCarrito,
  removeFromCart,
  updateQuantity,
  getTotalItems,
  getTotalPrice,
} = useCarrito()

const WHATSAPP_PHONE = '5213122454500'

const consultarPedidoWhatsApp = () => {
  const lista = items.value
    .map((item) => `• ${item.quantity}x ${item.name} ($${Number(item.price).toFixed(2)})`)
    .join('\n')
  const text = `Hola, me gustaría consultar la disponibilidad y entrega de los siguientes productos:\n\n${lista}\n\n*Total estimado: $${getTotalPrice().toFixed(2)}*`
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}
</script>
