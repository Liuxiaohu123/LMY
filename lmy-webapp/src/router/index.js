import Vue from "vue"
import VueRouter from "vue-router"

import LmyLonding from '../views/LmyLonding.vue'

import LmyHome from '../views/LmyHome.vue'
import LmyHomeFind from "../components/Find.vue"
import LmyHomeMy from "../components/My.vue"
import LmyHomeClass from "../components/Class.vue"

import LmyClass from '../views/LmyClass.vue'
import LmyClassActivity from "../components/Activity.vue"
import LmyClassDetails from "../components/Details.vue"
import LmyClassNews from "../components/News.vue"
import LmyClassResources from "../components/Resources.vue"
import LmyClassMember from "../components/Member.vue"

import Activited from '../components/Activited.vue'
import Activitying from '../components/Activitying.vue'
import AllActivity from '../components/AllActivity.vue'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    { path: "", redirect: "/londing" },
    { path: "/londing", component: LmyLonding },
    {
      path: "/lmyHome",
      component: LmyHome,
      children: [
        { path: "", redirect: "class" },
        { path: "class", component: LmyHomeClass },
        { path: "my", component: LmyHomeMy },
        { path: "find", component: LmyHomeFind }
      ]
    },
    {
      path: "/lmyClass",
      component: LmyClass,
      children: [
        {path: "",redirect:"activity"},
        { path: "details", component: LmyClassDetails },
        { path: "news", component: LmyClassNews },
        { path: "resources", component: LmyClassResources },
        { path: "member", component: LmyClassMember },
        {
          path: "activity",
          component: LmyClassActivity,
          children: [
            {path: "",redirect:"allActivity"},
            { path: "allActivity", component: AllActivity },
            { path: "activitying", component: Activitying },
            { path: "activited", component: Activited, }
          ]
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next)=>{
  // window.console.log(to.path,from.path);
  if(to.path=='/lmyClass/activity/allActivity' &&from.path=='/lmyHome/class'){
    let num = to.query.id
    sessionStorage.setItem("num",num);
  }
  next();
})

export default router
