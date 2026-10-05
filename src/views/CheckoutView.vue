<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-6">
      <h1 class="text-3xl font-extrabold text-gray-900 mb-8">Finalizar compra</h1>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Formulario -->
        <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-xl font-bold text-gray-800 mb-1.5">Información de envío</h2>
          <p class="text-sm text-gray-500 mb-6 leading-relaxed">
            Por favor, llena tus datos completos de dirección para poder cotizar y calcular el costo de tu envío.
          </p>

          <div class="grid md:grid-cols-2 gap-5">
            <!-- Nombre Completo -->
            <div class="md:col-span-2 flex flex-col gap-1.5 text-left">
              <label class="text-xs font-bold text-power-primary">Nombre completo</label>
              <input
                v-model="form.name"
                placeholder="Ej. Juan Pérez"
                class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800"
              />
            </div>

            <!-- Teléfono -->
            <div class="flex flex-col gap-1.5 text-left">
              <label class="text-xs font-bold text-power-primary">Teléfono</label>
              <input
                v-model="form.phone"
                placeholder="Ej. 55 1234 5678"
                class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800"
              />
            </div>

            <!-- Correo electrónico -->
            <div class="flex flex-col gap-1.5 text-left">
              <label class="text-xs font-bold text-power-primary">Correo electrónico</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="Ej. juan@correo.com"
                class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800"
              />
            </div>

            <!-- Código Postal -->
            <div class="flex flex-col gap-1.5 text-left">
              <label class="text-xs font-bold text-power-primary">Código Postal</label>
              <input
                v-model="form.postalCode"
                placeholder="Ej. 06700"
                class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800"
              />
            </div>

            <!-- Estado -->
            <div class="flex flex-col gap-1.5 text-left">
              <label class="text-xs font-bold text-power-primary">Estado</label>
              <input
                v-model="form.state"
                placeholder="Ej. Ciudad de México"
                class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800"
              />
            </div>

            <!-- Ciudad -->
            <div class="flex flex-col gap-1.5 text-left">
              <label class="text-xs font-bold text-power-primary">Ciudad / Municipio</label>
              <input
                v-model="form.city"
                placeholder="Ej. Cuauhtémoc"
                class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800"
              />
            </div>

            <!-- Colonia -->
            <div class="flex flex-col gap-1.5 text-left">
              <label class="text-xs font-bold text-power-primary">Colonia</label>
              <input
                v-model="form.suburb"
                placeholder="Ej. Roma Norte"
                class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800"
              />
            </div>

            <!-- Calle -->
            <div class="flex flex-col gap-1.5 text-left">
              <label class="text-xs font-bold text-power-primary">Calle</label>
              <input
                v-model="form.street"
                placeholder="Ej. Av. Álvaro Obregón"
                class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800"
              />
            </div>

            <!-- Número -->
            <div class="flex flex-col gap-1.5 text-left">
              <label class="text-xs font-bold text-power-primary">Número (Ext. e Int.)</label>
              <input
                v-model="form.number"
                placeholder="Ej. 123 Int. A"
                class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800"
              />
            </div>

            <div class="md:col-span-2 mt-2">
              <button
                @click="quoteShipping"
                type="button"
                :disabled="isLoadingOptions || isLoadingCheckout"
                class="w-full bg-power-primary hover:bg-opacity-95 text-white rounded-xl py-3.5 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm"
              >
                <svg v-if="isLoadingOptions" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{{ isLoadingOptions ? 'Cotizando envío...' : 'Cotizar envío' }}</span>
              </button>
            </div>
          </div>

          <div v-if="shippingOptions.length" class="mt-8 border-t border-gray-100 pt-6">
            <h3 class="text-lg font-bold text-gray-800 mb-4">Selecciona un método de envío</h3>

            <div class="space-y-3">
              <label
                v-for="option in shippingOptions"
                :key="option.id"
                :class="[
                  'flex items-center justify-between border-2 rounded-xl p-4 cursor-pointer transition-all duration-200',
                  selectedShipping?.id === option.id 
                    ? 'border-power-primary bg-blue-50/10' 
                    : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50/50'
                ]"
              >
                <div class="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="shipping" 
                    :value="option" 
                    v-model="selectedShipping" 
                    class="h-4 w-4 text-power-primary border-gray-300 focus:ring-power-primary"
                  />

                  <div>
                    <p class="font-bold text-gray-800">
                      {{ option.carrier }}
                    </p>

                    <p class="text-sm text-gray-500 font-medium">
                      {{ option.service }} · {{ option.days }} día(s)
                    </p>
                  </div>
                </div>

                <span class="font-bold text-gray-900 text-lg"> ${{ option.price.toFixed(2) }} </span>
              </label>
            </div>
          </div>
        </div>

        <!-- Resumen -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-fit sticky top-8">
          <h2 class="text-xl font-bold text-gray-800 mb-6">Resumen de compra</h2>

          <div class="space-y-4">
            <div v-for="item in items" :key="item.id" class="flex justify-between text-sm">
              <div>
                <p class="font-semibold text-gray-800">{{ item.name }}</p>
                <p class="text-gray-500">Cantidad: {{ item.quantity }}</p>
              </div>

              <span class="font-medium text-gray-800"> ${{ (item.price * item.quantity).toFixed(2) }} </span>
            </div>

            <hr class="border-gray-100" />

            <div class="flex justify-between text-gray-600 font-medium">
              <span>Subtotal</span>
              <span>${{ getTotalPrice().toFixed(2) }}</span>
            </div>

            <div class="flex justify-between text-gray-600 font-medium">
              <span>Envío</span>
              <span>
                {{ selectedShipping ? `$${selectedShipping.price.toFixed(2)}` : 'Por cotizar' }}
              </span>
            </div>

            <hr class="border-gray-100" />

            <div class="flex justify-between text-xl font-extrabold text-gray-900">
              <span>Total</span>
              <span> ${{ total.toFixed(2) }} </span>
            </div>
          </div>

          <button
            @click="goToCheckout"
            :disabled="isLoadingCheckout || isLoadingOptions"
            class="mt-8 w-full bg-power-primary hover:bg-opacity-95 text-white rounded-xl py-3.5 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm"
          >
            <svg v-if="isLoadingCheckout" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{{ isLoadingCheckout ? 'Procesando pago...' : 'Continuar al pago' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCarrito } from '../stores/carrito'
import { reactive, ref, computed, onMounted } from 'vue'
import { getShippingQuote } from '../services/shipping'
import { createCheckout } from '../services/checkout'

const { items, getTotalPrice } = useCarrito()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  postalCode: '',
  state: '',
  city: '',
  suburb: '',
  street: '',
  number: '',
})

