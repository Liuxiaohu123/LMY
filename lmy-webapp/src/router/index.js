import Vue from "vue"
import VueRouter from "vue-router"
import Find from "../components/Find.vue"
import My from "../components/My.vue"
import Class from "../components/Class.vue"
import Activity from "../components/Activity.vue"
import Details from "../components/Details.vue"
import News from "../components/News.vue"
import Resources from "../components/Resources.vue"
import Member from "../components/Member.vue"

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    { path: "/", redirect: "/Class" },
    { path: "/find", component: Find },
    { path: "/my", component: My },
    { path: "/class", component: Class },
    { path: "/activity", component: Activity },
    { path: "/details", component: Details },
    { path: "/news", component: News },
    { path: "/resources", component: Resources },
    { path: "/member", component: Member }
  ]
})

export default router
