<template>
  <a class="curriculums" href="#/activity" @click="Join">
    <div class="cImg" :style=
    "{'background-color':'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'}">
      <img src="../assets/yun.gif"/>
    </div>
    <div class="cText">
      <h3>{{course.class}}</h3>
      <h3>{{course.name}}</h3>
      <p>
        <span>{{course.teacher}}</span>
        <span>{{course.type}}</span>
      </p>
    </div>
  </a>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["course", "courseId"],
  name: "Curriculums",
  methods: {
    Join(){
      this.$emit("ChangeShow",true);
    }
  },
  // computed: {    //计算属性得到的结果是固定的
  //   RandomColor() {
  //     let r, g, b;
  //     r = Math.floor(Math.random() * 256);
  //     g = Math.floor(Math.random() * 256);
  //     b = Math.floor(Math.random() * 256);
  //     return "rgb(" + r + "," + g + "," + b + ")";
  //   }
  // }
};
</script>
<style scoped>
.curriculums {
  border-bottom: 1px solid gainsboro;
  display: flex;
  padding: 10px 0;
  color: black;
}
.cImg {
  width: 80px;
  height: 80px;
  margin-left: 10px;
}
.cImg > img {
  width: 100%;
}
.cText {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cText > p > span:nth-child(2) {
  padding-left: 10px;
}
.cText > h3 {
  font-weight: 500;
}
.cText > p {
  color: gainsboro;
}
</style>