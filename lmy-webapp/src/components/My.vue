<template>
  <div class="My">
    <div class="MyInfor">
      <img class="MyInforImg" :src="data.src" />
      <p class="MyInforText">{{data.studentName}}</p>
    </div>
    <div class="MyHave">
      <div>
        <p>{{data.experience}}</p>
        <p>经验值</p>
      </div>
      <div>
        <p>{{data.charm}}</p>
        <p>魅力值</p>
      </div>
      <div>
        <p>{{data.money}}</p>
        <p>蓝豆</p>
      </div>
      <div>
        <p>{{data.mind}}</p>
        <p>心意</p>
      </div>
    </div>

    <p class="MyShow">
      我的空间
      <span class="MyShowGo">></span>
    </p>
    <p class="MyShow">
      我的收藏
      <span class="MyShowGo">></span>
    </p>
    <p class="MyShow">
      收到心意
      <span class="MyShowGo">></span>
    </p>
    <p class="MyShow MyShow4">
      分享给朋友
      <span class="MyShow4Text">累计分享0次</span>
      <span class="MyShowGo">></span>
    </p>
    <p class="MyShow">
      设置
      <span class="MyShowGo">></span>
    </p>
  </div>
</template>

<script>

export default {
  name: "LmyMy",
  props:["data"],
  data() {
    return {
      userData: ""
    };
  },
};
</script>

<style scoped>
.My {
  background-color: rgb(250, 250, 250);
  height: 100%;
}
.MyInfor {
  background-color: white;
  display: flex;
  padding: 10px
}
.MyInforImg{
  width: 70px;
}
.MyInforText{
  line-height: 70px;
  padding-left:10px;
}
.MyHave {
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  display: flex;
  background-color: white;
  margin-bottom: 40px;
}
.MyHave > div {
  padding: 10px;
  flex: 1;
  text-align: center;
  border-left: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
}
.MyHave > div > p:nth-child(1) {
  color: aqua;
}
.MyShow {
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  line-height: 40px;
  padding: 0 10px;
  background-color: white;
}
.MyShowGo {
  float: right;
  font-weight: 700;
}
.MyShow4 {
  margin: 20px 0;
}
.MyShow4Text {
  padding-left: 50px;
  color: gainsboro;
  font-size: 16px;
}
</style>