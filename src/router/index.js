import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 加载组件，懒加载
const Profile =() => import('../views/Profile.vue')
const ShopCart =() => import('../views/ShopCart.vue')
const Category =() => import('../views/Category.vue')

// 注册路由组件
Vue.use(VueRouter)

// 创建路由映射表
  const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: ShopCart
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
