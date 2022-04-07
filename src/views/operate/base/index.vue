<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:41:43
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 15:46:55
 * @Description: file content
-->
<template>
  <div class="operate-base-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="订单完成赠送积分数量，订单完成后多久自动好评，订单自动取消，骑手接单配置，提现设置等等" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="活动" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Operate-Base",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .operate-base-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>
