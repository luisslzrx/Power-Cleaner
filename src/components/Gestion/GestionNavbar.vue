<template>
  <header class="w-full bg-power-primary text-white shadow-md sticky top-0 z-30 font-sans border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Izquierda: Logo y Título -->
      <div class="flex items-center gap-3">
        <router-link to="/gestion" class="flex items-center gap-2.5">
          <img src="/src/assets/images/icono.png" alt="Power Cleaner" class="h-9 w-auto object-contain" />
          <div class="hidden sm:block">
            <span class="text-sm font-extrabold tracking-tight text-white block leading-none">
              Power Cleaner
            </span>
            <span class="text-[10px] font-semibold text-power-accent uppercase tracking-widest block mt-0.5">
              Panel Administrativo
            </span>
          </div>
        </router-link>
        <span class="hidden md:inline-block px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-white/10 text-blue-200">
          Catálogo v1.0
        </span>
      </div>

      <!-- Derecha: Acciones, Usuario y Cerrar sesión -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Botón Agregar Producto en Navbar -->
        <button
          type="button"
          @click="$emit('add-product')"
          class="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold text-white bg-power-accent hover:bg-power-accent/90 shadow-sm active:scale-95 transition-all cursor-pointer"
          title="Agregar nuevo producto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span class="inline">Agregar Producto</span>
        </button>

        <!-- Enlace a la tienda pública -->
        <router-link
          to="/tienda"
          target="_blank"
          class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 transition-all"
          title="Abrir tienda en nueva pestaña"
        >
          <span>Ver tienda</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </router-link>

        <!-- Pastilla de usuario administrador -->
        <div class="flex items-center gap-2 pl-2 sm:border-l sm:border-white/15">
          <div class="w-8 h-8 rounded-full bg-power-secondary flex items-center justify-center font-bold text-xs uppercase text-white shadow-xs">
            {{ userInitial }}
          </div>
          <div class="hidden md:flex flex-col text-left">
            <span class="text-xs font-semibold text-white max-w-[150px] truncate leading-tight">
              {{ userEmail }}
            </span>
            <span class="text-[10px] text-emerald-400 font-medium">En línea</span>
          </div>
        </div>

        <!-- Botón Cerrar Sesión -->
        <button
          type="button"
          @click="$emit('logout')"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-red-200 hover:text-white bg-red-950/40 hover:bg-red-700/80 transition-all cursor-pointer border border-red-500/30"
          title="Cerrar sesión administrativa"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span class="hidden sm:inline">Cerrar sesión</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    default: null,
  },
})

defineEmits(['logout', 'add-product'])

const userEmail = computed(() => props.user?.email || 'Administrador')
const userInitial = computed(() => {
  if (!props.user?.email) return 'A'
  return props.user.email.charAt(0).toUpperCase()
})
</script>

