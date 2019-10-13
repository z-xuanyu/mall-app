<template>
  <div class="list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
      <van-cell v-for="(item,index) in list" :key="index" @click="goDetail(item.goodsId)">
          <div class="lits-item">
              <div class="list-img">
                  <img v-lazy="item.ImgUrl" >
              </div>
              <div class="list-info">
                  <h3>{{item.title}}</h3>
                  <div class="price">
                      <i>¥</i>
                      <em>{{item.price}}</em>
                      <span>{{item.piece}}</span>
                  </div>
              </div>
          </div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
export default {
  name: "PopularList",
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  created(){
      this.getPopularListData()
  },
  methods: {
    //获取热门首页商品列表数据
    getPopularListData(){ 
        this.$api.homeData.goodsData({
          size:100
        }).then(({data:{goods_list}})=>{
            let list = []  //存储解构出来相关数据
            goods_list.forEach(item => {
                list.push({
                    title:item.goods_name,
                    ImgUrl:item.hd_thumb_url,
                    price:item.group.price/100,
                    piece:item.sales_tip,
                    goodsId:item.goods_id
                })     
            });
            this.list = list
        })
    },
    goDetail(goodsId){ //商品路由跳转
      this.$router.push({
        name:'detail',
        query:{
          goods_Id:goodsId
        }
      })
    }
  }
};
</script>
<style lang="less" scoped>
.list /deep/ .van-cell{padding:10px 12px 0; }
.list {
  margin-top: 10px;
  background-color: #fff;
  .lits-item{
      display: flex;
      box-sizing: border-box;
      .list-img{
          width: 150px;
          height: 150px;
          img{
              width: 100%;
          }
      }
      .list-info{
          flex: 1;
          margin-left: 10px;
          position: relative;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          h3{
              font-size: 14px;
              max-height:40px;
              line-height: 20px;
              overflow: hidden;
          }
          .price{
              position: absolute;
              left: 0;
              bottom: 5px;
              i{
                  color: #e02e24;
                  font-size: 12px;
              }
              em{
                  font-size: 18px;
                  color: #e02e24;
              }
              span{
                  margin-left: 4px;
                  color: #9c9c9c;
              }
          }
      }
  }
}
</style>