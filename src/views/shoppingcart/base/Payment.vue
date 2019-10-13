<template>
  <div class="payment">
    <div ref="container" style="height: 50px;">
      <van-sticky :container="container">
        <van-nav-bar
          class="cart-navbar"
          title="支付"
          fixed
          left-arrow
          border
          @click-left="onClickLeft"
        ></van-nav-bar>
      </van-sticky>
      <!-- 支付金额 -->
      <div class="price-box">
          <span>支付金额</span>
          <div class="price">¥38.88</div>
      </div>
      <!-- 支付方式列表 -->
      <div class="pay-type-list">
          <pay-cell name="微信支付" tips="推荐使用微信支付">
              <div slot="left-icon">
                  <van-icon name="wechat" color="#36cb59" size="30px" />
              </div>
              <div slot="right-icon">
                  <van-icon name="checked" color="rgb(250, 67, 106)" size="24px" />
              </div>
          </pay-cell>
          <pay-cell name="支付宝支付">
              <div slot="left-icon">
                  <van-icon name="alipay" color="#01aaef" size="30px" />
              </div>
              <div slot="right-icon">
                  <van-icon name="checked" color="rgb(250, 67, 106)" size="24px" />
              </div>
          </pay-cell>
          <pay-cell name="预存款支付" tips="可用余额 ¥198.5">
              <div slot="left-icon">
                  <van-icon name="gold-coin" color="#fe8e2e" size="30px" />
              </div>
              <div slot="right-icon">
                  <van-icon name="checked" color="rgb(250, 67, 106)" size="24px" />
              </div>
          </pay-cell>
      </div>
      <!-- 支付按钮 -->
      <div class="btn-pay">
          <van-button type="danger" block color="#fa436a" @click="paybtn">确认支付</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import PayCell from "../../../components/comom/PayCell"
export default {
  name: "payment",
  data() {
      return {
          container:null
      }
  },
  components:{
      PayCell
  },
  mounted(){
      this.container = this.$refs.container
  },
  methods:{
      //顶部路由
      onClickLeft(){
           this.$router.go(-1);
      },
      //支付成功页
      paybtn(){
          this.$router.push("/pay/paysuccess")
      }
  }
};
</script>
<style lang="less" scoped>
.payment {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  z-index: 222;
  //支付金额
  .price-box{
      margin-top: 80px;
      text-align: center;
      span{
          color: #909399;
          font-size: 15px;
      }
      .price{
          color: #303133;
          font-size: 27px;
          margin-top: 5px;
      }
  }
  //支付方式
  .pay-type-list{
      margin-top: 20px;
  }
    //支付按钮
  .btn-pay{
      padding: 20px;
  }
}
</style>