<template>
  <div>
    <Header :flage="flage" :className="data.courses[num].className"></Header>
    <div class="main">
      <router-view :data="data"></router-view>
    </div>
    <Footer :data="value"></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  props:["data"],
  data() {
    return {
      num:0,
      flage: true,
      value: [
        {
          img1: "./image/footer22.gif",
          text: "资源",
          img2: "",
          src: "#/lmyClass/resources"
        },
        {
          img1: "./image/footer23.gif",
          text: "成员",
          img2: "",
          src: "#/lmyClass/member"
        },
        {
          img1: "./image/footer24.gif",
          text: "活动",
          img2: "",
          src: "#/lmyClass/activity"
        },
        {
          img1: "./image/footer25.gif",
          text: "消息",
          img2: "",
          src: "#/lmyClass/news"
        },
        {
          img1: "./image/footer21.gif",
          text: "详情",
          img2: "",
          src: "#/lmyClass/details"
        }
      ]
    };
  },
  components: {
    Header,
    Footer
  },
  created() {
    this.num = this.$route.query.num
    // this.data = this.$route.params.data
  }
};
</script>
<style  scoped>
.main {
  padding: 50px 0 70px;
}
</style>