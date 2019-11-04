import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

let router = new VueRouter({

  //路由map集合 path : views component
  routes:[
      // {path:"/",redirect:"/list"}, // 设置首页
      // {path:"/list",component:News},
      // {path:"/detail",component:Detail} ,//?id=1&name=2
      // {name:"d", path:"/detail/:id",component:Detail} //?id= -/:id 参数占位
]
})

export default router
