<template>
  <div class="home">
    <!-- search start -->
    <search></search>
    <!-- search end -->
    <!-- nav start -->
    <van-tabs animated swipeable :sticky='true' class="fixed-top" :swipe-threshold='6' >
      <van-tab v-for="(item,index) in nav" :title="item.name" :key="index">
        <!-- popular 热门组件 -->
        <popular v-show="index==0"></popular>
        <!-- clothing 衣服组件 -->
        <clothing v-show="index==1"></clothing>
      </van-tab>
    </van-tabs>
    <!-- nav end -->
    <!-- tabbar start  -->
    <tabbar></tabbar>
    <!-- tabbar end -->
    <dialoging></dialoging>
  </div>
</template>
<script>
import Search from "@/components/comom/Search"
import Tabbar from "@/components/comom/Tabbar";
import Popular from "./base/Popular";
import Clothing from "./base/Clothing";
import Dialog from "@/components/comom/Dialog"
export default {
  name: "Home",
  components: {
    Popular,
    Clothing,
    Tabbar,
    Search,
    Dialoging:Dialog
  },
  data() {
    return {
      active: 0,
      nav: [
        {
          name: "热门",
          id: 1
        },
        {
          name: "女装",
          id: 2
        },
        {
          name: "百货",
          id: 3
        },
        {
          name: "母婴",
          id: 4
        },
        {
          name: "手机",
          id: 5
        },
        {
          name: "鞋包",
          id: 6
        },
        {
          name: "电器",
          id: 7
        },
        {
          name: "水果城",
          id: 8
        },
        {
          name: "家具",
          id: 9
        }
      ]
    };
  },
  created(){
    this.$store.state.dialogShow = true
    localStorage.getItem('dialogshow',this.$store.state.dialogShow)
  }
};
</script>
<style lang="less" scoped>
.home /deep/ .van-tab {
  padding: 0;
}
.home /deep/ .van-tab--active {
  color: #e02e24;
  font-weight: 700;
}
.home /deep/ .fixed-top{
  .van-sticky--fixed{
    top: 53px;
  }
}
</style>