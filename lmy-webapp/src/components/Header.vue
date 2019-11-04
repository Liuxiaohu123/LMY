<template>
  <div class="Header">
    <img class="headerImg1" src="../assets/header01.gif" />
    <span class="headerText1">{{value}}</span>
    <span class="headerText2">帮助</span>
  </div>
</template>
<script>
import Bus from "../router/bus.js";
export default {
  data() {
    return {
      value:""
    }
  },
  name: "Header",
  mounted: function() {
    var vm = this;
    Bus.$on("val", data => {
      vm.value = data;
    });
  }
};
</script>
<style scoped>
.Header {
  position: fixed;
  background-color: rgb(0, 187, 222);
  height: 50px;
  top: 0;
  width: 100%;
}
.headerImg1 {
  height: 40px;
  padding: 5px;
}
.headerText1 {
  position: absolute;
  display: inline-block;
  line-height: 40px;
  top: 8px;
  padding-left: 10px;
  color: white;
}
.headerText2 {
  position: absolute;
  display: inline-block;
  line-height: 40px;
  right: 20px;
  top: 8px;
  color: white;
}
</style>