<template>
  <div class="activityBox" v-if="data">
    <div class="activityBoxTop"><img src="../assets/activity01.gif"><p>{{data.activityName}}</p></div>
    <div class="activityBoxBootom">
      <p class="activityPop"><span>{{data.peoples}}</span>人参与</p>
      <p class="activityExp">已参与<span>{{data.experience}}</span>经验</p>
      <div class="activityState">
        <p v-if="data.state"><span class="activityLog activityLog1"></span>已结束</p>
        <p v-else><span class="activityLog activityLog2"></span>正在进行</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name:"ActivityBox",
  props:["data"]
}
</script>
<style  scoped>
.activityBox{
  border-bottom: 1px solid gainsboro;
}
.activityBoxTop{
  display: flex;
  padding:5px 10px ;
}
.activityBoxTop>img{
  width: 40px;
}
.activityBoxTop>p{
  padding-left: 10px;
  font-size: 16px;
  color: gray;
}
.activityBoxBootom{
  font-size: 12px;
  padding: 0 10px 5px;
  display: flex;
  justify-content: space-between;
}
.activityPop{
  color: grey;
}
.activityExp{
  color: greenyellow;
}
.activityLog{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.activityLog1{
  background-color: red;
}
.activityLog2{
  background-color: greenyellow;
}
.activityState{
  width: 60px;
}
</style>