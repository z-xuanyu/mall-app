<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" show-indicators>
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <img v-lazy="item.ImgUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "PopularSwiper",
  data() {
    return {
      banner:[], //banner图片
    }
  },
  created(){
    //请求banner数据
    this.getBanner()
  },
  methods:{
    getBanner(){
      this.$api.homeData.bannerData().then(({data:{data:{banner}}})=>{
        this.banner = banner
      })
    }
  }
};
</script>
<style lang="less" scoped>
.swiper{
    width: 100%;
    height: 0;
    padding-bottom: 38%;
    img{
        width: 100%;
    }
}
</style>