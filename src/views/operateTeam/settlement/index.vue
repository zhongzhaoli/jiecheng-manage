<!--
 * @Author: Custer
 * @Date: 2022-04-06 16:50:36
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 17:27:18
 * @Description: file content
-->
<template>
  <div class="operateTeam-settlement-container">
    <CusterCrud
      :screenColumn="screenColumn"
      :screenConfig="screenConfig"
      :tableColumn="tableColumn"
      :tableConfig="tableConfig"
      :tableData="tableData"
      :handleColumn="handleColumn"
      :paginationPage.sync="pageParams.pageNumber"
      :paginationLimit.sync="pageParams.pageSize"
      :paginationTotal="total"
      :tableLoading="loading"
      @on-search="searchBackFun"
      @page-change="getListFun"
      @table-refresh="getListFun"
    >
      <template v-slot:screen-school="{ row, form }">
        <el-select class="w-100" v-model="form[row.key]" clearable> </el-select>
      </template>
      <template v-slot:screen-status="{ row, form }">
        <el-select class="w-100" v-model="form[row.key]" clearable> </el-select>
      </template>
      <template v-slot:table-settlementTotal="{ row }">
        <span class="text-color-price">{{ row.settlementTotal | formatPrice }}</span>
      </template>
      <template v-slot:table-status="{ row }">
        <el-tag type="success" v-if="row.status == 1">已结算</el-tag>
        <el-tag type="warning" v-if="row.status == 2">待结算</el-tag>
        <el-tag type="danger" v-if="row.status == 3">拒绝结算</el-tag>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">查看订单</el-button>
        <el-button type="text" v-if="row.status == 2">结算审核</el-button>
        <el-button type="text" v-if="row.status == 3">拒绝原因</el-button>
      </template>
    </CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改, 审核，查看提现订单" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from './config';
import * as API_OPERATETEAM_SETTLEMENT from '@/api/operateTeam/settlement';
export default {
  name: "OperateTeam-Settlement",
  data() {
    return {
      total: 0,
      tableData: [],
      pageParams: {
        pageSize: 10,
        pageNumber: 1
      },
      loading: false,
      ...config,
    };
  },
  methods: {
    searchBackFun(val){
      this.getListFun(val);
    },
    async getListFun(searchParams = {}){
      if(this.loading) return;
      this.loading = true;
      try {
        let { data } = await API_OPERATETEAM_SETTLEMENT.getList({...this.pageParams, ...searchParams});
        this.total = data.total;
        this.tableData = data.list;
      } catch(err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted(){
    this.getListFun();
  }
};
</script>
<style lang="scss" scoped>
</style>
