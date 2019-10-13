<template>
  <div class="clothing">
    <icons-item :icons="icons"></icons-item>
    <img class="clothing_ad" v-lazy="imgAd">
    <product-list :productdata='productdata'></product-list>
  </div>
</template>
<script>
import IconsItem from "@/components/comom/IconsItem"; //公共的icons组件
import ProductList from '@/components/comom/ProductList'; //公共的商品列表
export default {
  name: "Clothing",
  components: {
    IconsItem,
    ProductList
  },
  data() {
    return {
      icons: [],   //icons数据
      productdata:[], //商品列表数据
      imgAd:'//t00img.yangkeduo.com/goods/images/2019-08-14/0837c496ce5726a19dae41eb971a0719.png?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp'
    };
  },
  created() {
    this.getClothingIconsData(); //获取衣服组件icons相关数据
    this.getProductData();  //获取商品列表数据
  },
  methods: {
    getClothingIconsData() {
      //请求衣服组件icons
      this.$axios.get("api/caterham/query/opt2_brand_pcard", {
        params: {
          opt1_id: 14
        }
      })
        .then(({ data: { data: { opt2_list } } }) => {
          let icons = [];
          console.log(opt2_list);
          opt2_list.forEach(item => {
            icons.push({
              name: item.opt_name,
              iconImgUrl: item.image_url,
              id: item.id
            });
          });
          this.icons = icons
          this.icons.push({
              name: "查看更多",
              iconsImgUrl:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURQAAAODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4P7+/u/v73koT0EAAAAIdFJOUwBO8rKJ1CMLoiR1VwAAANtJREFUKM91kz0OwjAMhYNAsFaIgRUxkBEhIXWErTtLR46AuAFpKxlOQHoCekvitI2a1u8NkfUl8k9sK9VqtTlrc7s+VKTZibz2SURz6lQN+DKloOIe8JoG2vV0QZEuHc5iXIqP++fbMX75NPQYG05mThMdJR+tl3yKK1c3CUok1+z8KeGDFJFjZhIuVSrhQsqPM+TSP/bnzqYOplF82diaARNvOqwlTDI2PuTbft1pbTArlCAoBxQPvgp8LGgDaBpqMRgIMD5g2NBogkFGYw+WBK0UWEC0rpPl/gMSMZBtc0a6EQAAAABJRU5ErkJggg==",
              id: 133
            })
        })
        .catch(() => {
          console.log("接口请求失败");
        });
    },
    getProductData(){  //请求获取商品列表数据
      
    }
  }
};
</script>
<style lang="less" scoped>
.clothing_ad{
  width: 100%;
  margin-top: 10px;
}
</style>