import { createRouter, createWebHashHistory } from "vue-router";

import CheckoutViewVue from "@/views/CheckoutView.vue";
import HomeViewVue from "@/views/HomeView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: CheckoutViewVue,
      path: "/checkout",
    },
    {
      component: HomeViewVue,
      path: "/",
    },
  ],
});
