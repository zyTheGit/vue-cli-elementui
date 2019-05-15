<template>
  <el-container class='login'>
    <el-image
      src='https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-769890.jpg'
      lazy
      fit='cover'
    ></el-image>
    <div class="login_div">
      <el-main>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <p>nihao </p>
              <el-button
                size="mini"
                plain
                @click="btnSigin"
              >SIGIN IN</el-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <p>nihao </p>
              <el-button
                size="mini"
                @click="btn"
                plain
              >LOG IN</el-button>
            </div>
          </el-col>
        </el-row>
        <font></font>
      </el-main>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-header>LOG IN</el-header>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="accuess"
            autofocus
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="password"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <el-form-item style="text-align:right">
          <el-button
            size="mini"
            type="danger"
            style='letter-spacing: 1px;'
            @click="submitBtn"
          >LOG IN</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class='footer'>Happiness Originates From Life</div>
  </el-container>
</template>
<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    submitBtn() {
      this.$router.push({ path: "/home" });
    },
    btnSigin() {
      anime({
        targets: ".el-form",
        left: "5%",
        duration: 800
      });
    },
    btn() {
      anime({
        targets: ".el-form",
        left: "55%",
        duration: 800
      });
    }
  }
};
</script>
<style  rel="stylesheet/scss" lang="scss" scope>
.login {
  .el-image {
    position: fixed;
    height: 100%;
    width: 100%;
  }
  .footer{
    position:fixed;
    right:20px;
    bottom:20px;
    color:#fff;
    font-size:30px;
  }
  .login_div {
    background-color: rgba(0, 0, 0, 0.6);
    width: 45%;
    height: 35%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .el-form {
    width: 40%;
    background-color: #fff;
    height: 116%;
    position: absolute;
    left: 5%;
    top: -8%;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 4px;
    .el-header {
      line-height: 90px;
      text-align: left;
      color: #f60;
      padding-left: 0;
      letter-spacing: 1px;
    }
  }
  .el-input > input {
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    padding: 0;
    border-radius: 0;
    :focus {
      transition: 0.5s;
    }
  }
  .grid-content {
    color: #fff;
  }
  .el-main .el-button {
    letter-spacing: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    color: #fff;
  }
}
</style>
