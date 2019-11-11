<template>
  <div class="londing">
    <!-- <img class="londingImg" src="/image/lmy-londing.gif"> -->
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
    background: url("/image/lmy-londing.gif") no-repeat;
    background-size: 100% 100%;
    
  }
</style>
  
