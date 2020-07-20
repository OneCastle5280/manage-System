import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/common/Home.vue'
import dashboard from '../components/pages/dashboard.vue'

Vue.use(VueRouter)

// 用来解决route重复点菜单会报错的问题（重写了路由的push方法）
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

  const routes = [  
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[{
      path:'/dashboard',
      component: dashboard
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
