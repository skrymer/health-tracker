// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'weight/statistics',
        name: 'WeightStatistics',
        component: () => import(/* webpackChunkName: "weight-statistics" */ '@/views/WeightStatisticsView.vue'),
      },
      {
        path: 'weight/create',
        name: 'CreateWeightMeasurementView',
        component: () => import(/* webpackChunkName: "create-weight-measurement" */ '@/views/CreateWeightMeasurementView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
