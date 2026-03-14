import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/cover/Home.vue'),
  },
  {
    path: '/wedding',
    name: 'Acara',
    component: () => import('@/views/informasi/acara/Acara.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
