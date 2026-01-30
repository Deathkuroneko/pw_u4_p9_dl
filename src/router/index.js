import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutComponentView.vue'

const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
