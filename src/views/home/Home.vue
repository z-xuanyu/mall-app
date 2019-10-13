<template>
  <div class="home">
    <!-- 首页搜索框 -->
    <search></search>
    <!-- nav导航 -->
    <van-tabs animated swipeable :sticky='true' class="fixed-top" :swipe-threshold='6' @change='handleSwiperble'>
      <van-tab v-for="(item,index) in nav" :title="item.title" :key="index" :name='item.linkTo'>
        <router-view></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Search from "@/components/comom/Search"
export default {
  name: "Home",
  components: {
    Search
  },
  data() {
    return {
      // active: 0,
      nav: [
        {
          title: "热门",
          id: 1,
          linkTo:"popular"
        },
        {
          title: "女装",
          id: 2,
          linkTo:"chothing"
        },
        {
          title: "百货",
          id: 3,
          linkTo:"chothing"
        },
        {
          title: "母婴",
          id: 4,
           linkTo:"chothing"
        },
        {
          title: "手机",
          id: 5,
           linkTo:"chothing"
        },
        {
          title: "鞋包",
          id: 6,
           linkTo:"chothing"
        },
        {
          title: "电器",
          id: 7,
           linkTo:"chothing"
        },
        {
          title: "水果城",
          id: 8,
           linkTo:"chothing"
        },
        {
          title: "家具",
          id: 9,
           linkTo:"chothing"
        }
      ]
    };
  },
  created(){
    localStorage.getItem('dialogshow',this.$store.state.dialogShow)
  },
  methods:{
    handleSwiperble(linkTo){
      this.$router.push({
        name:linkTo
      })
    }
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