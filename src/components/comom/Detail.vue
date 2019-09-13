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
    <van-image-preview v-model="previewShow" :images="swiperdata" @change="onChange">
      <template v-slot:index>{{ current +1}}/{{swiperdata.length}}</template>
    </van-image-preview>
    <!-- 轮播图预览 显示与隐藏 开始 -->

    <!-- 商品title 开始 -->
    <div class="detail-title-wrap" v-for="(item,index) in goodsItemData" :key="index">
      <!-- 商品价格 -->
      <div class="price">
        <div class="price-info">
          <i>￥</i>
          <em>{{item.minGroupPrice}}</em>
          <span>起</span>
          <del>￥{{item.maxGroupPrice}}</del>
        </div>
        <div class="regular-text">{{item.salesTip}}</div>
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
        <span>{{item.goodsName}}</span>
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
    <!-- 用户拼单 -->
    <single></single>
    <!--商品评价 -->
    <div class="goods-evaluate">商品评价</div>
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
          <van-button type="danger" size="small">收藏并领取</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Dialog } from "vant";
import Single from "./Single"
import { setTimeout } from 'timers';
export default {
  name: "detail",
  components:{
    Single
  },
  data() {
    return {
      couponShow:false, //优惠卷显示隐藏
      current: 0, //轮播切换器数值
      previewShow: false, //点击轮播图时图片的弹出显隐
      swiperdata: [], //商品banner
      goodsItemData:[] //商品的标题
    };
  },
  created(){
    setTimeout(()=>{
      this.getGoodsData() //获取商品详细页数据
    },2000)
  },
  methods: {
    onChange(index) {  //商品预览轮播index
      this.index = index;
      this.current = index;
    },
    handleClick() { 
      this.previewShow = true;
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
    },
    getGoodsData(){ //获取商品详细信息
      const goodsId = this.$route.query.goods_Id  //商品的id值
      this.$axios.get(`/99api/detail?apikey=C3B20706341F6390F227115655C32AFE&itemid=${goodsId}`)
      .then(({data:{data}})=>{
        console.log(data)
        const goodsBanner = data.item.banner; //商品banner图
        this.swiperdata = goodsBanner 
        const item = data.item   //解构出标题数据
        let goodsItemData = []  //商品标题数据
        goodsItemData.push({
            goodsName:item.goodsName,
            maxGroupPrice:item.maxGroupPrice,
            minGroupPrice:item.minGroupPrice,
            salesTip:item.salesTip
          })
        this.goodsItemData = goodsItemData
      }).catch((err)=>{
        console.log(err)
      })
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
    margin-bottom: 5px;
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