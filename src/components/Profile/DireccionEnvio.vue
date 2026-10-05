<template>
  <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
    <h1 class="text-xl font-bold text-gray-800 mb-2">Dirección de envío</h1>
    <p class="text-sm text-gray-500 mb-6 text-left">
      Guarda tus datos de entrega para que se auto-completen al realizar una compra.
    </p>

    <form @submit.prevent="saveAddress" class="grid sm:grid-cols-2 gap-4 text-left">
      <!-- Nombre Completo -->
      <div class="sm:col-span-2 flex flex-col gap-1.5">
        <label class="text-xs font-bold text-power-primary">Nombre completo</label>
        <input
          v-model="addressForm.name"
          placeholder="Ej. Juan Pérez"
          class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800 text-sm"
          required
        />
      </div>

      <!-- Teléfono -->
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-power-primary">Teléfono</label>
        <input
          v-model="addressForm.phone"
          placeholder="Ej. 55 1234 5678"
          class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800 text-sm"
          required
        />
      </div>

      <!-- Correo electrónico -->
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-power-primary">Correo electrónico</label>
        <input
          v-model="addressForm.email"
          type="email"
          placeholder="Ej. juan@correo.com"
          class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800 text-sm"
          required
        />
      </div>

      <!-- Código Postal -->
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-power-primary">Código Postal</label>
        <input
          v-model="addressForm.postalCode"
          placeholder="Ej. 06700"
          class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800 text-sm"
          required
        />
      </div>

      <!-- Estado -->
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-power-primary">Estado</label>
        <input
          v-model="addressForm.state"
          placeholder="Ej. Ciudad de México"
          class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800 text-sm"
          required
        />
      </div>

      <!-- Ciudad / Municipio -->
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-power-primary">Ciudad / Municipio</label>
        <input
          v-model="addressForm.city"
          placeholder="Ej. Cuauhtémoc"
          class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800 text-sm"
          required
        />
      </div>

      <!-- Colonia -->
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-power-primary">Colonia</label>
        <input
          v-model="addressForm.suburb"
          placeholder="Ej. Roma Norte"
          class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800 text-sm"
          required
        />
      </div>

      <!-- Calle -->
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-power-primary">Calle</label>
        <input
          v-model="addressForm.street"
          placeholder="Ej. Av. Álvaro Obregón"
          class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800 text-sm"
          required
        />
      </div>

      <!-- Número -->
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-power-primary">Número (Ext. e Int.)</label>
        <input
          v-model="addressForm.number"
          placeholder="Ej. 123 Int. A"
          class="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-power-primary/20 focus:border-power-primary transition-all text-gray-800 text-sm"
          required
        />
      </div>

      <div class="sm:col-span-2 mt-4 flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          class="bg-power-primary hover:bg-power-secondary text-white font-bold px-6 py-3 rounded-xl transition text-sm flex-1 md:flex-initial"
        >
          Guardar dirección
        </button>
        <p v-if="saveSuccess" class="text-green-600 text-sm font-semibold animate-pulse">
          ¡Dirección guardada con éxito!
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const addressForm = reactive({
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

const saveSuccess = ref(false)

const saveAddress = () => {
  localStorage.setItem('user_shipping_address', JSON.stringify(addressForm))
  saveSuccess.value = true
  setTimeout(() => {
    saveSuccess.value = false
  }, 3000)
}

onMounted(() => {
  const savedAddress = localStorage.getItem('user_shipping_address')
  if (savedAddress) {
    try {
      const address = JSON.parse(savedAddress)
      Object.assign(addressForm, address)
    } catch (e) {
      console.error('Error parsing stored address:', e)
    }
  }

  // Pre-fill email with registered user email if empty
  if (!addressForm.email && props.user) {
    addressForm.email = props.user.email
  }
})
</script>
