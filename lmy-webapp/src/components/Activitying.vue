<template>
  <div>
    <div v-for="(i, index) in data" :key="index">
      <activityBox :data="i" v-if="!i.state" ></activityBox>
    </div>
  </div>
</template>

<script>
import activityBox from "./ActivityBox";

export default {
  props: ["data"],
  name: "Activity",
  components: {
    activityBox
  }
};
</script>
<style  scoped>
</style>