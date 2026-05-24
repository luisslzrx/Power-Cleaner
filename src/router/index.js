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
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {
      top: 0,
    }
  },
})

export default router
