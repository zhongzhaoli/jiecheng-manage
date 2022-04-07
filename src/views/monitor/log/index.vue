<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:31:27
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:31:54
 * @Description: file content
-->
<template>
  <div class="monitor-log-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="查，删，刷新" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Monitor-Log",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .monitor-log-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>