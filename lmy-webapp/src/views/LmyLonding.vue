<template>
  <Londing>
    <button slot="btn" class="londingBtn" @click="toHome">跳过({{num  }})</button>
  </Londing>
</template> 
<script>
import Londing from "../components/Londing.vue";
export default {
  name: "LmyLonding",
  data() {
    return {
      num: 5,
      time: null
    };
  },
  components: {
    Londing
  },
  methods: {
    toHome() {
      this.$router.push("/lmyHome");
      if(this.time){
        clearInterval(this.time);
      }
    },
    _countdown() {
      let that = this;
      this.time = setInterval(() => {
        if (this.num > 0) {
          this.num--;
        } else {
          clearInterval(this.time);
          that.toHome()
        }
      }, 1000);
    }
  },
  created() {
    this._countdown(this.num)
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