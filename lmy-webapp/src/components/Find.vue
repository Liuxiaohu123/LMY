<template>
  <div class="find">
    <img class="findImg" src="../assets/find01.gif" />
    <span class="findText">课程圈</span>
  </div>
</template>

<script>
export default {
  name: "LmyFind"
};
</script>

<style scoped>
.find {
  margin: 20px 0;
  box-shadow: 0 0 3px gainsboro;
  height: 60px;
}
.findImg {
  width: 60px;
  height: 60px;
  float: left;
  padding: 0 10px 
}
.findText {
  display: block;
  float: left;
  line-height: 60px;
  height: 60px;
  font-size: 18px;
}
</style>