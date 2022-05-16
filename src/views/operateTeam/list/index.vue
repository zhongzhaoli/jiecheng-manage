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
        <el-switch
          v-model="row.status"
          :active-value="1"
          :inactive-value="0"
        ></el-switch>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">查看详细</el-button>
        <el-button type="text" @click="setSchoolDialog">设置校区</el-button>
        <el-button type="text">编辑</el-button>
        <el-button type="text">删除</el-button>
      </template>
    </CusterCrud>
    <el-dialog
      title="设置校区"
      :visible.sync="setSchoolVisible"
      width="600px"
      top="50px"
      :before-close="schoolBeforeClose"
    >
      <div class="schoolContentBox">
        <el-form>
          <el-form-item label="地理位置">
            <el-autocomplete
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入地理位置"
              @select="handleSelect"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item>
            <div id="container"></div>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setSchoolVisible = false">取 消</el-button>
        <el-button type="primary" @click="setSchoolVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，启用，停用，关联校区，相关设置（每公里多少钱...），运营团队下的成员（运营系统的用户管理）" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="审核" :rows="4"></el-input> -->
  </div>
</template>
<script>
import * as API_OPERATETEAM_LIST from "@/api/operateTeam/list";
import config from "./config";
const TMAP_search_url = "https://apis.map.qq.com/ws/place/v1/suggestion";
import { TMAP_Key } from "@/config";
export default {
  name: "OperateTeam-List",
  data() {
    return {
      tableData: [],
      total: 0,
      pageParams: {
        pageSize: 10,
        pageNumber: 1,
      },
      loading: false,
      setSchoolVisible: false,
      // 远程搜索参数
      positions: [],
      state: "",
      timeout: null,
      map: null,
      circle: null,
      TMAP_Key,
      ...config,
    };
  },
  methods: {
    setSchoolDialog() {
      this.setSchoolVisible = true;
      this.$nextTick(() => {
        //初始化地图
        this.map = new TMap.Map("container", {
          zoom: 13, //设置地图缩放级别
        });
      });
    },
    buildCircle(lat = 0, lng = 0) {
      let center = new TMap.LatLng(lat, lng);
      //创建圆形覆盖物
      this.circle = new TMap.MultiCircle({
        map: this.map,
        styles: {
          // 设置圆形样式
          circle: new TMap.CircleStyle({
            color: "rgba(41,91,255,0.16)",
            showBorder: true,
            borderColor: "rgba(41,91,255,1)",
            borderWidth: 2,
          }),
        },
        geometries: [
          {
            styleId: "circle",
            center, //圆形中心点坐标
            radius: 2500, //半径（单位：米）
          },
        ],
      });
    },
    searchBackFun(val) {
      this.getListFun(val);
    },
    async getListFun(searchParams = {}) {
      if (this.loading) return;
      this.loading = true;
      try {
        let { data } = await API_OPERATETEAM_LIST.getList({
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
    querySearchAsync(queryString, cb) {
      if(!queryString) cb([]);
      this.$jsonp(TMAP_search_url, {
        key: TMAP_Key,
        keyword: queryString,
        output: "jsonp",
      }).then(res => {
        if (res.status === 0) {
          res.data.forEach(item => {
            item.value = item.title; //因为element的远程搜索只能识别value所以需要对返回的数据进行一下处理
          });
          cb(res.data);
        } else {
          cb([]);
        }
      });
    },
    handleSelect(item) {
      console.log(item.location);
      this.map.setCenter(new TMap.LatLng(item.location.lat, item.location.lng));
      if(this.circle) this.circle.setMap(null);
      this.buildCircle(item.location.lat, item.location.lng);
    },
    schoolBeforeClose(){
    },
  },
  mounted() {
    this.getListFun();
  },
};
</script>
<style lang="scss" scoped>
.operateTeam-list-container {
  #container {
    width: 100%;
    height: 350px;
  }
}
</style>
