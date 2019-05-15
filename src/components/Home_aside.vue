<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      router
      :collapse="isCollapse"
    >
      <el-menu-item v-for='(item,index) in muneList' :key='index' :index="item.path">
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true,
      muneList: [
        {
          title: "Music",
          path: "/home/music",
          icon: "el-icon-setting"
        },
        {
          title: "Vedio",
          path: "/home/vedio",
          icon: "el-icon-camera"
        },
        {
          title: "Mv",
          path: "/home/mv",
          icon: "el-icon-camera"
        },
        {
          title: "Mito",
          path: "/home/photo",
          icon: "el-icon-postcard"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
</style>