<template>
  <div>
    <Curriculums :course="data" :courseId=" 'false' "></Curriculums>
    <div class="detMain">
      <div class="detBox">
        <p>学校院系</p>
        <p>{{ data.school?data.school :"未设置"}}</p>
      </div>
      <div class="detBox">
        <p>云教材</p>
        <p>{{data.material?data.material :"未设置"}}</p>
      </div>
      <div class="detBox">
        <p>学习要求</p>
        <p>{{data.progress?data.progress :"暂无内容"}}</p>
      </div>
      <div class="detBox">
        <p>教学进度</p>
        <p>{{data.eequipxent?data.eequipxent :"暂无内容"}}</p>
      </div>
      <div class="detBox">
        <p>考试安排</p>
        <p>{{data.exam?data.exam :"暂无内容"}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Curriculums from "./Curriculums.vue";
export default {
  name: "Details",
  props: ["data"],
  components: {
    Curriculums
  }
};
</script>

<style scoped>
.detMain{
  padding: 0 10px;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
}
.detBox{
  border-bottom: 1px solid gainsboro;
  padding-top:10px; 
}
.detBox>p{
  padding-bottom:10px;
  font-size: 16px;
}
</style>