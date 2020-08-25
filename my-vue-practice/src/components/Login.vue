<!--登录界面-->
<template>
  <el-form class="login-container" label-position="left" label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button
        type="primary"
        style="width: 100%;background: #505458;border: none"
        v-on:click="login"
      >登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      responseResult: [],
    };
  },
  methods: {
    login() {
      this.$axios  // axios发送http请求
        .post("/login", {         // 完整路径在main.js里配置完成了
          username: this.loginForm.username,
          password: this.loginForm.password,
        })
        .then((successResponse) => {
          if (successResponse.data.code === 200) {
            this.$router.replace({ path: "/home" });
            console.log("成功登录");
          } else if (successResponse.data.code === 400) {
            console.log("失败，状态码400");
          }
        })
        .catch((failResponse) => {
          console.log("登录失败");
        });
    },
  },
};
</script>

<style>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>