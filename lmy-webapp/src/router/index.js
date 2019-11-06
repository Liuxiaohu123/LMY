import Vue from "vue"
import VueRouter from "vue-router"

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
    { path: "/", redirect: "/lmyHome" },
    {
      path: "/lmyHome",
      component: LmyHome,
      children: [
        { path: "/lmyHome/", redirect: "/LmyHome/class" },
        { path: "/lmyHome/class", component: LmyHomeClass },
        { path: "/lmyHome/my", component: LmyHomeMy },
        { path: "/lmyHome/find", component: LmyHomeFind }
      ]
    },
    {
      path: "/lmyClass",
      component: LmyClass,
      children: [
        {path: "/lmyClass/",redirect:"/lmyClass/activity"},
        {
          path: "/lmyClass/activity",
          component: LmyClassActivity,
          children: [
            {path: "/lmyClass/activity/",redirect:"/lmyClass/activity/allActivity"},
            { path: "/lmyClass/activity/allActivity", component: AllActivity },
            { path: "/lmyClass/activity/activitying", component: Activitying },
            { path: "/lmyClass/activity/activited", component: Activited, }
          ]
        },
        { path: "/lmyClass/details", component: LmyClassDetails },
        { path: "/lmyClass/news", component: LmyClassNews },
        { path: "/lmyClass/resources", component: LmyClassResources },
        { path: "/lmyClass/member", component: LmyClassMember }
      ]
    },
  ]
})

export default router
