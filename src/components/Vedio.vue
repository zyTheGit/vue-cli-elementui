<template>
    <div>
       <el-row class='Vedio'>
      <el-col
        v-for='(item,index) in array'
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
        <el-image
          :src='showImgSrc'
          fit='contain'
          @load='imgLoad'
        >
          <div
            slot="error"
            class="image-slot"
          >
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-container>
    </el-row>
  </div>
</template>
<script>
export default {
    
}
</script>