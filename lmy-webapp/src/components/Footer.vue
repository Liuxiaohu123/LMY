<template>
  <div class="footer">
    <div v-for="(i, index) in data" :key="index">
      <router-link :to="i.src" @click="change(index)">
        <img :src="i.img1" />
        <p v-text="i.text"></p>
      </router-link>
      <!-- <a :href="i.src" @click="change(index)"> -->
      <!-- <img :src="i.img1" />
      <p v-text="i.text"></p>-->
      <!-- </a> -->
    </div>
  </div>
</template>
<script>
import Bus from "../router/bus.js";
export default {
  props: ["data"],
  name: "Header",
  methods: {
    change(num) {
      Bus.$emit("val", this.data[num].text);
    }
  }
};
</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid gray;
  padding: 10px 0 5px;
  background-color: white;
}
.footer > div > a {
  color: black;
  text-decoration: none;
}
.footer > div {
  width: 60px;
  text-align: center;
}
.footer > div > a > img {
  width: 100%;
  height: 30px;
}
.footer > div > a > p {
  margin: 0;
}
</style>