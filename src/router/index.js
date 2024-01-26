import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 重定向
    path: '/',
    redirect: '/login',
  },
  {
    path: '/404',
    component: () => import('../views/error-page/index.vue'),
  },
  // 登录主页
  {
    path: '/homepage',
    name: 'homepage',
    redirect: 'login',
    component: () => import('../views/login/index.vue'),
    children: [
      {
        //登录页
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue')
      },
      {
        //注册页
        path: '/register',
        name: 'register',
        component: () => import('../views/register/register.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
