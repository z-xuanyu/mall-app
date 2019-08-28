<template>
  <div class="swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "PopularSwiper",
  data() {
    return {
      images: [
        "http://t16img.yangkeduo.com/pdd_oms/2019-08-16/a1fed4469f02a3a092606c8b562f9bac.png?imageMogr2/format/webp/quality/50",
        "http://t16img.yangkeduo.com/pdd_oms/2019-06-19/94d6508c6a6fb0038a1e6e83c22acbf1.jpg?imageMogr2/format/webp/quality/50"
      ]
    };
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