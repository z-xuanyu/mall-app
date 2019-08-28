<template>
  <div class="classifcation">
    <!-- search start -->
    <search></search>
    <!-- search end -->
    <!-- classifcation-list start -->
    <div class="classifcation-list">
      <!-- slide start -->
      <div ref="wrapper">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="百货" />
          <van-sidebar-item title="女装" />
          <van-sidebar-item title="鞋包" />
          <van-sidebar-item title="百货" />
          <van-sidebar-item title="女装" />
          <van-sidebar-item title="鞋包" />
          <van-sidebar-item title="百货" />
          <van-sidebar-item title="女装" />
          <van-sidebar-item title="鞋包" />
          <van-sidebar-item title="百货" />
          <van-sidebar-item title="女装" />
          <van-sidebar-item title="鞋包" />
        </van-sidebar>
      </div>
      <!-- slide end-->
      <!-- list-item start -->
      <div class="list-item-wrap" ref="list-item-wrap">
        <div class="list-item">
          <div class="list-item-title">
            <span>百货</span>
            <span>查看更多></span>
          </div>
          <img
            class="item-img"
            src="//t00img.yangkeduo.com/goods/images/2019-08-22/29d3715d25c46bb6cf58f27a8b1fb01d.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80"
          />
          <van-grid :column-num="3" :border="false">
            <van-grid-item v-for="value in 15" :key="value" icon="photo-o" text="百货" />
          </van-grid>

          <div class="list-item-title">
            <span>百货</span>
            <span>查看更多></span>
          </div>
          <img
            class="item-img"
            src="//t00img.yangkeduo.com/goods/images/2019-08-22/29d3715d25c46bb6cf58f27a8b1fb01d.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80"
          />
          <van-grid :column-num="3" :border="false">
            <van-grid-item v-for="value in 15" :key="value" icon="photo-o" text="百货" />
          </van-grid>
        </div>
      </div>

      <!-- list-item end -->
    </div>
    <!-- classifcation end  -->
    <!-- tabbar start  -->
    <tabbar></tabbar>
    <!-- tabbar end -->
  </div>
</template>
<script>
import Search from "@/components/comom/Search";
import Tabbar from "@/components/comom/Tabbar";
import BScroll from "@better-scroll/core";
export default {
  name: "Classifcation",
  data() {
    return {
      activeKey: 0,
      scroll: null //better-scroll
    };
  },
  components: {
    Search,
    Tabbar
  },
  mounted() {
    this.init(); //初始化 better-scroll
    console.log(this.$refs.wrapper);
  },
  beforeDestroy() {
    this.scroll.destroy(); //摧毁 better-scroll
  },
  methods: {
    init() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        click: true,
        probeType: 3
      });
    }
  }
};
</script>
<style lang="less" scoped>
.classifcation {
  .classifcation-list {
    display: flex;
    .list-item {
      flex: 1;
      padding: 5px;
      box-sizing: border-box;
      .list-item-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 37px;
        font-size: 16px;
        color: #58595b;
      }
      .item-img {
        width: 100%;
      }
    }
  }
}
</style>