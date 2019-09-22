<template>
  <div class="cart">
    <div class="cart-content" v-if="isLoadingShow">
      <!-- 购物车导航栏 -->
      <van-nav-bar
        class="cart-navbar"
        title="购物车"
        fixed
        left-arrow
        border
        @click-left="onClickLeft"
      />
      <!-- 购物车商品 -->
      <div class="goods-item">
        <van-card
          v-for="(item,index) in 6"
          :key="index"
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </div>
        </van-card>
      </div>
      <!-- 购物车清算 -->
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <span slot="tip">
          你的收货地址不支持同城送,
          <span>修改地址</span>
        </span>
      </van-submit-bar>
    </div>
    <div class="loading-img" v-else>
      <img src="../../assets/images/emptyCart.jpg" alt="购物车">
      <div class="tips">空空如也 <span @click="handleLinkto">{{tipsText}}&gt;</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      allCartChecked: false,
      tipsText:"去登录",
    };
  },
  created(){
    localStorage.mall_app?this.tipsText="去逛逛":this.tipsText="去登陆"
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit() {},
    handleLinkto(){
      if(localStorage.mall_app){
        this.$router.push("/recommend")
      }else{
        this.$router.push("/login")
      }
    }
  },
  computed:{
    isLoadingShow(){
      return localStorage.mall_login ?true:false;
    }
  }
};
</script>
<style lang="less" scoped>
.cart {
  background-color: #fff;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  .loading-img{
    position: absolute;
    width: 120px;
    height: 120px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    img{
      width: 100%;
    }
    .tips{
      margin-top: 10px;
      color: #C0C4CC;
      font-size: 13px;
      text-align: center;
      span{
        color: #fa436a;
      }
    }
  }
  .cart-navbar {
    background-color: #52de97;
    .van-nav-bar__arrow {
      color: #fff;
    }
    .van-nav-bar__title {
      color: #fff;
    }
  }
  .goods-item {
    margin: 55px 0 90px;
  }
}
</style>