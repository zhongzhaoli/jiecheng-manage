<!--
 * @Author: Custer
 * @Date: 2022-04-06 16:50:36
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 17:27:18
 * @Description: file content
-->
<template>
  <div class="operateTeam-settlement-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改, 审核，查看提现订单" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "OperateTeam-Settlement",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .operateTeam-settlement-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>
