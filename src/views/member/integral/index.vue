<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:00:15
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:40:20
 * @Description: file content
-->
<template>
  <div class="member-integral-container">
    <CusterCrud
      :screenColumn="screenColumn"
      :screenConfig="screenConfig"
      :handleColumn="handleColumn"
      :tableColumn="tableColumn"
      :tableConfig="tableConfig"
      :tableData="tableData"
      :paginationPage.sync="pageParams.pageNumber"
      :paginationLimit.sync="pageParams.pageSize"
      :paginationTotal="total"
      :tableLoading="loading"
      @on-search="searchBackFun"
      @page-change="getListFun"
      @table-refresh="getListFun"
    >
      <template v-slot:screen-source="{ row, form }">
        <el-select class="w-100" v-model="form[row.key]" clearable> </el-select>
      </template>
      <template v-slot:table-source="{ row }">
        <el-tag type="success" v-if="row.source == 1">订单结算</el-tag>
        <el-tag type="warning" v-if="row.source == 2">活动结算</el-tag>
        <el-tag type="primary" v-if="row.source == 3">手动发放</el-tag>
      </template>
      <template v-slot:table-integral="{ row }">
        <span :class="{ 'text-color-green': row.sourceType == 1, 'text-color-red': row.sourceType == 2 }">{{ row.sourceType == 1 ? '+' : '-' }} {{ row.integral }}积分</span>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">查看明细</el-button>
      </template>
    </CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="所有获得积分的记录，手动发放" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="考虑到后期的引流问题，可以添加积分功能" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
import * as API_MEMBER_INTEGRAL from "@/api/member/integral";
export default {
  name: "Member-Integral",
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
  methods: {
    searchBackFun(val) {
      this.getListFun(val);
    },
    async getListFun(searchParams = {}) {
      if (this.loading) return;
      this.loading = true;
      try {
        let { data } = await API_MEMBER_INTEGRAL.getList({
          ...this.pageParams,
          ...searchParams,
        });
        this.total = data.total;
        this.tableData = data.list;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getListFun();
  },
};
</script>
<style lang="scss" scoped>
</style>
