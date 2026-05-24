<template>
  <section class="w-full font-sans">
    <!-- Top bar -->
    <div class="w-full px-6 py-2 flex items-center justify-between bg-power-primary">
      <div class="flex items-center gap-3">
        <span class="text-white text-xs tracking-widest">★ ★ ★ ★ ★</span>
        <span class="text-white text-xs font-medium tracking-wide"
          >¡Bienvenidos a Power Cleaner!</span
        >
      </div>

      <div class="flex items-center gap-5">
        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 h-3.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span class="text-xs text-white"
            >Entrega a <strong class="text-white font-semibold">todo México</strong></span
          >
        </div>

        <span class="text-white">|</span>

        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 h-3.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1h2l3-3-1-4H13v7z"
            />
          </svg>
          <span class="text-xs text-white">Rastrear pedido</span>
        </div>

        <span class="text-white">|</span>

        <div class="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 h-3.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span class="text-xs text-white">Todas las ofertas</span>
        </div>

        <span class="text-white">|</span>

        <div class="flex items-center gap-1.5">
          <span class="text-xs">🇺🇸</span>
          <span class="text-xs font-semibold text-white tracking-wide">Fórmula Americana</span>
        </div>
      </div>
    </div>

    <!-- Main header bar -->
    <div class="w-full px-6 py-4 flex items-center gap-6 bg-power-primary border-t border-white/10">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <router-link to="/">
          <img src="/src/assets/images/icono.png" alt="Power Cleaner" class="h-14 object-contain" />
        </router-link>
      </div>

      <!-- Search bar -->
      <div
        class="flex-1 flex items-center rounded-lg overflow-hidden bg-white/[0.06] border border-white/10 px-4 py-2.5 gap-3 hover:border-white/20 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 text-white/30 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"
          />
        </svg>
        <span class="text-white/30 text-sm flex-1">Buscar productos de limpieza...</span>
      </div>

      <!-- Sign In -->
      <div
        class="flex items-center gap-2 cursor-pointer group flex-shrink-0 px-4 py-2.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08] transition-all"
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
        <span class="text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors"
          >Ingresar</span
        >
      </div>

      <span class="text-white/10">|</span>

      <!-- Cart — único acento rojo, bien usado -->
      <div
        class="flex items-center gap-2 cursor-pointer flex-shrink-0 px-5 py-2.5 rounded-lg transition-all hover:opacity-90 bg-power-accent"
        @click="openCarrito"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span class="text-sm font-semibold text-white">Carrito</span>
      </div>
    </div>

    <!-- Thin red accent line -->
    <div
      class="w-full h-px"
      style="background: linear-gradient(90deg, transparent, #b91c1c, transparent)"
    ></div>

    <!-- Nav bar -->
    <div class="w-full bg-white">
      <div class="max-w-7xl mx-auto px-6 flex items-center h-11">
        <!-- Categories -->
        <div
          class="flex items-center gap-2 pr-6 border-r border-gray-200 cursor-pointer flex-shrink-0 hover:opacity-70 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span class="text-sm font-medium text-gray-700">Categorías</span>
        </div>

        <!-- Nav links -->
        <nav class="flex items-center gap-7 px-8">
          <RouterLink to="/" class="text-sm font-semibold text-black">Inicio</RouterLink>
          <RouterLink to="/tienda" class="text-sm text-gray-600 hover:text-black transition-colors"
            >Tienda</RouterLink
          >
          <RouterLink
            to="/nosotros"
            class="text-sm text-gray-600 hover:text-black transition-colors"
            >Nosotros</RouterLink
          >
          <RouterLink
            to="/contacto"
            class="text-sm text-gray-600 hover:text-black transition-colors"
            >Contacto</RouterLink
          >
        </nav>

        <!-- Dashed divider -->
        <div class="flex-1 border-l border-dashed border-gray-200 h-full"></div>

        <!-- Contact -->
        <div class="flex items-center gap-2 pl-8 flex-shrink-0">
          <span class="text-xs text-gray-500">Contacto:</span>
          <span class="text-sm font-semibold text-gray-800">314 100 7071</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCarrito } from '../stores/carrito.js'
const { openCarrito } = useCarrito()
</script>
