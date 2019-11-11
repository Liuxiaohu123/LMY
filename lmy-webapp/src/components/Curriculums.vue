<template>

  <router-link v-if="courseId!='false' "
    class="curriculums"
    :to="{path:'/lmyClass',query:{id:courseId}}"
    @click="Join">
  <!-- <a
    v-if="courseId!='false' "
    class="curriculums"
    :href=" '#/lmyClass?num='+courseId"
    @click="Join"
  > -->
    <div
      class="cImg"
      :style="{'background-color':'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'}"
    >
      <img src="../assets/yun.gif" />
    </div>
    <div class="cText">
      <h3>{{course.class}}</h3>
      <h3>{{course.className}}</h3>
      <p>
        <span>{{course.teacheName}}</span>
        <span>{{course.classType}}</span>
      </p>
    </div>
  <!-- </a> -->
  </router-link>
  <a v-else class="curriculums">
    <div
      class="cImg"
      :style="{'background-color':'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'}"
    >
      <img src="../assets/yun.gif" />
    </div>
    <div class="cText">
      <h3>{{course.class}}</h3>
      <h3>{{course.className}}</h3>
      <p>
        <span>{{course.teacheName}}</span>
        <span>{{course.classType}}</span>
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
    Join() {
      this.$emit("ChangeName", this.course.className);
    }
  }
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