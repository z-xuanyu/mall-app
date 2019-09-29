<template>
  <!-- tabbar start -->
  <van-tabbar v-model="active" active-color="#e02e24" inactive-color="#000">
    <van-tabbar-item to="/" icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item to="/recommend" icon="send-gift-o">推荐</van-tabbar-item>
    <van-tabbar-item to="/classification" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item to="/shopping-cart" icon="shopping-cart-o" info='3'>购物车</van-tabbar-item>
    <van-tabbar-item to="/personal" icon="friends-o">个人中心</van-tabbar-item>
  </van-tabbar>
  <!-- tabbar end-->
</template>
<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0
    }
  }
};
</script>