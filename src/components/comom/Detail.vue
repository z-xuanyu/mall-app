<template>
  <div class="detail">
    <!-- 详细商品轮播图 开始-->
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(item,index) in swiperdata" :key="index" @click="handleClick">
        <img v-lazy="item" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{swiperdata.length}}</div>
    </van-swipe>
    <!-- 详细商品轮播图 结束 -->
    <!-- 轮播图预览 显示与隐藏 开始 -->
    <van-image-preview v-model="show" :images="swiperdata" @change="onChange">
      <template v-slot:index>{{ current +1}}/{{swiperdata.length}}</template>
    </van-image-preview>
    <!-- 轮播图预览 显示与隐藏 开始 -->

    <!-- 商品title 开始 -->
    <div class="detail-title-wrap">
      <!-- 商品价格 -->
      <div class="price">
        <div class="price-info">
          <i>￥</i>
          <em>2.43</em>
          <span>起</span>
          <del>￥41</del>
        </div>
        <div class="regular-text">总售10万+件</div>
      </div>
      <!-- 分期付款 -->
      <div class="installment-desc">
        支持分期，低至169.76元/期
      </div>
      <!-- 商品名称与标题 -->
      <div class="goods-name">
        <span><img src="http://t00img.yangkeduo.com/goods/images/2018-11-13/820ba4922bfecc443fcc9b07f7373d22.png?imageMogr2/quality/70"></span>
        <span>小天鹅10公斤KG洗衣机全自动家用滚筒 变频智能静音 TG100V120WDG</span>
        <span>送货入户并安装</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      current: 0, //轮播切换器数值
      show: false, //点击轮播图时图片的弹出显隐
      swiperdata: [
        "http://t00img.yangkeduo.com/goods/images/2019-07-27/6197ca10-8390-417e-b1a5-34a4e8e6c63b.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
        "http://t00img.yangkeduo.com/goods/images/2019-07-27/7985c3ca-0f7e-4056-bf16-bad06312641a.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
        "http://t00img.yangkeduo.com/goods/images/2019-07-27/715cf4a2-67bd-4572-8024-abe666bed248.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
        "http://t00img.yangkeduo.com/goods/images/2019-07-16/a9a24f20-c8d2-43cd-b34a-b8174beb2af5.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
        "http://t00img.yangkeduo.com/goods/images/2019-07-27/e46e6525-72cb-4708-9fea-d3a59987d452.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80"
      ]
    };
  },
  methods: {
    onChange(index) {
      this.index = index;
      this.current = index;
    },
    handleClick() {
      this.show = true;
      this.swiperdata.length;
    }
  }
};
</script>
<style lang="less" scoped>
.detail {
  .van-swipe {
    height: 375px;
    img {
      width: 100%;
    }
    .custom-indicator {
      position: absolute;
      bottom: 13px;
      right: 13px;
      font-size: 13px;
      color: #fff;
    }
  }
  //商品的标题
  .detail-title-wrap{
    padding: 11px 5px 0;
    // 商品价格
    .price{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price-info{
        i{
          font-size: 15px;
          color: #e02e24;
          font-weight: 700;
        }
        em{
          color: #e02e24;
          font-size: 28px;
          font-weight: 700;
        }
        span{
          font-size: 12px;
          color: #e02e24;
        }
        del{
          text-decoration: line-through;
          font-size: 14px;
          color: #58595b;
        }
      }
      .regular-text{
        font-size: 13px;
        color: #58595b;
      }
    }
    // 分期付款
    .installment-desc{
      font-size: 13px;
      line-height: 13px;
      color: #e02e24;
      margin: 8px 12px 0;
    }
    // 商品名称与标题
    .goods-name{
      // line-height: 140px;
      color: #151516;
      overflow: hidden;
      font-weight: 700;
      padding: 8px 12px 1px;
      text-align: justify;
      max-height: 41rem;
      font-size: 15px;
    }
  }
}
</style>