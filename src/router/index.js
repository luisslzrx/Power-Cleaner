import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Producto from '@/views/Producto.vue'
import Tienda from '@/views/Tienda.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio,
    },
    {
      path: '/tienda',
      name: 'Tienda',
      component: Tienda,
    },
    {
      path: '/producto/:id',
      name: 'Producto',
      component: Producto,
    },
    {
      path: '/buscar',
      name: 'Buscar',
      component: () => import('@/views/BusquedaView.vue'),
    },
    {
      path: '/nosotros',
      name: 'Nosotros',
      component: () => import('@/views/Nosotros.vue'),
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: () => import('@/views/Servicios.vue'),
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: () => import('@/views/Contacto.vue'),
    },
    {
      path: '/maquila-tu-producto',
      name: 'MaquilaTuProducto',
      component: () => import('@/views/MaquilaTuProducto.vue'),
    },
    {
      path: '/aviso-de-privacidad',
      name: 'AvisoPrivacidad',
      component: () => import('@/views/legal/AvisoPrivacidad.vue'),
    },
    {
      path: '/terminos-y-condiciones',
      name: 'TerminosCondiciones',
      component: () => import('@/views/legal/TerminosCondiciones.vue'),
    },
    {
      path: '/politica-de-envios',
      name: 'PoliticaEnvios',
      component: () => import('@/views/legal/PoliticaEnvios.vue'),
    },
    {
      path: '/surtimos-tu-negocio',
      name: 'SurtimosTuNegocio',
      component: () => import('@/views/SurtimosTuNegocio.vue'),
    },

    {
      path: '/success',
      name: 'success',
      component: () => import('../views/SuccessView.vue'),
    },
    {
      path: '/venta-de-franquicias',
      name: 'VentaDeFranquicias',
      component: () => import('../views/VentaDeFranquicias.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: () => import('../views/ProfileView.vue'),
    },
  ],

  // Control del desplazamiento (scroll) en las navegaciones:
  scrollBehavior(to, from, savedPosition) {
    // 1. Al presionar "Atrás" o "Adelante" en el navegador, restaura la posición exacta donde se quedó el usuario
    if (savedPosition) {
      return savedPosition
    }
    // 2. Si solo cambian los filtros (query params) en la misma ruta (ej. /tienda?category=...),
    // retornamos false para no mover la pantalla ni brincar hacia el banner superior
    if (to.path === from.path) {
      return false
    }
    // 3. Al entrar a una página o ruta distinta, posiciona la vista al inicio
    return { top: 0 }
  },
})

export default router
