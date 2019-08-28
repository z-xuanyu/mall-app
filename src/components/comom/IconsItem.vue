<template>
    <div class="iconsitem">
        <van-grid :border="false" :column-num="5">
          <van-grid-item v-for="(item,index) in icons" :key="index" class="icons_item">
               <van-image class="iconimg" :src="item.iconImgUrl" />
               <span class="name">{{item.name}}</span>
          </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
export default {
    props:{
        icons:Array
    },
    name:'IconsItem',
}
</script>
<style lang="less" scoped>
.iconsitem /deep/ .van-grid-item__content--center{
    padding: 10px 0;
}
.iconsitem{
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
}
</style>