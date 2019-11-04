<template>
  <div class="footer">
    <div @click="change(0)">
      <img src="../assets/booter12.gif" >
      <p v-text="value[0]"></p>
    </div>
    <div @click="change(1)">
      <img src="../assets/booter22.gif" >
      <p v-text="value[1]"></p>
    </div>
    <div @click="change(2)">
      <img src="../assets/booter32.gif" >
      <p v-text="value[2]"></p>
    </div>
  </div>
</template>
<script>
import Bus from '../router/bus.js';
export default {
  data() {
    return {
      value:["班课","发现","我的"]
    }
  },
  name:"Header",
  methods: {
    change(num){
        Bus.$emit('val', this.value[num])
    }
  },
}
</script>
<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid gray;
    padding: 10px 0 5px;
  }
  .footer>div{
    width: 60px;
    text-align: center;
  }
  .footer>div>img{
    width: 80%;
    height: 30px;
  }
  .footer>div>p{
    margin: 0;
  }
</style>