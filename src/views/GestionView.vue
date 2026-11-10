<template>
  <div class="min-h-screen bg-slate-100/60 font-sans text-slate-800">
    <!-- 1. Pantalla de carga mientras se valida la sesión -->
    <div v-if="isCheckingAuth" class="min-h-screen flex flex-col items-center justify-center gap-3">
      <svg class="animate-spin h-8 w-8 text-power-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span class="text-xs font-semibold text-slate-500">Verificando sesión administrativa...</span>
    </div>

    <!-- 2. Pantalla de Login si no hay usuario autenticado -->
    <GestionLogin
      v-else-if="!currentUser"
      @login-success="handleLoginSuccess"
    />

    <!-- 3. Panel de Gestión para usuario autenticado -->
    <div v-else class="min-h-screen flex flex-col">
      <!-- Navbar superior -->
      <GestionNavbar
        :user="currentUser"
        @logout="handleLogout"
        @add-product="openAddModal"
      />

      <!-- Contenido Principal -->
      <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <!-- Toast Notification flotante -->
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-3"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-3"
        >
          <div
            v-if="toastMessage"
            class="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white transition-all"
            :class="toastType === 'error' ? 'bg-red-600' : 'bg-emerald-600'"
          >
            <svg v-if="toastType === 'success'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <span>{{ toastMessage }}</span>
          </div>
        </transition>

        <!-- Banner de estadísticas -->
        <GestionStats
          :total-products="products.length"
          :total-departments="totalDepartments"
          :total-categories="totalCategories"
          :missing-image-count="missingImageCount"
        />

        <!-- Tabla de productos -->
        <GestionTable
          :products="products"
          :loading="isLoadingProducts"
          @add-product="openAddModal"
          @add-product-click="openAddModal"
          @edit-product="openEditModal"
          @delete-product="openDeleteModal"
        />
      </main>

      <!-- Modal para Agregar o Editar Producto -->
      <GestionModal
        v-if="isModalOpen"
        :product="selectedProduct"
        :existing-products="products"
        @close="closeModal"
        @saved="handleProductSaved"
      />

      <!-- Modal de Confirmación para Eliminar Producto -->
      <GestionDeleteModal
        v-if="isDeleteModalOpen"
        :product="productToDelete"
        @close="closeDeleteModal"
        @deleted="handleProductDeleted"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '../supabase'
import GestionLogin from '../components/Gestion/GestionLogin.vue'
import GestionNavbar from '../components/Gestion/GestionNavbar.vue'
import GestionStats from '../components/Gestion/GestionStats.vue'
import GestionTable from '../components/Gestion/GestionTable.vue'
import GestionModal from '../components/Gestion/GestionModal.vue'
import GestionDeleteModal from '../components/Gestion/GestionDeleteModal.vue'

// Estado de Autenticación
const currentUser = ref(null)
const isCheckingAuth = ref(true)

// Estado de Productos
const products = ref([])
const isLoadingProducts = ref(false)

// Estado de Modales
const isModalOpen = ref(false)
const selectedProduct = ref(null)
const isDeleteModalOpen = ref(false)
const productToDelete = ref(null)

// Notificaciones Toast
const toastMessage = ref('')
const toastType = ref('success')
let toastTimeout = null

const showToast = (message, type = 'success') => {
  if (toastTimeout) clearTimeout(toastTimeout)
  toastMessage.value = message
  toastType.value = type
  toastTimeout = setTimeout(() => {
    toastMessage.value = ''
  }, 4000)
}

// Estadísticas computadas
const totalDepartments = computed(() => {
  return new Set(products.value.map((p) => p.department).filter(Boolean)).size
})

const totalCategories = computed(() => {
  return new Set(products.value.map((p) => p.category).filter(Boolean)).size
})

const missingImageCount = computed(() => {
  return products.value.filter((p) => !p.image || p.image.trim() === '').length
})

// Cargar catálogo de productos sin filtro de foto
const loadProducts = async () => {
  isLoadingProducts.value = true
  try {
    const { data, error } = await supabase
      .from('productos', { bypassFotoFilter: true })
      .select('*')
      .order('id', { ascending: false })

    if (error) throw error
    products.value = data || []
  } catch (err) {
    console.error('Error al cargar productos para gestión:', err)
    showToast('Error al cargar el catálogo de productos: ' + (err.message || ''), 'error')
  } finally {
    isLoadingProducts.value = false
  }
}

// Manejo de Sesión
const checkSession = async () => {
  isCheckingAuth.value = true
  try {
    const { data } = await supabase.auth.getUser()
    currentUser.value = data?.user || null
    if (currentUser.value) {
      await loadProducts()
    }
  } catch (err) {
    console.error('Error al verificar sesión:', err)
    currentUser.value = null
  } finally {
    isCheckingAuth.value = false
  }
}

const handleLoginSuccess = async (user) => {
  currentUser.value = user
  showToast('¡Bienvenido al Panel de Gestión!', 'success')
  await loadProducts()
}

const handleLogout = async () => {
  try {
    await supabase.auth.signOut()
    currentUser.value = null
    products.value = []
    showToast('Sesión cerrada correctamente.', 'success')
  } catch (err) {
    console.error('Error al cerrar sesión:', err)
  }
}

// Control de Modales
const openAddModal = () => {
  selectedProduct.value = null
  isModalOpen.value = true
}

const openEditModal = (product) => {
  selectedProduct.value = { ...product }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProduct.value = null
}

const openDeleteModal = (product) => {
  productToDelete.value = product
  isDeleteModalOpen.value = true
}

const closeDeleteModal = () => {
  isDeleteModalOpen.value = false
  productToDelete.value = null
}

// Manejo de eventos tras guardar/eliminar
const handleProductSaved = async ({ type, product }) => {
  closeModal()
  if (type === 'create') {
    showToast(`Producto "${product.name}" creado exitosamente.`, 'success')
  } else {
    showToast(`Producto "${product.name}" actualizado exitosamente.`, 'success')
  }
  await loadProducts()
}

const handleProductDeleted = async (deletedId) => {
  closeDeleteModal()
  products.value = products.value.filter((p) => p.id !== deletedId)
  showToast('Producto eliminado exitosamente del catálogo.', 'success')
}

onMounted(() => {
  checkSession()

  supabase.auth.onAuthStateChange((event, session) => {
    currentUser.value = session?.user || null
    if (event === 'SIGNED_OUT') {
      products.value = []
    }
  })
})
</script>

