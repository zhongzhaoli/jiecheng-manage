<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:38:10
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:38:11
 * @Description: file content
-->
<template>
  <div class="operate-message-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="查删，发送信息（指定用户或者所有用户）" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Operate-Message",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .operate-message-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>