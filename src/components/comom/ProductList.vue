<template>
  <div class="product-list">
    <van-grid :border="false" :column-num="2">
      <van-grid-item class="product-item" v-for="item in 20" :key="item">
          <div class="product-img">
              <img src="http://t00img.yangkeduo.com/goods/images/2019-08-07/73d21936-d6b6-4520-98f8-85c34b981bca.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp">
          </div>
          <div class="product-info">
              <div class="product-name">
                  迷你无线蓝牙耳机苹果入耳式游戏iphone安卓华为vivo小米oppo通用
              </div>
              <div class="shipping">
                  退货包运费
              </div>
              <div class="product-price">
                  <i>¥</i>
                  <em>69</em>
                  <span>已拼4.6万件</span>
              </div>
          </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  props: {
    productdata: Array
  },
  name: "ProductList"
};
</script>
<style lang="less" scoped>
.product-list /deep/ .van-grid-item__content--center{
    padding: 0;
    background-color: #fff;
    width: 99%;
}
.product-list{
    margin-top: 10px;
    padding-bottom: 40px;
    .product-item{
        padding: 0;
        height: 264px;
       margin-top: 2px;
       position: relative;
       .product-img{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
           height: 186px;
           width: 100%;
           img{
               width: 100%;
           }
       }
       .product-info{
           position: absolute;
           bottom: 0;
           left: 0;
           right: 0;
           padding: 6px 8px 7px;
           .product-name{
               max-height: 18px;
               font-size: 13px;
               line-height: 18px;
               overflow: hidden;
           }
           .shipping{
               margin-top: 4px;
               line-height: 14px;
               font-size: 11px;
               color: rgb(255, 87, 6);
           }
           .product-price{
               margin-top: 4px;
               height: 24px;
               display: flex;
               align-items: center;
               i{
                   color: #e02e24;
                   margin-right: 1px;
                   font-size: 12px;
               }
               em{
                   color: #e02e24;
                   font-weight: 500;
                   font-size: 18px;
               }
               span{
                   margin-left: 4px;
                   color: #9c9c9c;
                   font-size: 12px;
               }
           }
       }
    }
}
</style>