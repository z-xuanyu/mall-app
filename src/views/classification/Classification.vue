<template>
  <div class="classification">
    <van-sticky>
      <div class="search">
        <search></search>
      </div>
    </van-sticky>
    <div class="slide-wrapper">
      <div class="menu-nav" ref="menu">
        <ul class="menu-list">
          <li
            class="item"
            @click="handleClickMenu(index)"
            v-for="(item,index) in 15"
            :key="index"
            :class="{'active':currentIndex === index}"
          >菜单栏{{index}}</li>
        </ul>
      </div>

      <div class="goods-content" ref="goods">
        <ul class="goods-list">
          <li class="goods-item" ref="goodsItem" v-for="(item,index) in 15" :key="index">
            <div class="title">
              <div class="name">菜单{{index}}</div>
              <div class="more">查看更多></div>
            </div>
            <img
              src="//t00img.yangkeduo.com/goods/images/2019-09-25/964271e39d17896d2f28020553957cdd.png?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
              alt
            />
            <div class="goods-grid">
              <van-grid :column-num="3">
                <van-grid-item v-for="(item,index) in 6" :key="index">
                  <van-image src="//t00img.yangkeduo.com/goods/images/2019-06-28/e455bb77-e7f3-4f4c-8303-96ead2c9fd69.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp" />
                  <span>日用百货</span>
                </van-grid-item>
              </van-grid>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Search from "@/components/comom/Search";
export default {
  name: "Classification",
  components: {
    Search
  },
  data() {
    return {
      goodsScrollY: 0, //商品列表滑动的y轴坐标
      goodsLiTops: [] //所有分类头部位置
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.init(); //初始化better-scroll
    });
  },
  beforeDestroy() {
    this.menuscroll.destroy();
    this.goodsscroll.destroy();
  },
  methods: {
    init() {
      //菜单栏scroll
      this.menuscroll = new BScroll(this.$refs.menu, {
        scrollY: true,
        click: true,
        probeType: 3
      });
      // 商品内容scroll
      this.goodsscroll = new BScroll(this.$refs.goods, {
        scrollY: true,
        click: true,
        probeType: 3
      });
      this.initGoodsHeight();
      this.goodsscroll.on("scroll", pos => {
        this.goodsScrollY = Math.abs(Math.round(pos.y));
      });
    },
    initGoodsHeight() {
      //计算每个goods-item的高度
      let itemArray = []; //定义一个伪数组
      let top = 0;
      itemArray.push(top);
      let allList = this.$refs.goods.getElementsByClassName("goods-item");
      Array.prototype.slice.call(allList).forEach(item => {
        top += item.clientHeight; //获取所有goods列表中li的每一个高度
        itemArray.push(top);
      });
      this.goodsLiTops = itemArray;
    },
    initMenuScroll(index) {
      //菜单栏与商品左右联动
      let goodsItem = this.$refs.goodsItem;
      let el = goodsItem[index];
      this.goodsscroll.scrollToElement(el, 200);
    },
    handleClickMenu(index) {
      //菜单栏点击切换
      this.goodsScrollY = this.goodsLiTops[index];
      this.goodsscroll.scrollTo(0, -this.goodsScrollY, 200);
    }
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.goodsLiTops.length; i++) {
        let height = this.goodsLiTops[i];
        let height2 = this.goodsLiTops[i + 1];
        if (
          !height2 ||
          (this.goodsScrollY >= height && this.goodsScrollY < height2)
        ) {
          return i;
        }
      }
      return 0;
    }
  }
};
</script>
<style lang="less" scoped>
.classification {
  .search {
    height: 50px;
  }
  .slide-wrapper {
    position: absolute;
    overflow: hidden;
    display: flex;
    top: 50px;
    bottom: 50px;
    left: 0;
    right: 0;
    border-top: 1px solid #ededed;
    .menu-nav {
      flex: 1;
      .item {
        height: 52px;
        background-color: #fff;
        padding: 5px;
        font-size: 15px;
        line-height: 52px;
        color: #666;
        text-align: center;
        position: relative;
      }
      .active {
        background-color: #fff;
        color: #e02e24;
        &::before {
          content: "";
          display: block;
          width: 4px;
          height: 26px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          background-color: #e02e24;
        }
      }
    }
    .goods-content {
      padding-top: 16px;
      flex: 3;
      background-color: #fff;
      .goods-list {
        color: #fff;
        .goods-item {
          padding: 0 10px;
          .title {
            height: 37px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            color: #58595b;
            font-size: 15px;
            align-items: center;
            .more {
              color: #959595;
              font-size: 14px;
            }
          }
          img {
            width: 262px;
          }
          .goods-grid {
            span{
              color: #151516;
              font-size: 13px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
</style>