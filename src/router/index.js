import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Panel from "@/components/Panel.vue";
import Categorias from "@/components/Categorias.vue";






const routes = [
{
  path: "/",
  component: Login,
},
{
  path: "/login",
  component: Login,
},
{
  path: "/register",
  name: "Register",
  component: Register,
},
{
  path: "/panel",
  name: "panel",
  component: Panel,
},
{
  path: "/categorias",
  name: "categorias",
  component: Categorias,
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;