<template>
  <div>
    <el-row class='Photo'>
      <el-col
        v-for='(item,index) in photoList'
        :key='index'
      >
        <el-card
          :body-style="{ padding: '5px'}"
          class='animated'
          @click.native='showImg(item.src)'
        >
          <el-image :src="item.src">
            <div
              slot="error"
              class="image-slot"
            >
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </el-card>
      </el-col>
      <el-container
        v-show='imageStatus'
        @click.native='imageStatus=!imageStatus;showImgSrc=""'
      >
        <img
          :src='showImgSrc'
          @load='imgLoad'
        />
      </el-container>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageStatus: false,
      showImgSrc: "",
      loading: null
    };
  },
  computed: {
    photoList() {
      return this.$store.state.photo.photoList;
    }
  },
  created() {
    //this.photoList=this.$store.state.photo.photoList;
  },
  methods: {
    showImg(src) {
      this.loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      this.showImgSrc = src;
    },
    imgLoad(e) {
      this.imageStatus = true;
      this.loading.close();
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@media (max-width: 500px) {
  .Photo {
    column-count: 1;
  }
}
@media (min-width: 501px) and (max-width: 800px) {
  .Photo {
    column-count: 2;
  }
}
@media (min-width: 801px) {
  .Photo {
    column-count: 4;
  }
}
.Photo {
  column-gap: 0.5vw;
  .el-col {
    position: relative;
    margin-bottom: 1vw;
    -webkit-column-break-inside: avoid;
    break-inside: avoid;
    .el-card {
      cursor: pointer;
    }
  }
}
.el-container {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  > img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 98%;
    object-fit: contain;
  }
}
</style>