<!--
 * @Author: Custer
 * @Date: 2022-04-06 16:50:25
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 16:56:45
 * @Description: file content
-->
<template>
  <div class="operateTeam-list-container">
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
    >
      <template v-slot:screen-school="{ row, form }">
        <el-select class="w-100" v-model="form[row.key]" clearable> </el-select>
      </template>
      <template v-slot:table-status="{ row }">
        <el-switch v-model="row.status" :active-value="1" :inactive-value="0"></el-switch>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">查看详细</el-button>
        <el-button type="text">关联校区</el-button>
        <el-button type="text">设置</el-button>
        <el-button type="text">编辑</el-button>
        <el-button type="text">删除</el-button>
      </template>
    </CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，启用，停用，关联校区，相关设置（每公里多少钱...），运营团队下的成员（运营系统的用户管理）" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="审核" :rows="4"></el-input> -->
  </div>
</template>
<script>
import * as API_OPERATETEAM_LIST from '@/api/operateTeam/list';
import config from './config';
export default {
  name: "OperateTeam-List",
  data() {
    return {
      tableData: [],
      total: 0,
      pageParams: {
        pageSize: 10,
        pageNumber: 1
      },
      loading: false,
      ...config
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
        let { data } = await API_OPERATETEAM_LIST.getList({...this.pageParams, ...searchParams});
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
  },
};
</script>
<style lang="scss" scoped>
.operateTeam-list-page {
  h3 {
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
