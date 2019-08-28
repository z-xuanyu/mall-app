<template>
  <van-sticky>
    <form action="/">
      <van-search
        v-model="searchvalue"
        placeholder="吸磁充电器"
        @search="onSearch"
        input-align="center"
      />
    </form>
  </van-sticky>
</template>
<script>
export default {
    name:'Search',
    data() {
      return {
        searchvalue:'',//搜索框的value值
      }
    },
    methods:{
      onSearch(){ //搜索框事件函数

      }
    }

}
</script>
<style lang="less" scoped>
.van-search__content--square {
  background-color: #ededed;
  border-radius: 20px;
}
</style>