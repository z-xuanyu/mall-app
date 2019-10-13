<template>
  <div class="cell">
    <slot name="left-icon"></slot>
    <!-- <van-icon name="wechat" color="#36cb59" size="30px" /> -->
    <div class="value">
        <div class="name">{{name}}</div>
        <div class="tips">{{tips}}</div>
    </div>
    <slot name="right-icon"></slot>
    <!-- <van-icon name="checked" color="rgb(250, 67, 106)" size="24px" /> -->
  </div>
</template>
<script>
export default {
  props:{
    name:String,
    tips:String

  },
  name: "cell",
  data() {
    return {
     
    };
  }
};
</script>
<style lang="less" scoped>
.cell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px 20px;
  .value{
    flex: 1;
    margin-left: 20px;
    .name{
      color: #303133;
      font-size: 17px;
    }
    .tips{
      margin-top: 5px;
      color: #909399;
      font-size: 13px;
    }
  }
}
</style>