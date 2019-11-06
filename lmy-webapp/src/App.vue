<template>
  <div id="app">
    <router-view :data="data"></router-view>
  </div>
</template>

<script>
import lmyApi from "./apis/lmyApi";

export default {
  name: "app",
  data() {
    return {
      data:""
    }
  },
  created() {
    this._getData()
  },
  methods: {
    _getData(){
      this.data=lmyApi.getLmyData()
    }
  },
};
</script>
<style>
#app {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
