<template>
  <div class="icons">
    <van-swipe :loop='false'>
      <van-swipe-item v-for="(icons,index) in iconData" :key="index">
        <van-grid :border="false" :column-num="5">
          <van-grid-item v-for="(item,index) in icons" :key="index" class="icons_item">
               <van-image class="iconimg" :src="item.iconImgUrl" />
               <span class="name">{{item.name}}</span>
          </van-grid-item>
        </van-grid>
      </van-swipe-item>
    </van-swipe>
    <img class="popular-ad-img" src="http://t00img.yangkeduo.com/goods/images/2019-08-28/d66a9c476aea17ee3d1e163ca2425881.gif?imageView2/2/w/1300/q/70/format/webp">
  </div>
</template>
<script>
// import { match } from 'minimatch';
export default {
  name: "PopularIcons",
  data() {
    return {
      icons: [
        {
          name: "限时秒杀",
          iconImgUrl:
            "http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "断码清仓",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2018-12-22/b9851773573d1d682aa46d896de7f4fa.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "品牌馆",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2018-08-29/119a4937b493cc0fcc968a4545657922.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "多多果园",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-01-30/5667b3f1eaa8bb379303afb3934d1bc8.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "9块9特卖",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2018-10-07/c671f2c49805658697cc0f72fff87eb3.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "充值中心",
          iconImgUrl:
            "http://t05img.yangkeduo.com/images/2018-05-16/801ae189938526cdaf40935d07034c5e.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "百亿补贴",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-06-13/d3fd3a5b187bca651f8e65ae8a25c296.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "现金签到",
          iconImgUrl:
            "http://t01img.yangkeduo.com/images/2018-05-16/c2ba677bcd16ecad6c335e5e04a1cf1e.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "金猪赚大钱",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-02-05/1351e256a0319a6885761b937d06d581.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "电器城",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2018-10-28/27e48ad452991eeb8fd0559a0d3b60ff.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "9块9特卖",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2018-10-07/c671f2c49805658697cc0f72fff87eb3.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "助力抢免单",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-02-15/b329c4673337e18030f1211df38a543b.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "天天领现金",
          iconImgUrl:
            "http://t10img.yangkeduo.com/images/2018-05-16/712fc1e7f4f7b0572257ef162b5185a9.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "1分抽大奖",
          iconImgUrl:
            "http://t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "省钱月卡",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-01-27/76826abcd09fe76657f07a901db83698.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "电器城",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2018-10-28/27e48ad452991eeb8fd0559a0d3b60ff.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "爱逛街",
          iconImgUrl:
            "http://t03img.yangkeduo.com/images/2018-05-16/a666ac01e718dd06231a722baa6fa935.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "砍价免费领取",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-02-15/1ddd6e21a8281e794dec6ef736867290.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "多多爱消除",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-04-12/80f3af132fae04453792464bb837ca02.png?imageMogr2/format/webp/quality/50"
        },
        {
          name: "每日好店",
          iconImgUrl:
            "http://t00img.yangkeduo.com/goods/images/2019-01-20/d36b7af30da354cb2c8ad4ea7bd819cd.png?imageMogr2/format/webp/quality/50"
        },
      ]
    };
  },
  computed:{
      iconData(){
          let iconData =[]
          this.icons.forEach((item,index)=>{
              const iconItem = Math.floor(index/10)
              if(!iconData[iconItem]){
                  iconData[iconItem] = []
              }
              iconData[iconItem].push(item)
          })
          return iconData
      }
  }
};
</script>
<style lang="less" scoped>
.icons /deep/ .van-grid-item__content{padding: 0;margin-bottom: 5px;}
.icons /deep/ .van-swipe__indicators{
    bottom: 0;width: 100px;
    .van-swipe__indicator{
        border-radius: 0;
        width: 50%;
        height: 3px;
        background-color: #FF6969;
        margin: 0;
    }
}
.icons /deep/ .van-swipe{padding-bottom: 10px;background-color: #fff;}
.icons{
    background-color: #fff;
    margin-top: 5px;
    .van-grid-item__content{
        .iconimg{
            width: 39px;
            height: 39px;
            margin-bottom: 5px;
        }
        span.name{
            font-size: 12px;
        }
    }
    .popular-ad-img{
      width: 100%; 
      margin-top: 5px;
    }
}
</style>