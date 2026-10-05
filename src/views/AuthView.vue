<template>
  <section class="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">
        {{ isRegister ? 'Crear cuenta' : 'Iniciar sesión' }}
      </h1>

      <p class="text-sm text-gray-500 mb-6">Accede para guardar tu carrito y ver tus pedidos.</p>

      <form class="flex flex-col gap-4" @submit.prevent="handleAuth">
        <input
          v-model="email"
          type="email"
          placeholder="Correo electrónico"
          class="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-power-primary"
          required
        />

        <input
          v-model="password"
          type="password"
          placeholder="Contraseña"
          class="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-power-primary"
          required
        />

        <button
          class="bg-power-primary text-white font-bold rounded-xl py-3 hover:opacity-90 transition"
        >
          {{ isRegister ? 'Registrarme' : 'Entrar' }}
        </button>
      </form>

      <button
        class="w-full mt-4 text-sm text-power-primary font-semibold"
        @click="isRegister = !isRegister"
      >
        {{ isRegister ? 'Ya tengo cuenta' : 'Crear una cuenta nueva' }}
      </button>

      <button v-if="!isRegister" class="w-full mt-3 text-sm text-gray-500" @click="resetPassword">
        Olvidé mi contraseña
      </button>

      <p v-if="message" class="mt-4 text-sm text-gray-600">
        {{ message }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const email = ref('')
const password = ref('')
const isRegister = ref(false)
const message = ref('')

const handleAuth = async () => {
  message.value = ''

  if (isRegister.value) {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })

    if (error) {
      message.value = error.message
      return
    }

    message.value = 'Revisa tu correo para confirmar tu cuenta.'
  } else {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) {
      message.value = error.message
      return
    }

    window.location.href = '/perfil'
  }
}

const resetPassword = async () => {
  if (!email.value) {
    message.value = 'Escribe tu correo primero.'
    return
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: 'http://localhost:5173/reset-password',
  })

  if (error) {
    message.value = error.message
    return
  }

  message.value = 'Te enviamos un correo para recuperar tu contraseña.'
}
</script>
