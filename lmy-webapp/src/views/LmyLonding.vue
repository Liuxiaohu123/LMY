<template>
    <Londing>
      <button slot="btn" class="londingBtn" @click="clear">跳过(5)</button>
    </Londing>
</template> 
<script>
import Londing from "../components/Londing.vue";
export default {
  name:"LmyLonding",
  components: {
    Londing
  },
  methods: {
    clear(){
      
    }
  },
};
</script>
<style  scoped>
.londingBtn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>