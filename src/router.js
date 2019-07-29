import Vue from "vue";
import Router from "vue-router";
import MainView from "@/views/MainView.vue";
import contractorsRoutes from "@/modules/contractors/routes";
import devicesRoutes from "@/modules/devices/routes";
import mapRoutes from "@/modules/map/routes";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "",
      name: "main",
      component: MainView,
      meta: {
        isAuthenticated: true
      },
      children: [...contractorsRoutes, ...devicesRoutes, ...mapRoutes]
    }
  ]
});
export default router;
