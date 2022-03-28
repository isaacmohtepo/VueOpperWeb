import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";



const routes = [
{
  path: "/",
  name: "login",
  component: Login,
},
{
  path: "/login",
  name: "login",
  component: Login,
},
{
  path: "/register",
  name: "Register",
  component: Register,
},


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;