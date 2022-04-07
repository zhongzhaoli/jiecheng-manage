<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:00:15
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:40:20
 * @Description: file content
-->
<template>
  <div class="member-integral-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="所有获得积分的记录，手动发放" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="考虑到后期的引流问题，可以添加积分功能" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Member-Integral",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .member-integral-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>
