<template>
  <div class="login">
    <div class="login-wrapper">
      <van-tabs>
        <van-tab title="手机号登录">
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
        </van-tab>
        <van-tab title="用户名登录">
          <van-cell-group>
            <van-field v-model="username" left-icon="friends" label-width="60px" label="用户名" placeholder="请输入用户名" required />
            <van-field v-model="password" left-icon="lock" label-width="60px" type="password" label="密码" placeholder="请输入密码" required />
            <van-button @click="handleUserNameWayLogin" :disabled="isUserNameLogin" type="danger" size="large">立即登录</van-button>
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "", //手机号
      errors: "", //手机错误提示
      validateBtn: "发送验证码", //验证发送按钮倒计时
      disabled: false, //按钮是否可禁
      verifyCode: "", //验证码
      username: "", //用户名
      password: "" //密码
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
            tpl_id: "187514",
            key: "87d2f3b541611333e6e503ab2495b65e",
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
      //手机号码的方式登录
      this.$axios
        .post("/ceshi/posts/sms_back", {
          phone: this.phone,
          code: this.verifyCode
        })
        .then(res => {
          console.log(res);
          console.log("我已经执行到这一步了");
          localStorage.setItem("mall_login", true);
          this.$router.push("/");
        })
        .catch(res => {
          console.log(res);
          this.$notify({ type: "danger", message: "验证码错误" });
        });
    },
    handleUserNameWayLogin(){ //用户名的方式登录
        if(this.username == "admin" && this.password == "admin"){
          localStorage.setItem("mall_app",true);
          this.$router.push("/")
        }else{
          this.$notify({ type: "danger", message: "密码错误" });
        }
    }
  },
  computed: {
    isClick() {
      // 手机号码和验证码都同时存在
      if (!this.phone || !this.verifyCode) return true;
      else return false;
    },
    isUserNameLogin(){
      if(!this.username || !this.password) return true;
      else return false
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  background-color: #43ab92;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  .login-wrapper {
    width: 82%;
    margin: 200px auto;
  }
}
</style>