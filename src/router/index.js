import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Panel from "@/components/Panel.vue";
import Categorias from "@/components/Categorias.vue";
import CrearCategoria from "@/components/CrearCategoria.vue";
import ActualizarCategoria from "@/components/ActualizarCategoria.vue";

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

{
  path: "/crear-categoria",
  name: "crear-categoria",
  component: CrearCategoria,
},

{
  path: "/actualizar-categoria/",
  name: "actualizar-categoria",
  component: ActualizarCategoria,
},


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;