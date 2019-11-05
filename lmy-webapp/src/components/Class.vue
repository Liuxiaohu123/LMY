<template>
  <div>
   <Curriculums @ChangeShow="changShow" :course="i" :courseId="index" v-for="(i, index) in courses" :key="index"></Curriculums>
  </div>
</template>

<script>
import Bus from "../router/bus.js";
import Curriculums from '../components/Curriculums.vue'
export default {
  data() {
    return {
      courses: [
        {
          class: "软件工程",
          name: "javascript开发",
          teacher: "毕鹏",
          type: "学校课表班课",
        },
        {
          class: "计算机",
          name: "计算机组成",
          teacher: "徐大伟",
          type: "学校课表班课"
        },
        {
          class: "数九结构",
          name: "冉家",
          teacher: "徐大伟",
          type: "学校课表班课"
        }
      ]
    }
  },
  name:"LmyClass",
  components:{
    Curriculums
  },
  methods: {
    changShow(value){
      Bus.$emit("val1", value);
    }
  }
}
</script>

<style scoped>

</style>