onMounted(() => {
  const savedAddress = localStorage.getItem('user_shipping_address')
  if (savedAddress) {
    try {
      const address = JSON.parse(savedAddress)
      Object.assign(form, address)
    } catch (e) {
      console.error('Error loading saved shipping address:', e)
    }
  }
})

const shippingOptions = reactive([])

const selectedShipping = ref(null)
const isLoadingOptions = ref(false)
const isLoadingCheckout = ref(false)

const total = computed(() => {
  return getTotalPrice() + (selectedShipping.value?.price || 0)
})

const quoteShipping = async () => {
  if (
    !form.postalCode ||
    !form.state ||
    !form.city ||
    !form.suburb ||
    !form.street ||
    !form.number
  ) {
    alert('Por favor, completa todos los campos de dirección antes de cotizar.')
    return
  }

  isLoadingOptions.value = true
  console.time('Cotización')

  try {
    const result = await getShippingQuote(form)

    shippingOptions.splice(0)

    shippingOptions.push(
      ...result.shippingOptions.map((option) => ({
        ...option,
        quotationId: result.quotationId,
      })),
    )

    console.timeEnd('Cotización')
    console.log(result.shippingOptions)

    if (result.shippingOptions.length === 0) {
      alert('No se encontraron opciones de envío para esta dirección en este momento.')
    }
  } catch (error) {
    console.timeEnd('Cotización')
    console.error(error)
    alert('No fue posible cotizar el envío: ' + error.message)
  } finally {
    isLoadingOptions.value = false
  }
}

const goToCheckout = async () => {
  if (!selectedShipping.value) {
    alert('Selecciona un método de envío.')
    return
  }

  isLoadingCheckout.value = true

  try {
    // Abrir Stripe y crear la orden en el servidor
    const url = await createCheckout(items.value, selectedShipping.value, form)

    window.location.href = url
  } catch (error) {
    console.error(error)
    alert('No fue posible iniciar el pago: ' + error.message)
  } finally {
    isLoadingCheckout.value = false
  }
}
</script>
