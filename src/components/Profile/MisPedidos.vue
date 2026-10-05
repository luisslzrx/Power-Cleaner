<template>
  <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
    <h1 class="text-xl font-bold text-gray-800 mb-6">Historial de pedidos</h1>

    <!-- Loading Orders -->
    <div v-if="loadingOrders" class="py-8 text-center text-gray-400 text-sm">Cargando pedidos...</div>

    <!-- No Orders State -->
    <div v-else-if="orders.length === 0" class="py-12 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-12 h-12 text-gray-300 mx-auto mb-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <h3 class="text-sm font-bold text-gray-700">Aún no tienes compras</h3>
      <p class="text-xs text-gray-500 mt-1 mb-4">Tus pedidos aparecerán aquí una vez que completes una compra.</p>
      <router-link to="/tienda" class="inline-block text-xs font-semibold text-power-primary hover:underline">
        Ir a la tienda
      </router-link>
    </div>

    <!-- Orders List -->
    <div v-else class="space-y-4">
      <div
        v-for="order in orders"
        :key="order.id"
        class="border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-colors text-left"
      >
        <div class="flex flex-wrap justify-between items-center gap-2 mb-3">
          <div>
            <span class="text-xs text-gray-400">ID del pedido</span>
            <p class="text-sm font-bold text-gray-800">#{{ order.id.substring(0, 8) }}...</p>
          </div>
          <div class="text-right">
            <span class="text-xs text-gray-400">Fecha</span>
            <p class="text-xs text-gray-600">{{ formatDate(order.created_at) }}</p>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2.5 border-t border-b border-gray-50 my-2">
          <div>
            <span class="text-xs text-gray-400 block">Total</span>
            <span class="text-sm font-bold text-power-primary">${{ order.total?.toFixed(2) }}</span>
          </div>
          <div>
            <span class="text-xs text-gray-400 block">Estado de pago</span>
            <span
              class="text-xs font-semibold px-2 py-0.5 rounded-full inline-block mt-0.5"
              :class="order.status === 'paid' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'"
            >
              {{ order.status === 'paid' ? 'Pagado' : 'Pendiente' }}
            </span>
          </div>
          <div class="col-span-2 sm:col-span-1">
            <span class="text-xs text-gray-400 block">Envío</span>
            <span class="text-xs text-gray-600 mt-0.5 block">
              {{ order.shipping_carrier || 'Pendiente' }}
            </span>
          </div>
        </div>

        <!-- Shipping Guide Info if available -->
        <div
          v-if="order.tracking_number"
          class="mt-2 text-xs flex flex-wrap gap-2 justify-between items-center bg-gray-50 p-2.5 rounded-lg"
        >
          <div>
            <span class="text-gray-500 font-medium">Guía de rastreo: </span>
            <span class="font-bold text-gray-800">{{ order.tracking_number }}</span>
          </div>
          <a
            v-if="order.tracking_url"
            :href="order.tracking_url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-power-primary font-bold hover:underline"
          >
            Rastrear envío
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  orders: {
    type: Array,
    required: true,
  },
  loadingOrders: {
    type: Boolean,
    default: false,
  },
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>
