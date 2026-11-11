import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Producto from '@/views/Producto.vue'
import Tienda from '@/views/Tienda.vue'
import { updateSEO } from '@/utils/seo'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio,
      meta: {
        title: 'Power Cleaner | Productos y Artículos de Limpieza',
        description:
          'Descubre Power Cleaner, tu tienda de productos y artículos de limpieza. Encuentra soluciones de calidad de nuestra marca y otras marcas para cada necesidad.',
        keywords:
          'Power Cleaner, productos de limpieza, artículos de limpieza, tienda de productos de limpieza',
      },
    },
    {
      path: '/tienda',
      name: 'Tienda',
      component: Tienda,
      meta: {
        title: 'Tienda en Línea | Power Cleaner - Catálogo de Productos de Limpieza',
        description:
          'Explora nuestra tienda en línea Power Cleaner. Compra productos y artículos de limpieza de alta calidad para el hogar, negocios e industria con envío a todo México.',
        keywords:
          'tienda de productos de limpieza, comprar productos de limpieza, catálogo Power Cleaner, artículos de limpieza online, productos de limpieza México',
      },
    },
    {
      path: '/producto/:id',
      name: 'Producto',
      component: Producto,
      meta: {
        title: 'Cargando producto... | Power Cleaner',
        description:
          'Consulta detalles, precios y presentaciones de productos de limpieza en Power Cleaner.',
        keywords:
          'Power Cleaner, producto de limpieza, comprar producto de limpieza',
      },
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
      meta: {
        title: 'Nosotros | Conoce Power Cleaner y Nuestra Marca',
        description:
          'Conoce Power Cleaner, nuestra historia y compromiso con la limpieza. Ofrecemos productos y soluciones de calidad para hogares, negocios y más.',
        keywords:
          'Nosotros Power Cleaner, marca Power Cleaner, empresa de productos de limpieza',
      },
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
      meta: {
        title: 'Contacto | Power Cleaner - Productos de Limpieza',
        description:
          'Contacta a Power Cleaner para resolver tus dudas sobre nuestros productos de limpieza, solicitar información y recibir atención personalizada.',
        keywords:
          'Contacto Power Cleaner, contactar Power Cleaner, atención Power Cleaner',
      },
    },
    {
      path: '/maquila-tu-producto',
      name: 'MaquilaTuProducto',
      component: () => import('@/views/MaquilaTuProducto.vue'),
      meta: {
        title: 'Maquila de Productos de Limpieza | Crea tu Marca con Power Cleaner',
        description:
          'Crea tu propia marca de productos de limpieza con la calidad de Power Cleaner. Desarrollamos y fabricamos tus fórmulas químicas con alta tecnología, envasado y asesoría.',
        keywords:
          'maquila de productos de limpieza, fabricar productos de limpieza, crear marca de limpieza, laboratorio de limpieza química, maquiladora de químicos, Power Cleaner maquila',
        image: '/src/assets/images/maquila.webp',
      },
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
      alias: ['/surtimos-tu-local'],
      name: 'SurtimosTuNegocio',
      component: () => import('@/views/SurtimosTuNegocio.vue'),
      meta: {
        title: 'Surtimos tu Local y Negocio | Proveedor de Limpieza por Mayoreo | Power Cleaner',
        description:
          'Surtimos tu negocio, tienda o local con productos de limpieza Power Cleaner a granel o envasados. Precios directos de fábrica, excelente margen y máxima calidad.',
        keywords:
          'surtimos tu local, surtir negocio de limpieza, proveedor de productos de limpieza, venta a granel de limpieza, productos de limpieza por mayoreo, distribuidor Power Cleaner',
        image: '/src/assets/images/negocio.webp',
      },
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
      meta: {
        title: 'Venta de Franquicias de Limpieza | Emprende con Power Cleaner',
        description:
          'Adquiere una franquicia Power Cleaner y comienza un negocio rentable de productos de limpieza profesional con respaldo garantizado, capacitación y amplio catálogo.',
        keywords:
          'venta de franquicias, franquicia de productos de limpieza, franquicias rentables México, abrir tienda de limpieza, modelo de franquicia Power Cleaner',
        image: '/src/assets/images/franquicias.webp',
      },
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
    {
      path: '/gestion',
      name: 'Gestion',
      component: () => import('../views/GestionView.vue'),
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

// Control dinámico de SEO en cada cambio de ruta
router.afterEach((to) => {
  if (to.meta) {
    updateSEO(to.meta)
  }
})

export default router
