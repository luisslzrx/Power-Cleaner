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

        <button
          class="w-full bg-power-primary hover:bg-power-secondary transition-colors text-white text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2"
          :disabled="items.length === 0"
          :class="{ 'opacity-50 cursor-not-allowed': items.length === 0 }"
        >
          Proceder al pago
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
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

const {
  isOpen,
  items,
  closeCarrito,
  removeFromCart,
  updateQuantity,
  getTotalItems,
  getTotalPrice,
} = useCarrito()
</script>
