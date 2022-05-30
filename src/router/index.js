import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Proyects from "../views/Proyects.vue";
import Contact from "../views/Contact.vue";
import Error404 from "../views/Error404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/proyectos",
    name: "proyects",
    component: Proyects,
  }, 
  {
    path: "/contactame",
    name: "contact",
    component: Contact,
  },
  {
    path: "/:pathMatch(.*)",
    name: "not-found",
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
