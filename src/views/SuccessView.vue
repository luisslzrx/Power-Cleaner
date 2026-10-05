<template>
  <main
    class="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
  >
    <!-- Card Container (Wider: max-w-3xl) -->
    <section
      id="success-card"
      class="max-w-3xl w-full bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-10 animate-fade-up"
    >
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <!-- Left Column: Header, Icon, support & main navigation -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <!-- Checked checkmark icon with double outer rings and scale animation -->
          <div class="relative mb-6 self-center md:self-start">
            <div class="absolute inset-0 rounded-full bg-green-100/40 animate-ping"></div>
            <div
              class="relative w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 border border-green-100 shadow-inner animate-pop-in"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 class="text-2xl md:text-3xl font-extrabold text-power-primary mb-2 tracking-tight">
            ¡Pago Realizado con Éxito!
          </h1>

          <p class="text-sm text-gray-500 font-medium mb-6">
            Tu pedido ha sido procesado de forma segura. ¡Gracias por confiar en Power Cleaner!
          </p>

          <!-- WhatsApp Help Support Line -->
          <div class="w-full border-t border-gray-100 pt-5 mb-5">
            <p class="text-xs text-gray-500 mb-3">
              ¿Tienes alguna duda sobre tu pedido? Escríbenos directamente a soporte:
            </p>

            <a
              id="btn-whatsapp-support"
              href="https://wa.me/5213122454500?text=Hola,%20acabo%20de%20realizar%20una%20compra%20y%20me%20gustaría%20saber%20el%20estado%20de%20mi%20pedido."
              target="_blank"
              rel="noopener noreferrer"
              class="w-full bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl py-3 font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] shadow-sm text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              Contactar por WhatsApp
            </a>
          </div>

          <!-- Secondary navigation buttons -->
          <div class="grid grid-cols-2 gap-4 w-full">
            <router-link
              id="btn-back-store"
              to="/tienda"
              class="bg-power-primary hover:bg-power-secondary text-white rounded-xl py-3 font-semibold transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-sm text-sm text-center"
            >
              Seguir comprando
            </router-link>
            <router-link
              id="btn-back-home"
              to="/"
              class="border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl py-3 font-semibold transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] text-sm text-center"
            >
              Ir al inicio
            </router-link>
          </div>
        </div>

        <!-- Right Column: Summary & Info details -->
        <div class="flex flex-col gap-5 w-full">
          <!-- Purchase Summary (only visible if there were items in cart on load) -->
          <div
            v-if="purchasedItems.length > 0"
            class="w-full bg-gray-50/70 border border-gray-100 rounded-2xl p-5 text-left"
          >
            <h2 class="text-xs font-extrabold text-power-primary/80 uppercase tracking-widest mb-3">
              Resumen de tu compra
            </h2>

            <div class="space-y-2.5 max-h-36 overflow-y-auto pr-1">
              <div
                v-for="item in purchasedItems"
                :key="item.id"
                class="flex justify-between items-center text-sm py-1.5"
              >
                <div>
                  <p class="font-bold text-gray-800">{{ item.name }}</p>
                  <p class="text-xs text-gray-400">Cantidad: {{ item.quantity }}</p>
                </div>
                <span class="font-semibold text-power-primary">
                  ${{ (item.price * item.quantity).toFixed(2) }}
                </span>
              </div>
            </div>

            <div
              class="flex justify-between items-center mt-3 pt-3 border-t border-dashed border-gray-200"
            >
              <span class="font-bold text-gray-700 text-xs uppercase tracking-wider">Subtotal</span>
              <span class="font-extrabold text-base text-power-primary">
                ${{ getSubtotal().toFixed(2) }}
              </span>
            </div>
          </div>

          <!-- Information list without emojis, using custom outline SVG icons -->
          <div class="w-full space-y-3.5 text-left">
            <div
              class="flex items-start gap-3.5 bg-blue-50/10 p-3 rounded-xl border border-blue-500/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-power-primary mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 class="font-bold text-gray-800 text-xs md:text-sm">Confirmación por correo</h3>
                <p class="text-xs text-gray-500 leading-normal mt-0.5">
                  Te hemos enviado un correo de confirmación con los detalles y recibo de tu compra.
                </p>
              </div>
            </div>

            <div
              class="flex items-start gap-3.5 bg-blue-50/10 p-3 rounded-xl border border-blue-500/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-power-primary mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              <div>
                <h3 class="font-bold text-gray-800 text-xs md:text-sm">Información de envío</h3>
                <p class="text-xs text-gray-500 leading-normal mt-0.5">
                  Recibirás tu número de guía y el enlace de rastreo de la paquetería una vez que
                  despachemos tu paquete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useCarrito } from '@/stores/carrito'

const { items, clearCart } = useCarrito()
const purchasedItems = ref([])

const getSubtotal = () => {
  return purchasedItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
}

onMounted(async () => {
  // Set page title
  document.title = 'Compra Exitosa | Power Cleaner'

  // Store a snapshot of purchased items to show the receipt summary
  if (items.value && items.value.length > 0) {
    purchasedItems.value = [...items.value]
  }

  // Clear the shopping cart upon landing
  await clearCart()
})
</script>

<style scoped>
@keyframes pop-in {
  0% {
    transform: scale(0.85);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fade-up {
  0% {
    transform: translateY(16px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-pop-in {
  animation: pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-fade-up {
  animation: fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
