<template>
  <div>
    <Curriculums
      @ChangeName="ChangeName"
      @ChangeShow="changShow"
      :course="i"
      :courseId="index"
      v-for="(i, index) in data.courses"
      :key="index"
    ></Curriculums>
  </div>
</template>

<script>
import Bus from "../router/bus.js";
import Curriculums from "../components/Curriculums.vue";

export default {
  props:["data"],
  name: "LmyClass",
  components: {
    Curriculums
  },
  methods: {
    changShow(value) {
      Bus.$emit("val1", value);
    },
    ChangeName(value) {
      Bus.$emit("val2", value);
    },
  },
};
</script>

<style scoped>
</style>