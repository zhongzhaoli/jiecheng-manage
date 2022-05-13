<template>
  <div class="">
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positions: [],
      state: "",
      timeout: null,
    };
  },
  methods: {
    querySearchAsync(queryString, cb) {
      var positions = this.positions;
      var results = queryString
        ? positions.filter(this.createStateFilter(queryString))
        : positions;
      this.ajax();
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    ajax() {
      const KEY = "UVZBZ-XQMWF-B5NJW-JIOHK-HV3WJ-EAFSR"; //这里是你自己的开发者秘钥
      let url = "https://apis.map.qq.com/ws/place/v1/suggestion";
      this.$jsonp(url, {
        key: KEY,
        region: "北京",
        keyword: this.state,
        output: "jsonp",
      })
        .then(res => {
          console.log(res);
          res.data.forEach(item => {
            item.value = item.title; //因为element的远程搜索只能识别value所以需要对返回的数据进行一下处理
          });
          this.positions = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>