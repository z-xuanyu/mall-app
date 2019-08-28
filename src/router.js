import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//路由
const home = ()=> import('./views/home/Home.vue')
const detail = ()=> import('./components/comom/Detail.vue')
const recommend = ()=> import('./views/recommend/Recommend.vue')
const classifcation = ()=> import('./views/classification/Classifcation.vue')
const chat = ()=> import('./views/chat/Chat.vue')

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/detail",
      name: "detail",
      component: detail
    },
    {
      path: "/recommend",
      name: "recommend",
      component: recommend
    },
    {
      path: "/classifcation",
      name: "classifcation",
      component: classifcation
    },
    {
      path: "/chat",
      name:"chat",
      component:chat
    },
    {
      path:"/dialog",
      name:'dialog',
      component:()=> import('./components/comom/Dialog.vue')
    }
  ]
});
