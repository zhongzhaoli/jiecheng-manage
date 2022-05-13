<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:41:43
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 15:46:55
 * @Description: file content
-->
<template>
  <div class="operate-base-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="运营团队配置" name="operate">
        <div class="p-10">
          <CusterForm
            v-model="formData.operateData"
            :formRules="operateRules"
            :formConfig="formConfig"
            :formColumn="operateColumn"
          >
            <template v-slot:operate_price_range="{ row, form }">
              <div class="d-flex" style="height: 32px;">
                <el-form-item :prop="`${row.key}_min`" class="mb-0">
                  <el-input-number
                    :min="0"
                    v-model="form[`${row.key}_min`]"
                    placeholder="元"
                  ></el-input-number>
                </el-form-item>
                <div class="mx-12">-</div>
                <el-form-item :prop="`${row.key}_min`" class="mb-0">
                  <el-input-number
                    :min="0"
                    v-model="form[`${row.key}_max`]"
                    placeholder="元"
                  ></el-input-number>
                </el-form-item>
              </div>
            </template>
          </CusterForm>
        </div>
      </el-tab-pane>
      <el-tab-pane label="骑手配置" name="rider">
        <div class="p-10">
          <CusterForm
            v-model="formData.riderData"
            :formRules="riderRules"
            :formConfig="formConfig"
            :formColumn="riderColumn"
          >
          </CusterForm>
        </div>
      </el-tab-pane>
      <el-tab-pane label="订单配置" name="order">
        <div class="p-10">
          <CusterForm
            v-model="formData.orderData"
            :formRules="orderRules"
            :formConfig="formConfig"
            :formColumn="orderColumn"
          ></CusterForm>
        </div>
      </el-tab-pane>
      <!-- <el-tab-pane label="地图配置" name="map">地图配置</el-tab-pane>
      <el-tab-pane label="客服配置" name="service">客服配置</el-tab-pane>
      <el-tab-pane label="短信配置" name="message">短信配置</el-tab-pane>
      <el-tab-pane label="OSS配置" name="oss">OSS配置</el-tab-pane> -->
    </el-tabs>
    <div class="formButton px-10">
      <el-button type="primary">保存配置</el-button>
      <el-button type="default" @click="refreshForm()">重置</el-button>
    </div>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="订单完成赠送积分数量，订单完成后多久自动好评，订单自动取消，骑手接单配置，提现设置等等" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="活动" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
export default {
  name: "Operate-Base",
  data() {
    return {
      activeName: "operate",
      formData: {
        operateData: {},
        riderData: {},
        orderData: {},
      },
      ...config,
    };
  },
  methods: {
    refreshForm(){
      for(let key in this.formData){
        for(let k in this.formData[key]){
          this.formData[key][k] = undefined;
        }
      }
    },
  },
  mounted(){
  }
};
</script>
<style lang="scss" scoped>
.operate-base-container {
  padding: calc(#{$base-padding}) !important;
  padding-top: $base-padding - 15px !important;
}
</style>
