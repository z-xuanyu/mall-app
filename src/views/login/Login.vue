<template>
  <div class="login">
    <van-cell-group class="login-group">
      <van-field v-model="phone" label="手机号" placeholder="请输入手机号" error-message="手机号格式错误" />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.login{
    .login-group{
        margin-top: 200px;
    }
}
</style>