import { createRouter, createWebHistory } from 'vue-router'
import PróximamenteView from '@/views/PróximamenteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PróximamenteView
    }
  ],
})

export default router
