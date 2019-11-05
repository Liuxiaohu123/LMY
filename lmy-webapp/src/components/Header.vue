<template>
  <div class="Header">
    <span class="back" v-show="flage" @click="back">&lt;</span>
    <img class="headerImg1" src="../assets/header01.gif" />
    <span class="headerText1">{{flage?"111":value[num]}}</span>
    <span class="headerText2">帮助</span>
  </div>
</template>
<script>
import Bus from "../router/bus.js";
export default {
  data() {
    return {
      value: ["班课", "发现", "我的"],
      num: 0,
      flage: false
    };
  },
  name: "Header",
  mounted: function() {
    var vm = this;
    Bus.$on("val", data => {
      vm.num = data;
    });
    Bus.$on("val1", data => {
      vm.flage = data;
    });
  },
  methods: {
    back() {
      this.flage = false;
      this.$router.push("/class");
      Bus.$emit("val1", false);
    }
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
  color: white;
}
.back {
  position: absolute;
  display: block;
  top: 10px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-weight: 700;
}
.headerImg1 {
  position: absolute;
  top: 0;
  left: 20px;
  height: 40px;
  padding: 5px;
}
.headerText1 {
  position: absolute;
  display: inline-block;
  line-height: 40px;
  top: 8px;
  left: 90px;
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