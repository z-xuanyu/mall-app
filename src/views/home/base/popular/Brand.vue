<template>
  <div class="brand">
    <div class="brand-wrap">
      <div class="brand-let">
        <h4 class="title">品牌特卖</h4>
        <div class="subtitle">宝路狗粮5折起</div>
      </div>
      <div class="brand-right">
          <div class="brand-img" v-for="(item,index) in brandData" :key="index">
              <img :src="item.img">
              <div class="discount-tag">
                  {{item.discount}}折
              </div>
          </div>
      </div>
    </div>
    <img class="ad-img" src="http:////t00img.yangkeduo.com/goods/images/2019-08-16/81403bc74327d86484aa07e2d4cf6f0c.gif?imageView2/2/w/1300/q/70/format/webp">
  </div>
</template>
<script>
export default {
  name: "PopularBrand",
  data() {
    return {
        brandData:[  //热门页面品牌组件数据
            {
                img:'http://t16img.yangkeduo.com/img_check/2019-07-23/dc05d8344b7586c48547e08499e1b69f.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp',
                discount:'2.7'
            },
            {
                img:'http://t00img.yangkeduo.com/goods/images/2019-04-10/8fe892eda18598bc7bfa3c79a9624b59.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp',
                discount:'0.8'
            },
            {
                img:'http://t00img.yangkeduo.com/goods/images/2019-02-28/879f25ad445643b93fa11627e3acad3e.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp',
                discount:'2.3'
            },
            {
                img:'http:////t00img.yangkeduo.com/goods/images/2018-08-28/bfa9ccf79fce8172c76d333f47c436bc.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp',
                discount:'8.6'
            },
        ]
    };
  }
};
</script>
<style lang="less" scoped>
.brand {
  margin-top: 10px;
  .brand-wrap {
    padding: 10px 6px 10px 14px;
    display: flex;
    background-color: #fff;
    .brand-let{
        width: 120px;
        margin-top: 8px;
        .title{
            font-size: 16px;
            font-weight: 700;
        }
        .subtitle{
            width: 100px;
            height: 20px;
            background: linear-gradient(90deg,#ef4961 0,#ff634a);
            font-size: 13px;
            line-height: 20px;
            margin-top: 8px;
            color: #fff;
            text-align: center;
            border-radius: 3px;
        }
    }
    .brand-right{
        display: flex;
        flex: 1;
        justify-content: space-between;
        .brand-img{
            position: relative;
            width: 54px;
            height: 54px;
            border: 1px solid #ddd;
            img{
                width: 100%;
            }
            .discount-tag{
                position: absolute;
                left: 0;
                bottom: 0;
                width: 28px;
                height: 12px;
                padding: 0 1.6px;
                background: linear-gradient(90deg,#ffecd4 0,#ffd095);
                color: #333;
                font-size: 8.8px;
                text-align: center;
                line-height: 12px;
            }
        }
    }
  }
  .ad-img{
      width: 100%;
      margin-top: 10px;
  }
}
</style>