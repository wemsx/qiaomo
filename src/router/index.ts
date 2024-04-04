import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import SettingPage from '@/components/SettingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomePage
    },
    {
      path: '/settings',
      name: 'setting',
      component: SettingPage
    }
  ]
})

export default router
