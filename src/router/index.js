import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve(async (to, from, next) => {
  const path = await (to.fullPath !== "/auth");
  const isAuth = !store.state.isAuth;
  if (path && isAuth) {
    next("/auth");
    return;
  } else {
    next();
  }
});

export default router;
