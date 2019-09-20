<template>
  <div class="login">
    <div class="login-wrapper">
      <van-cell-group class="login-group">
        <van-field
          @input="validatePhone"
          v-model="phone"
          label="手机号"
          clearable
          :required="true"
          left-icon="phone"
          label-width="60px"
          maxlength="11"
          placeholder="请输入手机号"
          type="number"
          :error-message="errors"
        />
        <van-field
          v-model="verifyCode"
          center
          clearable
          maxlength="6"
          :required="true"
          left-icon="checked"
          label-width="60px"
          label="验证码"
          placeholder="请输入短信验证码"
        >
          <van-button
            slot="button"
            size="small"
            :disabled="disabled"
            type="primary"
            @click="getVerifyCode"
          >{{validateBtn}}</van-button>
        </van-field>
        <van-button @click="handleLogin" :disabled="isClick" type="danger" size="large">立即登录</van-button>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "",   //手机号
      errors: "",  //手机错误提示
      validateBtn: "发送验证码",  //验证发送按钮倒计时
      disabled: false, //按钮是否可禁
      verifyCode:"", //验证码
    };
  },
  methods: {
    validatePhone() {
      //判断手机号
      if (!this.phone) {
        this.errors = "手机号不能为空";
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.errors = "请入正确的手机号码";
        return false;
      } else {
        this.errors = "";
        return true;
      }
    },
    getVerifyCode() {
      //获取验证码
      if (this.validatePhone()) {
        this.VerifyCodeCountdown();
        this.$axios
          .post("/ceshi/posts/sms_send", {
            tpl_id: "178999",
            key: "1952180225fd47bf12a7068ef10b3437",
            phone: this.phone
          })
          .then(res => {
            console.log(res);
          });
      }
    },
    VerifyCodeCountdown() {
      //验证码倒计时
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.validateBtn = "发送验证码";
          this.disabled = false;
        } else {
          this.validateBtn = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
    handleLogin() {
      //处理登录
      this.$axios.post("/ceshi/posts/sms_back",{
        phone: this.phone,
        code: this.verifyCode
      }).then(()=>{
        
        localStorage.getItem("mall_login",true);
        this.$router.push("/")
      }).catch(()=>{
        this.$notify({ type: 'danger', message: '验证码错误' });
      })
    }
  },
  computed:{
    isClick(){ // 是否手机号码和验证码都同时存在
        if(!this.phone || !this.verifyCode) return true;
        else return false
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  background-color: #52de97;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  .login-wrapper {
    width: 82%;
    margin: auto;
    .login-group {
      margin-top: 200px;
    }
  }
}
</style>