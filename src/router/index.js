import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Proyects from "../views/Proyects.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contactame",
    name: "contact",
    component: Contact,
  },
  {
    path: "/acerca-de-mi",
    name: "about",
    component: About,
  },
  {
    path: "/proyectos",
    name: "proyects",
    component: Proyects,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
