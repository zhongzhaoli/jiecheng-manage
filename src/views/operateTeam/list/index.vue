<!--
 * @Author: Custer
 * @Date: 2022-04-06 16:50:25
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 16:56:45
 * @Description: file content
-->
<template>
  <div class="operateTeam-list-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，启用，停用，关联校区，相关设置（每公里多少钱...），运营团队下的成员（运营系统的用户管理）" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="审核" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "OperateTeam-List",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .operateTeam-list-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>
