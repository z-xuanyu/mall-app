<template>
  <div>
    <van-button type="info" @click="showDialog">信息按钮</van-button>
  </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {};
  },
  methods: {
    showDialog() {
      Dialog.alert({
        title: "标题",
        message: "弹窗内容"
      }).then(() => {
        this.$router.push('/')
      });
    }
  }
};
</script>