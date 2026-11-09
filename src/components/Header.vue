<template>
  <section class="w-full font-sans">
    <!-- Top bar - oculta en móvil -->
    <div class="hidden md:flex w-full px-6 py-2 items-center justify-between bg-power-primary">
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
    <div
      class="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between bg-power-primary border-t border-white/10"
    >
      <!-- Logo -->
      <div class="flex-shrink-0 mr-4 md:mr-8">
        <router-link to="/">
          <img
            src="/src/assets/images/icono.png"
            alt="Power Cleaner"
            class="h-10 md:h-14 object-contain"
          />
        </router-link>
      </div>

      <BuscadorProductos />

      <!-- Right side: Sign In, Cart, Mobile buttons -->
      <div class="flex items-center gap-2 md:gap-4">
        <!-- Sign In - desktop -->
        <Login />

        <span class="hidden md:block text-white/10">|</span>

        <!-- Cart - desktop -->
        <div
          class="hidden md:flex items-center gap-2 cursor-pointer flex-shrink-0 px-5 py-2.5 rounded-lg transition-all hover:opacity-90 bg-power-accent"
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

        <!-- Mobile: Search button -->
        <button
          class="md:hidden flex items-center justify-center p-2 text-white hover:text-white/80 transition-colors"
          aria-label="Buscar productos"
          @click="toggleMobileSearch"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
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
        </button>

        <!-- Mobile: Menu button (Lateral Drawer trigger) -->
        <button
          class="md:hidden flex items-center justify-center p-2 text-white hover:text-white/80 transition-colors"
          aria-label="Abrir menú"
          @click="toggleMobileMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Thin red accent line -->
    <div
      class="w-full h-px"
      style="background: linear-gradient(90deg, transparent, #b91c1c, transparent)"
    ></div>

    <!-- Nav bar - desktop -->
    <div class="hidden md:block w-full bg-white">
      <div class="max-w-7xl mx-auto px-6 flex items-center h-11">
        <!-- Categories -->
        <CategoriasMenu />

        <!-- Nav links -->
        <nav class="flex items-center gap-7 px-8">
          <RouterLink
            to="/"
            class="text-sm text-gray-600 hover:text-black transition-colors"
            >Inicio</RouterLink
          >
          <RouterLink
            to="/tienda"
            class="text-sm text-gray-600 hover:text-black transition-colors"
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
          <span class="text-sm font-semibold text-gray-800">+52 33 1840 0789</span>
        </div>
      </div>
    </div>

    <!-- Mobile search bar -->
    <div
      v-if="mobileSearchOpen"
      class="md:hidden w-full bg-power-primary border-t border-white/10 px-4 py-3"
    >
      <BuscadorProductos :is-mobile="true" @navigate="mobileSearchOpen = false" />
    </div>

    <!-- Mobile Side Drawer (Abre de lado) -->
    <Teleport to="body">
      <div v-show="mobileMenuOpen" class="fixed inset-0 z-50 md:hidden">
        <!-- Backdrop oscuro -->
        <transition
          enter-active-class="transition-opacity duration-300 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="mobileMenuOpen"
            class="fixed inset-0 bg-black/60 backdrop-blur-xs"
            @click="closeMobileMenu"
          ></div>
        </transition>

        <!-- Panel lateral (deslizable desde la derecha) -->
        <transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-250 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div
            v-if="mobileMenuOpen"
            class="fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white shadow-2xl flex flex-col justify-between overflow-y-auto z-10"
          >
            <!-- Cabecera del Drawer -->
            <div>
              <div class="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-power-primary">
                <router-link to="/" @click="closeMobileMenu" class="flex items-center gap-2">
                  <img
                    src="/src/assets/images/icono.png"
                    alt="Power Cleaner"
                    class="h-9 object-contain"
                  />
                </router-link>

                <button
                  class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                  aria-label="Cerrar menú"
                  @click="closeMobileMenu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Enlaces principales de navegación -->
              <div class="px-4 py-4">
                <p class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">
                  Navegación
                </p>
                <nav class="flex flex-col gap-1">
                  <RouterLink
                    to="/"
                    class="drawer-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:text-power-primary hover:bg-slate-50 transition-all"
                    @click="closeMobileMenu"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Inicio</span>
                  </RouterLink>

                  <RouterLink
                    to="/tienda"
                    class="drawer-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:text-power-primary hover:bg-slate-50 transition-all"
                    @click="closeMobileMenu"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span>Tienda</span>
                  </RouterLink>

                  <RouterLink
                    to="/nosotros"
                    class="drawer-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:text-power-primary hover:bg-slate-50 transition-all"
                    @click="closeMobileMenu"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Nosotros</span>
                  </RouterLink>

                  <RouterLink
                    to="/contacto"
                    class="drawer-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:text-power-primary hover:bg-slate-50 transition-all"
                    @click="closeMobileMenu"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Contacto</span>
                  </RouterLink>
                </nav>

                <div class="my-3 border-t border-gray-100"></div>

                <p class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">
                  Servicios y Negocio
                </p>
                <nav class="flex flex-col gap-1">
                  <RouterLink
                    to="/venta-de-franquicias"
                    class="drawer-link flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-power-primary hover:bg-slate-50 transition-all"
                    @click="closeMobileMenu"
                  >
                    <span>Venta de Franquicias</span>
                    <span class="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-power-accent/10 text-power-accent">Destacado</span>
                  </RouterLink>

                  <RouterLink
                    to="/surtimos-tu-negocio"
                    class="drawer-link flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-power-primary hover:bg-slate-50 transition-all"
                    @click="closeMobileMenu"
                  >
                    <span>Surtimos tu Negocio</span>
                  </RouterLink>

                  <RouterLink
                    to="/maquila-tu-producto"
                    class="drawer-link flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-power-primary hover:bg-slate-50 transition-all"
                    @click="closeMobileMenu"
                  >
                    <span>Maquila tu Producto</span>
                  </RouterLink>
                </nav>
              </div>
            </div>

            <!-- Pie del Drawer -->
            <div class="p-4 border-t border-gray-100 bg-slate-50">
              <!-- Botón Ver Carrito -->
              <button
                class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all bg-power-accent text-white font-semibold text-sm shadow-sm hover:opacity-95 active:scale-98 mb-3 cursor-pointer"
                @click="handleOpenCartFromMobile"
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
                <span>Ver Carrito</span>
                <span
                  v-if="getTotalItems() > 0"
                  class="bg-white text-power-accent text-xs font-bold px-1.5 py-0.5 rounded-full"
                >
                  {{ getTotalItems() }}
                </span>
              </button>

              <!-- Sección de Usuario / Ingreso -->
              <div v-if="!user">
                <RouterLink
                  to="/auth"
                  class="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium transition-all"
                  @click="closeMobileMenu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 text-gray-500"
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
                  <span>Iniciar sesión / Registrarse</span>
                </RouterLink>
              </div>

              <div v-else class="flex flex-col gap-2">
                <RouterLink
                  to="/perfil"
                  class="flex items-center justify-between px-3 py-2 rounded-xl bg-white border border-gray-200 text-gray-800 text-xs font-medium"
                  @click="closeMobileMenu"
                >
                  <span class="truncate max-w-[190px]">{{ user.email }}</span>
                  <span class="text-power-primary font-bold">Mi perfil</span>
                </RouterLink>
                <button
                  class="w-full text-center text-xs text-red-600 font-semibold bg-red-50 hover:bg-red-100 py-2 rounded-lg transition-colors cursor-pointer"
                  @click="logout"
                >
                  Cerrar sesión
                </button>
              </div>

              <!-- Contacto rápido -->
              <div class="mt-3 pt-3 border-t border-gray-200 text-center">
                <a
                  href="tel:+523318400789"
                  class="text-xs text-gray-500 hover:text-power-primary transition-colors inline-flex items-center gap-1.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-power-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+52 33 1840 0789</span>
                </a>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import BuscadorProductos from './Header/BuscadorProductos.vue'
