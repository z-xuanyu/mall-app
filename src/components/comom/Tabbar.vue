<template>
  <!-- 底部导航 -->
  <van-tabbar v-model="active" active-color="#e02e24" inactive-color="#000">
    <van-tabbar-item to="/" icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item to="/recommend" icon="send-gift-o">推荐</van-tabbar-item>
    <van-tabbar-item to="/classification" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item to="/shopping-cart" icon="shopping-cart-o" info='3'>购物车</van-tabbar-item>
    <van-tabbar-item to="/personal" icon="friends-o">个人中心</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0, //tabber 默认状态
    }
  },
  watch: {
    // 监视当前路由，改变tabbar的状态
    $route(to){
      const path = to.path
      switch(path){
        case "/personal":
          this.active = 4;
          break;
        case "/shopping-cart":
          this.active = 3;
          break;
        case "/pay/paysuccess":
          this.active = 3;
          break;
        case "/classification":
          this.active = 2;
          break;
        case "/recommend":
          this.active = 1;
          break;
        default:
          this.active = 0;
          break
      }
      
    }
  },
};
</script>