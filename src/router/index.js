import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'
import ProductIndex from '@/views/products/Index'
import ProductShow from '@/views/products/Show.vue'
import ProductCreate from '@/views/products/Create.vue'
import ProductEdit from '@/views/products/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: () => import('../views/auth/password/ForgotPassword')
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    component: () => import('../views/auth/password/ResetPassword')
  },
  {
    path: '/products',
    name: 'Product',
    component: ProductIndex
  },
  {
    path: '/products/create',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path: '/products/:id/show',
    name: 'showProduct',
    component: ProductShow
  },
  {
    path: '/products/:id/edit',
    name: 'ProductEdit',
    component: ProductEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
