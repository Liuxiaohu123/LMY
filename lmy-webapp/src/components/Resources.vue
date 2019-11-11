<template>
  <div v-if="data.materials">
    <div class="rBox" v-for="(i, index) in data.materials" :key="index">
      <img src="../../public/image/ma1.gif" alt />
      <div class="rName">
        <p>{{i.name}}</p>
        <p class="rName1">{{i.size}}</p>
        <p class="rName1">
          <span>{{i.time}}</span>发布
        </p>
      </div>
      <div class="rpeople">
        <p class="rName1"><span>{{i.consults}}</span>人已查看</p>
        <p class="rExp"><span>{{i.exp}}</span>经验</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style scoped>
.rBox{
  display: flex;
  padding: 10px;
  border-bottom: 1px solid gainsboro;
}
.rBox>img{
  width: 60px;
  height: 60px;
}
.rName{
   width: 150px;
   padding: 0 10px;
}
.rpeople{
  text-align: right;
   width: 150px;
}
.rName1{
  font-size: 14px;
  color: gray;
}
.rExp{
  color:greenyellow;
font-size: 14px;
font-weight: 200;
}
</style>