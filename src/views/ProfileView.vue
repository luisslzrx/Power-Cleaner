<template>
  <main class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <svg
          class="animate-spin h-10 w-10 text-power-primary mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <p class="text-gray-500 font-medium">Cargando perfil...</p>
      </div>

      <!-- Not Logged In State -->
      <div
        v-else-if="!user"
        class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center max-w-md mx-auto"
      >
        <h1 class="text-xl font-bold text-gray-800 mb-2">Inicia sesión para continuar</h1>
        <p class="text-sm text-gray-500 mb-6">Debes iniciar sesión para ver tu perfil y tu historial de compras.</p>
        <router-link
          to="/auth"
          class="inline-block w-full bg-power-primary text-white font-bold py-3 rounded-xl hover:bg-opacity-95 transition-all text-center"
        >
          Iniciar sesión
        </router-link>
      </div>

      <!-- Profile Content -->
      <div v-else class="grid md:grid-cols-3 gap-8">
        <!-- Left: User details card and Tabs Navigation -->
        <div class="md:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center md:items-start h-fit">
          <div class="w-full flex flex-col items-center md:items-start text-center md:text-left pb-6 border-b border-gray-100">
            <div
              class="w-20 h-20 bg-power-primary/10 rounded-full flex items-center justify-center text-power-primary text-2xl font-bold mb-4"
            >
              {{ user.email.charAt(0).toUpperCase() }}
            </div>
            <h2 class="text-lg font-bold text-gray-800 break-all mb-1 w-full">{{ user.email }}</h2>
            <p class="text-xs text-gray-400">Cliente registrado</p>
          </div>

          <!-- Tabs Navigation -->
          <div class="w-full flex flex-col gap-2 pt-6 pb-6 border-b border-gray-100">
            <button
              @click="activeTab = 'orders'"
              class="w-full text-left font-bold py-2.5 px-4 rounded-xl transition text-sm flex items-center gap-2.5"
              :class="activeTab === 'orders' ? 'bg-power-primary text-white' : 'text-gray-600 hover:bg-gray-50'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Mis pedidos</span>
            </button>
            
            <button
              @click="activeTab = 'favorites'"
              class="w-full text-left font-bold py-2.5 px-4 rounded-xl transition text-sm flex items-center gap-2.5"
              :class="activeTab === 'favorites' ? 'bg-power-primary text-white' : 'text-gray-600 hover:bg-gray-50'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Mis favoritos</span>
            </button>

            <button
              @click="activeTab = 'address'"
              class="w-full text-left font-bold py-2.5 px-4 rounded-xl transition text-sm flex items-center gap-2.5"
              :class="activeTab === 'address' ? 'bg-power-primary text-white' : 'text-gray-600 hover:bg-gray-50'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Dirección de envío</span>
            </button>
          </div>

          <button
            @click="handleLogout"
            class="w-full mt-6 bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2.5 rounded-xl transition text-sm"
          >
            Cerrar sesión
          </button>
        </div>

        <!-- Right: Content Column -->
        <div class="md:col-span-2">
          <!-- Orders Tab Content -->
          <MisPedidos
            v-if="activeTab === 'orders'"
            :orders="orders"
            :loading-orders="loadingOrders"
          />

          <!-- Favorites Tab Content -->
          <MisFavoritos
            v-else-if="activeTab === 'favorites'"
          />

          <!-- Address Tab Content -->
          <DireccionEnvio
            v-else-if="activeTab === 'address'"
            :user="user"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'
import { useCarrito } from '../stores/carrito.js'
import MisPedidos from '@/components/Profile/MisPedidos.vue'
import MisFavoritos from '@/components/Profile/MisFavoritos.vue'
import DireccionEnvio from '@/components/Profile/DireccionEnvio.vue'

const router = useRouter()
const { clearCart } = useCarrito()

const user = ref(null)
const loading = ref(true)
const loadingOrders = ref(false)
const orders = ref([])
const activeTab = ref('orders')

const handleLogout = async () => {
  await supabase.auth.signOut()
  await clearCart()
  user.value = null
  router.push('/auth')
}

const fetchUserOrders = async (email) => {
  loadingOrders.value = true
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('customer_email', email)
      .order('created_at', { ascending: false })

    if (error) throw error
    orders.value = data || []
  } catch (error) {
    console.error('Error fetching user orders:', error)
  } finally {
    loadingOrders.value = false
  }
}

onMounted(async () => {
  try {
    const { data } = await supabase.auth.getUser()
    user.value = data.user
    if (user.value) {
      await fetchUserOrders(user.value.email)
    }
  } catch (error) {
    console.error('Error fetching user:', error)
  } finally {
    loading.value = false
  }
})
</script>
