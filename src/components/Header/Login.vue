<template>
  <!-- Sign In - desktop -->
  <RouterLink
    v-if="!user"
    to="/auth"
    class="hidden md:flex items-center gap-2 cursor-pointer group flex-shrink-0 px-4 py-2.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08] transition-all"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
    <span class="text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors">
      Ingresar
    </span>
  </RouterLink>

  <div
    v-else
    class="hidden md:flex items-center gap-4 px-4 py-2.5 rounded-lg border border-white/10 bg-white/[0.04]"
  >
    <RouterLink
      to="/perfil"
      class="text-sm font-medium text-white/80 hover:text-white hover:underline transition-all"
    >
      {{ user.email }}
    </RouterLink>

    <button class="text-xs text-white/50 hover:text-white transition-colors" @click="logout">Salir</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../../supabase'
import { useCarrito } from '../../stores/carrito.js'

const { loadUserCart, clearCart } = useCarrito()

const user = ref(null)

const logout = async () => {
  await supabase.auth.signOut()
  await clearCart()
  user.value = null
}

onMounted(async () => {
  const { data } = await supabase.auth.getUser()
  user.value = data.user

  if (user.value) {
    await loadUserCart()
  }

  console.log('Usuario:', user.value)
})
</script>
