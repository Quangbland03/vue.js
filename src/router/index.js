import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/user/Home.vue'
import User from '../layouts/User.vue'
import Login from '../views/user/Login.vue'
import Register from '../views/user/Register.vue'
import Detail from '../views/user/Detail.vue'
import Cart from '../views/user/Cart.vue'
import Admin from '../layouts/Admin.vue'
import Product from '../views/admin/Product.vue'
const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [
    {
      path:'/page',
      name:'Admin',
      component:Admin,
      redirect: '/page',
      children:[
          {
              path:'/page',
              name:'product',
              component:Product
          },
       
      ]
  },
    
    
    {
      path: '/',
      name: 'user',
      component: User,
      redirect: '/',
      children: [
        {
        path: '/',
        name: 'Home',
        component: Home
      }, 
      
      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart
      },
     
      
     
    ]
    },
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: Admin ,
    //   // redirect: '/admin',
      
    // },
    
  ]
})

export default router