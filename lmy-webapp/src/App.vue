<template>
  <div id="app">
    <LmyLonding v-if="flage">
      <button slot="btn" class="londingBtn" @click="clear">跳过(5)</button>
    </LmyLonding>
    <div v-else>
      <LmyHeader></LmyHeader>
      <div class="main">
        <router-view></router-view>
      </div>
      <LmyFooter></LmyFooter>
    </div>
  </div>
</template>

<script>
import LmyLonding from "./components/LmyLonding.vue";
import LmyHeader from "./components/Header.vue";
import LmyFooter from "./components/Footer.vue";

export default {
  data() {
    return {
      flage: false,
    };
  },
  name: "app",
  components: {
    LmyLonding,
    LmyHeader,
    LmyFooter,
  },
  methods: {
    clear() {
      this.flage = false;
    }
  },
};
</script>
<style>
#app {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.londingBtn {
  position: absolute;
  top: 10px;
  right: 10px;
}
.main {
  padding: 50px 0 70px;
}
</style>
