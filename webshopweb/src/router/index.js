import {createRouter, createWebHistory} from 'vue-router'

// 路由列表
const routes = [
  {
    meta:{
      title: "webOnlineShop-home",
      keepAlive: true
    },
    path: "/",
    name: "Home",
    component: ()=> import("../views/Home.vue")
  },
  {
    meta:{
        title: "webOnlineShop-userLogin",
        keepAlive: true
    },
    path:'/login',      // uri访问地址
    name: "Login",
    component: ()=> import("../views/Login.vue")
  }
]

// 路由对象实例化
const router = createRouter({
  // history, 指定路由的模式
  history: createWebHistory(),
  // 路由列表
  routes,
});


// 暴露路由对象
export default router