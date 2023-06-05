// Composables
import { createRouter, createWebHistory } from "vue-router";
import { LoginCallback, navigationGuard } from "@okta/okta-vue";

const routes = [
  {
    path: "/login/callback",
    component: LoginCallback,
  },
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "user",
        name: "UserView",
        component: () =>
          import(/* webpackChunkName: "user-view" */ "@/views/UserView.vue"),
      },
      {
        path: "weight/statistics",
        name: "WeightStatistics",
        component: () =>
          import(
            /* webpackChunkName: "weight-statistics" */ "@/views/WeightStatisticsView.vue"
          ),
      },
      {
        path: "weight/create",
        name: "CreateWeightMeasurementView",
        component: () =>
          import(
            /* webpackChunkName: "create-weight-measurement" */ "@/views/CreateWeightMeasurementView.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(navigationGuard);

export default router;
