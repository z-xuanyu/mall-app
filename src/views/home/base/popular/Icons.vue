<template>
  <div class="icons">
    <van-swipe :loop='false'>
      <van-swipe-item v-for="(icons,index) in iconData" :key="index">
        <van-grid :border="false" :column-num="5">
          <van-grid-item v-for="(item,index) in icons" :key="index" class="icons_item">
               <van-image class="iconimg" :src="item.iconUrl" />
               <span class="name">{{item.name}}</span>
          </van-grid-item>
        </van-grid>
      </van-swipe-item>
    </van-swipe>
    <img class="popular-ad-img" src="http://t00img.yangkeduo.com/goods/images/2019-08-28/d66a9c476aea17ee3d1e163ca2425881.gif?imageView2/2/w/1300/q/70/format/webp">
  </div>
</template>
<script>
export default {
  name: "PopularIcons",
  data() {
    return {
      icons: [],//icons 导航数据
    };
  },
  created(){
    //请求icon图标导航数据
    this.getIconNav()
  },
  methods:{
    getIconNav(){
      this.$api.homeData.iconsData().then(({data:{data:{iconnav}}})=>{
        this.icons = iconnav
      })
    }
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