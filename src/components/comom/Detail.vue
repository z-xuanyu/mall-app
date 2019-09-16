<template>
  <div class="detail">
    <!-- 详细商品轮播图 -->
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(item,index) in swiperdata" :key="index" @click="handleClick">
        <img v-lazy="item" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{swiperdata.length}}</div>
    </van-swipe>
    <!-- 点击轮播图时预览商品图片 -->
    <van-image-preview v-model="previewShow" :images="swiperdata" @change="onChange">
      <template v-slot:index>{{ current +1}}/{{swiperdata.length}}</template>
    </van-image-preview>
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
    <div class="goods-evaluate">
      <div class="goods-evaluate-title">
        <div class="num">商品评价(334)</div>
        <div class="more">查看更多</div>
      </div>
      <!-- 评价tag -->
      <div class="tag">
        <span>质量很好(53)</span>
        <span>衣柜非常好看(898)</span>
        <span>便宜(10)</span>
      </div>
      <!-- 用户评价列表 -->
      <div class="list">
        <div class="item">
          <!-- 用户信息 -->
          <div class="item-title">
            <div class="user-info">
              <img
                class="avatar"
                src="http://t20img.yangkeduo.com/a/bcda50ed75b2798dcdb380b882e4bfc9190147b1-1544272880?imageMogr2/thumbnail/100x"
              />
              <div class="user-name">玄玉</div>
            </div>
          </div>
          <!-- 评价内容 -->
          <div class="concent">
            <div
              class="NF3gcjqR"
            >按装师傅很用力，技朮好，态度好。商家商品好，质量好，柜子没气味。这个价钱很实惠，比实货店便宜一仟元。衣柜比实货店整洁，光滑。我下次还会光临的，祝老板生意兴隆。</div>
          </div>
        </div>
        <div class="item">
          <!-- 用户信息 -->
          <div class="item-title">
            <div class="user-info">
              <img
                class="avatar"
                src="http://t20img.yangkeduo.com/a/bcda50ed75b2798dcdb380b882e4bfc9190147b1-1544272880?imageMogr2/thumbnail/100x"
              />
              <div class="user-name">玄玉</div>
            </div>
          </div>
          <!-- 评价内容 -->
          <div class="concent">
            <div
              class="NF3gcjqR"
            >按装师傅很用力，技朮好，态度好。商家商品好，质量好，柜子没气味。这个价钱很实惠，比实货店便宜一仟元。衣柜比实货店整洁，光滑。我下次还会光临的，祝老板生意兴隆。</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品的详细信息 -->
    <div class="goods-detail-info">
      <div class="title">
        <h3>商品详细</h3>
      </div>
      <div class="goods-img">
        <img v-for="(item,index) in goodsDataImgUrl" :key="index" :src="item.url" />
      </div>
    </div>
    <!-- 商品底部导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
      <van-goods-action-button type="warning" @click="handleSkuShow" text="加入购物车" />
      <van-goods-action-button type="danger" @click="handleSkuShow" text="立即购买" />
    </van-goods-action>

    <!-- 下单商品规格 -->
    <van-sku
      v-model="skuShow"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :price-tag="priceTag"
      :stepper-title="stepperTitle"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
    <!-- 弹出优惠卷 -->
    <van-popup
      v-model="couponShow"
      get-container="body"
      position="bottom"
      :style="{ height: '68%' }"
    >
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
import Single from "./Single";
import { setTimeout } from "timers";
export default {
  name: "detail",
  components: {
    Single
  },
  data() {
    return {
      couponShow: false, //优惠卷显示隐藏
      current: 0, //轮播切换器数值
      previewShow: false, //点击轮播图时图片的弹出显隐
      swiperdata: [], //商品banner
      goodsItemData: [], //商品的标题
      goodsDataImgUrl: [],
      skuShow: false,
      sku: {
        price: "1.00",
        stock_num: 227,
        none_sku: false,
        hide_stock: false,
        collection_id: 2261,
        tree: [
          {
            k: "颜色",
            k_id: "1",
            v: [
              {
                id: "30349",
                name: "黑色",
                imgUrl:""
              },
              {
                id: "1215",
                name: "白色",
                imgUrl:""
              }
            ],
            k_s: "s1"
          },
          // {
          //   k: "尺寸",
          //   k_id: "2",
          //   v: [
          //     {
          //       id: "1193",
          //       name: "M"
          //     },
          //     {
          //       id: "1194",
          //       name: "L"
          //     }
          //   ],
          //   k_s: "s2"
          // }
        ],
        list: [
          // {
          //   id: 2259,
          //   price: 100,
          //   s1: "1215",
          //   s2: "1193",
          //   stock_num: 110,
          //   goods_id: 946755
          // },
          // {
          //   id: 2260,
          //   price: 100,
          //   s1: "1215",
          //   s2: "1194",
          //   stock_num: 0,
          //   goods_id: 946755
          // },
          // {
          //   id: 2257,
          //   price: 100,
          //   s1: "30349",
          //   s2: "1193",
          //   stock_num: 111,
          //   goods_id: 946755
          // },
          // {
          //   id: 2258,
          //   price: 100,
          //   s1: "30349", //颜色id
          //   s2: "1194",  //尺码id
          //   stock_num: 6,
          //   goods_id: 946755
          // }
        ]
      },
      goods: {
        // 商品标题
        title: "测试标题",
        // 默认商品 sku 缩略图
        picture:""
      },
      goodsId: 98888,
      quota: 100, //商品限购
      quotaUsed: 9, //已经购买商品数量
      priceTag: "热销",
      stepperTitle: "数量"
    };
  },
  created() {
    setTimeout(() => {
      this.getGoodsData(); //获取商品详细页数据
    }, 2000);
  },
  methods: {
    //onBuyClicked
    onBuyClicked(e) {
      console.log(e)
    },
    //onAddCartClicked
    onAddCartClicked(e) {
      console.log(e)
    },
    handleSkuShow() {
      //处理下单sku的弹出
      this.skuShow = true;
    },
    onChange(index) {
      //商品预览轮播index
      this.index = index;
      this.current = index;
    },
    handleClick() {
      //点击轮播图时预览图片
      this.previewShow = true;
      this.swiperdata.length;
    },
    showTag() {
      // 处理商品标题tag提示显示隐藏
      Dialog.alert({
        message: "品牌方售后电话报修，直达品牌售后",
        confirmButtonText: "我知道了",
        confirmButtonColor: "red"
      }).then(() => {
        // on close
      });
    },
    handleCouponShow() {
      //处理优惠卷的弹出与隐藏
      this.couponShow = true;
    },
    getGoodsData() {
      //获取商品详细信息
      const goodsId = this.$route.query.goods_Id; //商品的id值
      this.goodsId = goodsId;
      this.$axios
        .get(
          `/99api/detail?apikey=C3B20706341F6390F227115655C32AFE&itemid=${goodsId}`
        )
        .then(({ data: { data } }) => {
          console.log(data);
          // sku商品规格img
          const imgUrl = data.item.thumbUrl //sku商品规格img
          this.goods.picture = imgUrl
        
          const skuData = data.item.skus  //商品的规格 sku
          let skuV = []
          let skuList = []
          skuData.forEach((item,index)=>{
            const [specs] = item.specs
            skuV.push({
              id:specs.spec_value_id,
              name:specs.spec_value,
              imgUrl:item.thumbUrl
            })

            skuList.push({
              s1:specs.spec_value_id.toString(),
              price:item.groupPrice * 100,
              stock_num:item.limitQuantity,
              id:item.skuID
            })
          })
          this.sku.tree[0].v = skuV
          this.sku.list = skuList
          const goodsDataimg = data.item.detail; //商品详细信息的图片
          let goodsImgUrl = []; //商品的详细信息图片url
          goodsDataimg.forEach(item => {
            //遍历请求过来的数组取到图片的url值
            goodsImgUrl.push({
              url: item.url
            });
          });
          this.goodsDataImgUrl = goodsImgUrl; //商品的详细信息图片url
          const goodsBanner = data.item.banner; //商品banner图
          this.swiperdata = goodsBanner;
          const item = data.item; //解构出标题数据
          let goodsItemData = []; //商品标题数据
          goodsItemData.push({
            goodsName: item.goodsName,
            maxGroupPrice: item.maxGroupPrice,
            minGroupPrice: item.minGroupPrice,
            salesTip: item.salesTip
          });
          this.goodsItemData = goodsItemData;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.detail /deep/ .van-popup {
  .coupon-concent {
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
    // 评价标题
    .goods-evaluate-title {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f2f2f2;
      padding: 10px;
      font-size: 14px;
      color: #666666;
    }
    // 评价tag
    .tag {
      padding: 10px;
      span {
        background-color: #fceae9;
        font-size: 14px;
        margin: 5px 3px;
        padding: 5px;
        border-radius: 3px;
        color: #58595b;
      }
    }
    // 评价列表
    .list {
      padding: 0 10px;
      // 用户评价信息
      .item {
        border-bottom: 1px solid #f2f2f2;
        margin-top: 5px;
        // 评价用户
        .user-info {
          display: flex;
          align-items: center;
          .avatar {
            width: 24px;
            height: 24px;
            border-radius: 50%;
          }
          .user-name {
            font-size: 13px;
            margin-left: 5px;
          }
        }
        // 商品评价内容
        .concent {
          padding: 5px;
          line-height: 22px;
          color: #58595b;
          font-size: 14px;
          max-height: 42px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
    }
  }
  //商品的详细的信息
  .goods-detail-info {
    margin-top: 5px;
    background-color: #fff;
    h3 {
      font-size: 15px;
      color: #151516;
      padding: 10px;
    }
    .goods-img {
      img {
        width: 100%;
      }
    }
  }
  // 商品sku
  .van-sku-container {
    height: auto;
  }
}
</style>