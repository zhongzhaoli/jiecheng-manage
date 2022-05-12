<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:00:02
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 17:10:43
 * @Description: file content
-->
<template>
  <div class="member-list-container">
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
      <template v-slot:screen-status="{ row, form }">
        <el-select class="w-100" v-model="form[row.key]" clearable> </el-select>
      </template>
      <template v-slot:table-status="{ row }">
        <el-switch v-model="row.status" :active-value="1" :inactive-value="0"></el-switch>
      </template>
      <template v-slot:table-nickName="{ row }">
        <div class="nickNameBox d-flex ai-center w-100">
          <el-avatar :size="30" fit="fill" :src="row.avatar"></el-avatar>
          <div class="nickName ml-10 textEllipsis-1">{{ row.nickName }}</div>
        </div>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">查看详细</el-button>
        <el-button type="text">发站内信</el-button>
        <el-button type="text">所有订单</el-button>
      </template>
    </CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，发站内信" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
import * as API_MEMBER_LIST from "@/api/member/list";
export default {
  name: "Member-List",
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
        let { data } = await API_MEMBER_LIST.getList({
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
.member-list-container{
  & .nickNameBox{
    height: 30px;
    & > .nickName{
      flex: 1;
    }
  }
}
</style>
