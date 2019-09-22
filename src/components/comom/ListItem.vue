<template>
    <div class="list-item" @click="addclick">
        <div class="item-left">
           <slot></slot>
            <div class="text">{{icontext}}</div>
        </div>
        <div class="item-right">
            <div class="text">{{righttext}}</div>
             <van-icon name="arrow" />
        </div>
    </div>
</template>
<script>
export default {
    name:"ListItem",
    props:{
        icontext:String,
        righttext:String,
    },
    methods:{
        addclick(){
            this.$emit("click")
        }
    }
}
</script>
<style lang="less" scoped>
.list-item{
    background-color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-left{
        display: flex;
        align-items: center;
        .text{
            font-size: 14px;
            margin-left: 5px;
            color: #303133;
        }
    }
    .item-right{
        display: flex;
        align-items: center;
        .text{
            color: #909399;
            font-size: 13px;
            margin-right: 10px;
        }
        .van-icon-arrow{
            font-size: 15px;
            color: #606266;
        }
    }
}
</style>