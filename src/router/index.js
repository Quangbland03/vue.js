import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GioiThieu from '../views/GioiThieu.vue'
import Detail from '../views/Detail.vue'
import DaTrien from '../views/DaTrien.vue'
import Register from '../views/Register.vue'
import Login from '../views/login.vue'
import Cart from '../views/Cart.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/gioithieu',
      name: 'gioithieu',
      component: GioiThieu
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail,
    },
    {
      path: '/datrien',
      name: 'datrien',
      component: DaTrien
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
  ]
})

export default router
