import { createRouter, createWebHashHistory } from "vue-router";

import ContactViewVue from "@/views/ContactView.vue";
import HomeViewVue from "@/views/HomeView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: ContactViewVue,
      path: "/contact",
    },
    {
      component: HomeViewVue,
      path: "/",
    },
  ],
});
