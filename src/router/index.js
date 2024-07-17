import { createRouter, createWebHistory } from 'vue-router'
import ConnectView from '../views/ConnectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ConnectView
    },
    {
      path: '/app',
      component: () => import('@/layouts/AppLayout.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/DashboardView.vue')
        },
        {
          path: 'analysis',
          name: 'analysis',
          component: () => import('@/views/AnalysisView.vue')
        },
        {
          path: 'devices',
          name: 'devices',
          component: () => import('@/views/DevicesView.vue')
        },
        {
          path: 'alerts',
          name: 'alerts',
          component: () => import('@/views/AlertsView.vue')
        }
      ]
    }
  ]
})

export default router
