<template>
  <div>
    <Header :flage="flage"></Header>
    <div class="main">
      <router-view :data="data"></router-view>
    </div>
    <Footer :data="value" ></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  props:["data"],
  data() {
    return {
      flage:false,
      value: [
        {
          img1: "/image/booter12.gif",
          text: "班课",
          img2: "./image/booter11.gif",
          src: "class"
        },
        {
          img1: "/image/booter22.gif",
          text: "发现",
          img2: "./image/booter21.gif",
          src: "find"
        },
        {
          img1: "/image/booter32.gif",
          text: "我的",
          img2: "./image/booter31.gif",
          src: "my"
        }
      ]
    };
  },
  components:{
    Header,
    Footer
  }
};
</script>
<style  scoped>
.main {
  padding: 50px 0 70px;
}
</style>