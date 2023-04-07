import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/maps/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/maps/auth",
    name: "auth",
    component: AuthView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath !== "/auth" && !store.state.isAuth) next("/auth");
  else next();
});

export default router;
