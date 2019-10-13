<template>
  <div id="app">
       <router-view></router-view>
       <tabbar></tabbar>
  </div>
</template>
<script>
import Tabbar from './components/comom/Tabbar';
export default {
  name: "app",
  data() {
    return {};
  },
  created(){
    console.log(this.$route)
  },
  components:{
    Tabbar
  },
};
</script>

<style lang="less">
.coupon-concent{  //全局样式
    box-sizing: border-box;
    h3{
      text-align: center;
      line-height: 47px;
      color: #151516;
      font-size: 18px;
      border-bottom: 1px solid #eee;
    }
    .receive{
      font-size: 15px;
      margin-left: 10px;
      line-height: 20px;
      color: #151516;
      margin-top: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid #eee;
    }
    .coupon-info{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      .coupon-amount{
        width: 114px;
        text-align: center;
        color: #e02e24;
        font-weight: 700;
        em{
          font-size: 20px;
        }
        span{
          font-size: 36px;
        }
      }
      .coupon-info-desc{
        line-height: 17px;
        font-size: 13px;
        color: #58595b;
        text-align: center;
      }
    }
  }
</style>