import CategoriasMenu from './Header/CategoriasMenu.vue'
import Login from './Header/Login.vue'

import { ref, onMounted, watch, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '../supabase'
import { useCarrito } from '../stores/carrito.js'

const route = useRoute()
const { openCarrito, clearCart, getTotalItems } = useCarrito()

const mobileMenuOpen = ref(false)
const mobileSearchOpen = ref(false)
const user = ref(null)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  mobileSearchOpen.value = false
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const toggleMobileSearch = () => {
  mobileSearchOpen.value = !mobileSearchOpen.value
  mobileMenuOpen.value = false
}

const handleOpenCartFromMobile = () => {
  closeMobileMenu()
  openCarrito()
}

const logout = async () => {
  await supabase.auth.signOut()
  await clearCart()
  user.value = null
  closeMobileMenu()
}

// Bloquear el scroll de fondo cuando el menú lateral esté abierto
watch(mobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Cerrar menú automáticamente cuando cambie la ruta
watch(
  () => route.fullPath,
  () => {
    closeMobileMenu()
  },
)

onMounted(async () => {
  const { data } = await supabase.auth.getUser()
  user.value = data.user

  supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user || null
  })
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
nav a.router-link-exact-active {
  font-weight: 700 !important;
  color: #000000 !important;
}

.drawer-link.router-link-exact-active {
  background-color: rgba(10, 35, 66, 0.06);
  color: #0a2342 !important;
  font-weight: 700 !important;
}
</style>
