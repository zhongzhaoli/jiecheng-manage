<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:32:26
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:32:26
 * @Description: file content
-->
<template>
  <div class="monitor-performance-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="CPU占用，内存占用等等" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="前期可不考虑" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Monitor-Performance",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .monitor-performance-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>