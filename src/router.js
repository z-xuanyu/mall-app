import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

//路由
const login = ()=> import('./views/login/Login.vue')   //登录页面
const home = ()=> import('./views/home/Home.vue')     //首页
    // 首页的二级路由
    const popular = ()=> import('./views/home/base/Popular.vue')   //首页的热门推荐
    const chothing = ()=> import('./views/home/base/Clothing.vue')  //首页的衣服
const detail = ()=> import('./components/comom/Detail.vue')        //商品详情
const recommend = ()=> import('./views/recommend/Recommend.vue')   //推荐
const classification = ()=> import('./views/classification/Classification.vue') //分类
const cart = () => import("./views/shoppingcart/Cart.vue")  //购物车
const pay = () => import("./views/shoppingcart/base/Pay.vue")  //创建订单
const payment = () => import("./views/shoppingcart/base/Payment.vue") //选择订单支付方式
const paysuccess = () => import("./views/shoppingcart/base/PaySuccess.vue") //支付成功页
const personal = ()=> import('./views/personal/Personal.vue') //个人中心
const news = ()=> import("./views/personal/base/News.vue")   //个人中心 news信息
const set = () => import("./views/personal/base/Set.vue")    //个人中心 设置
const dialog = () => import("./components/comom/Dialog.vue")  //首页弹出层
const address = () => import("./views/Address/address.vue")   //收货地址
const addressedit = () => import("./views/Address/base/AddressEdit.vue") // 编辑收货地址

const router = new Router({
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
      path: "/classification",
      name: "classification",
      component: classification
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
    },
    {
      path: "/personal",
      name: "personal",
      component: personal,
      beforeEnter: (to, from, next) => {
        const isLogin = localStorage.mall_app ? true : false;
        isLogin ? next() : next("/login");
      }
    },
    {
      path: "/personal/news",
      name: "news",
      component: news
    },
    {
      path: "/shopping-cart",
      name: "cart",
      component: cart
    },
    {
      path:"/pay",
      name:"pay",
      component:pay
    },
    {
      path:"/pay/payment",
      name:"payment",
      component:payment
    },
    {
      path:"/pay/paysuccess",
      name:"paysuccess",
      component:paysuccess
    },
    {
      path: "/address",
      name: "address",
      component: address
    },
    {
      path: "/addressedit",
      name: "addressedit",
      component: addressedit
    },
    {
      path:"/personal/set",
      name:"ser",
      component:set
    }
  ]
});
// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.mall_app ?true:false;
//   if(to.path == "/login"){
//     next()
//   }else{
//     isLogin?next():next("/login");
//   }
// })
export default router;
