<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:09:42
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:11:03
 * @Description: file content
-->
<template>
  <div class="operate-school-container">
    <CusterCrud
      :screenColumn="screenColumn"
      :handleColumn="handleColumn"
      :tableColumn="tableColumn"
      :tableData="tableData"
      :tableConfig="tableConfig"
      :paginationPage.sync="pageParams.pageNumber"
      :paginationLimit.sync="pageParams.pageSize"
      :paginationTotal="total"
      :tableLoading="loading"
      @on-search="searchBackFun"
      @page-change="getListFun"
      @table-refresh="getListFun"
    ></CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，地图" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="负责人" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
export default {
  name: "Operate-School",
  data() {
    return {
      tableData: [],
      total: 0,
      pageParams: {
        pageSize: 10,
        pageNumber: 1,
      },
      loading: false,
      ...config,
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.operate-school-container {
}
</style>