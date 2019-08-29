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
      <div class="installment-desc">支持分期，低至169.76元/期</div>
      <!-- 商品名称与标题 -->
      <div class="goods-name">
        <span>
          <img
            src="http://t00img.yangkeduo.com/goods/images/2018-11-13/820ba4922bfecc443fcc9b07f7373d22.png?imageMogr2/quality/70"
          />
        </span>
        <span>小天鹅10公斤KG洗衣机全自动家用滚筒 变频智能静音 TG100V120WDG</span>
        <span class="tag" @click="showTag">送货入户并安装</span>
      </div>
      <!-- 优惠卷 -->
      <div class="coupon">
        <div class="coupon-top" @click="handleCouponShow">
          <div class="tap">
            <van-tag type="danger">领卷</van-tag>
            <van-tag color="#f2826a" plain>5元无门槛卷</van-tag>
          </div>
        </div>
        <div class="coupon-bottom">
          <span>全国联保</span>
          <span>全场包邮</span>
          <span>7天退换</span>
          <span>48小时发货</span>
        </div>
      </div>
    </div>
    <!--商品评价 -->
    <div class="goods-evaluate">商品评价</div>
    <!-- 商品导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <!-- 弹出优惠卷 -->
    <van-popup v-model="couponShow" get-container="body" position="bottom" :style="{ height: '68%' }">
      <div class="coupon-concent">
        <h3>优惠卷详情</h3>
        <div class="receive">领取优惠卷</div>
        <div class="coupon-info">
          <div class="coupon-amount">
            <em>￥</em>
            <span>5</span>
          </div>
          <div class="coupon-info-desc">
            <div>5元无门槛券</div>
            <span>2019.6.9-2019.8.31</span>
          </div>
          <van-button type="warning">收藏并领取</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  name: "detail",
  data() {
    return {
      couponShow:false, //优惠卷显示隐藏
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
    },
    showTag() {  // 处理商品标题tag提示显示隐藏
      Dialog.alert({
        message: "品牌方售后电话报修，直达品牌售后",
        confirmButtonText: "我知道了",
        confirmButtonColor: "red"
      }).then(() => {
        // on close
      });
    },
    handleCouponShow(){ //处理优惠卷的弹出与隐藏
      this.couponShow = true;
    }
  }
};
</script>
<style lang="less" scoped>
.detail /deep/ .van-popup{
  .coupon-concent{
    padding: 10px;
  }
  
}
.detail /deep/ .van-tag--danger {
  margin-right: 5px;
}
.detail {
  // 预览图片轮播
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
  .detail-title-wrap {
    background-color: #fff;
    padding: 11px 5px 0;
    // 商品价格
    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price-info {
        i {
          font-size: 15px;
          color: #e02e24;
          font-weight: 700;
        }
        em {
          color: #e02e24;
          font-size: 28px;
          font-weight: 700;
        }
        span {
          font-size: 12px;
          color: #e02e24;
        }
        del {
          text-decoration: line-through;
          font-size: 14px;
          color: #58595b;
        }
      }
      .regular-text {
        font-size: 13px;
        color: #58595b;
      }
    }
    // 分期付款
    .installment-desc {
      font-size: 13px;
      line-height: 13px;
      color: #e02e24;
      margin: 8px 12px 0;
    }
    // 商品名称与标题
    .goods-name {
      height: 40px;
      font-size: 15px;
      font-weight: 700;
      line-height: 22px;
      padding: 0 5px;
      span {
        vertical-align: middle;
        img {
          width: 57px;
          height: 16px;
          margin-right: 2px;
        }
      }
      .tag {
        background-color: #25b513;
        font-size: 12px;
        color: #fff;
        border-radius: 2px;
        padding: 2px 4px;
        margin-left: 5px;
        height: 16px;
        vertical-align: middle;
        font-weight: normal;
      }
    }
    // 优惠卷
    .coupon {
      padding: 5px 0 5px 8px;
      .coupon-top {
        padding: 5px 0 10px;
        border-bottom: 1px solid #ddd;
      }
      .coupon-bottom {
        display: flex;
        height: 38px;
        font-size: 13px;
        align-items: center;
        span {
          margin-right: 10px;
        }
      }
    }
  }
  // 商品评价
  .goods-evaluate {
    margin-top: 10px;
    background-color: #fff;
  }
}
</style>