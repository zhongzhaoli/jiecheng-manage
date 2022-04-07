<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:09:42
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:11:03
 * @Description: file content
-->
<template>
  <div class="operate-school-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，地图" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="负责人" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Operate-School",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .operate-school-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>