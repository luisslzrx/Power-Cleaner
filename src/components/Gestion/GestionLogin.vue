<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-100/80 px-4 py-12 font-sans">
    <div class="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
      <!-- Header con branding -->
      <div class="bg-power-primary px-8 pt-8 pb-7 text-center relative">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm p-2 mb-3 shadow-inner">
          <img src="/src/assets/images/icono.png" alt="Power Cleaner" class="w-full h-full object-contain" />
        </div>
        <div class="inline-block px-3 py-1 bg-power-secondary/60 text-blue-200 text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">
          Área Administrativa
        </div>
        <h1 class="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Gestión de Productos
        </h1>
        <p class="text-xs text-blue-200/80 mt-1">
          Inicia sesión para administrar el catálogo de Power Cleaner
        </p>
      </div>

      <!-- Formulario de inicio de sesión -->
      <div class="p-6 sm:p-8">
        <!-- Alerta de error -->
        <div
          v-if="errorMessage"
          class="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs sm:text-sm animate-shake"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="flex-1">
            <p class="font-semibold">{{ errorMessage }}</p>
          </div>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Campo Correo -->
          <div>
            <label for="admin-email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Correo Electrónico
            </label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
              <input
                id="admin-email"
                v-model="email"
                type="email"
                required
                autocomplete="email"
                placeholder="admin@powercleaner.com"
                class="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all bg-slate-50/50 focus:bg-white"
              />
            </div>
          </div>

          <!-- Campo Contraseña -->
          <div>
            <label for="admin-password" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Contraseña
            </label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                id="admin-password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                autocomplete="current-password"
                placeholder="••••••••••••"
                class="w-full pl-10 pr-11 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-power-primary focus:ring-2 focus:ring-power-primary/10 transition-all bg-slate-50/50 focus:bg-white"
              />
              <button
                type="button"
                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                @click="showPassword = !showPassword"
                title="Mostrar/Ocultar contraseña"
              >
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Botón de Envío -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full mt-2 py-3.5 px-4 rounded-xl bg-power-primary hover:bg-power-secondary text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg
              v-if="isLoading"
              class="animate-spin -ml-1 mr-1 h-4 w-4 text-white"
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
            <span>{{ isLoading ? 'Validando credenciales...' : 'Ingresar al Panel' }}</span>
          </button>
        </form>

        <!-- Enlace a la tienda pública -->
        <div class="mt-6 pt-5 border-t border-slate-100 text-center">
          <router-link
            to="/"
            class="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-power-primary font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Volver a la tienda pública</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../../supabase'

const emit = defineEmits(['login-success'])

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  errorMessage.value = ''
  isLoading.value = true

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value.trim(),
      password: password.value,
    })

    if (error) {
      if (error.message.includes('Invalid login credentials')) {
        errorMessage.value = 'Correo o contraseña incorrectos. Verifica tus credenciales.'
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage.value = 'El correo electrónico no ha sido confirmado.'
      } else {
        errorMessage.value = error.message || 'Error al iniciar sesión.'
      }
      return
    }

    if (data?.user) {
      emit('login-success', data.user)
    }
  } catch (err) {
    console.error('Error de autenticación:', err)
    errorMessage.value = 'Error de conexión. Inténtalo nuevamente.'
  } finally {
    isLoading.value = false
  }
}
</script>

