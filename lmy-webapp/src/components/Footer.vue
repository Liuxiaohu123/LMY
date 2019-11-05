<template>
  <div class="footer">
    <div v-for="(i, index) in flage?value.value2:value.value1" :key="index">
      <a :href="i.src" @click="change(index)">
        <img :src="i.img1" />
        <p v-text="i.text"></p>
      </a>
    </div>
  </div>
</template>
<script>
import Bus from "../router/bus.js";
export default {
  data() {
    return {
      flage: false,
      value: {
        value1: [
          {
            img1: require("../assets/booter12.gif"),
            text: "班课",
            img2: require("../assets/booter11.gif"),
            src: "#/class"
          },
          {
            img1: require("../assets/booter22.gif"),
            text: "发现",
            img2: require("../assets/booter21.gif"),
            src: "#/find"
          },
          {
            img1: require("../assets/booter32.gif"),
            text: "我的",
            img2: require("../assets/booter31.gif"),
            src: "#/my"
          }
        ],
        value2: [
          { img1: require("../assets/footer22.gif"), text: "资源", img2: "",src:"#/resources" },
          { img1: require("../assets/footer23.gif"), text: "成员", img2: "",src:"#/member" },
          { img1: require("../assets/footer24.gif"), text: "活动", img2: "",src:"#/activity" },
          { img1: require("../assets/footer25.gif"), text: "消息", img2: "",src:"#/news" },
          { img1: require("../assets/footer21.gif"), text: "详情", img2: "",src:"#/details" }
        ]
      }
    };
  },
  name: "Header",
  methods: {
    change(num) {
      Bus.$emit("val", num);
    }
  },
  beforeUpdate() {},

  mounted: function() {
    let vm = this;
    Bus.$on("val1", data => {
      vm.flage = data;
    });
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