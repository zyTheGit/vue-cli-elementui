<template>
  <el-container class='home_main'>
    <el-header height='80px'>
      {{title}}
    </el-header>
    <el-container>
      <el-aside width="65px">
        <HomeAside />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HomeAside from "./Home_aside";

export default {
  components: { HomeAside },
  data() {
    return {
      title: "Happiness Originates From Life"
    };
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.home_main {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #ececec;
  .el-header {
    line-height: 80px;
    font-size: 40px;
  }

  .el-container {
    .el-aside{
      height:auto;
    }
    .el-main {
      height: 100%;
      background-color: #e9eef3;
      padding-top: 0;
    }
  }
}
</style>
