<template>
  <div>
    <activityBox :data="i" v-for="(i, index) in data" :key="index"></activityBox>
  </div>
</template>

<script>
import activityBox from './ActivityBox'

export default {
  props:["data"],
  name:"Activity",
  components:{
    activityBox
  }
}
</script>
<style  scoped>

</style>