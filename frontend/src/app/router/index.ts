import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/user/BaseUserCabinet.vue'),
      children: [{ path: '', name: 'home', component: () => import('@/views/user/MainPage.vue') }]
    }
  ]
})

export default router
