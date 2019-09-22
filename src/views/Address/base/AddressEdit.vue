<template>
  <div class="address-edit">
      <van-nav-bar
      title="编辑收货地址"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :address-info="AddressInfo"
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
export default {
  name: "AddressEdir",
  data() {
    return {
      areaList: {},
      searchResult: [
          {
              name:"广东省",
              address:"龙洞西大街国敬巷一号"
          }
      ],
      AddressInfo:{
          id:1,
          name:"周宣宇",
          tel:"15800021934",
          province:"广东省",
          city:"广州市",
          county:"天河区",
          addressDetail:"龙洞西大街1号",
          postalCode:"520000"
      }
    };
  },

  methods: {
    onSave() {
      console.log("保存");
    },
    onDelete() {
      console.log("删除");
    },
    onChangeDetail(val) {
        console.log(val)
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    onClickLeft(){
        this.$router.go(-1)
    }
  }
};
</script>