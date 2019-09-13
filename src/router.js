import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};


//路由
const login = ()=> import('./views/login/Login.vue')
const home = ()=> import('./views/home/Home.vue')
    // 首页的二级路由
    const popular = ()=> import('./views/home/base/Popular.vue')
    const chothing = ()=> import('./views/home/base/Clothing.vue')
const detail = ()=> import('./components/comom/Detail.vue')
const recommend = ()=> import('./views/recommend/Recommend.vue')
const classifcation = ()=> import('./views/classification/Classifcation.vue')
const chat = ()=> import('./views/chat/Chat.vue')
const dialog = () => import("./components/comom/Dialog.vue")

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      redirect: "/popular",
      // 首页的二级路由
      children: [
        {
          path: "/popular",
          name: "popular",
          component: popular
        },
        {
          path: "/chothing",
          name: "chothing",
          component: chothing
        }
      ]
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
      name: "chat",
      component: chat
    },
    {
      path: "/dialog",
      name: "dialog",
      component: dialog
    },
    {
      path: "/login",
      name: "login",
      component: login
    }
  ]
});
