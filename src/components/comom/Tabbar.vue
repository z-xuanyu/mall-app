<template>
  <!-- tabbar start -->
  <van-tabbar v-model="$store.tabactive" active-color="#e02e24" inactive-color="#000">
    <van-tabbar-item to="/" icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item to="/recommend" icon="send-gift-o">推荐</van-tabbar-item>
    <van-tabbar-item to="/classifcation" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item to="/chat" icon="chat-o">聊天</van-tabbar-item>
    <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
  </van-tabbar>
  <!-- tabbar end-->
</template>
<script>
export default {
  name: "Tabbar",
  data() {
    return {
    }
  },
};
</script>