<template>
  <div class="londing">
    <img class="londingImg" src="../assets/lmy-londing.gif">
    <slot name="btn"></slot>
  </div>
</template>
<script>
export default {
  name:"Londing"
}
</script>
<style scoped>
  .londing{
    height: 100%;
    width: 100%;
  }
  .londingImg{
    display: block;
    width: 100%;
    height: 100%
  }
</style>
  
