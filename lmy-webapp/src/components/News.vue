<template>
  <div>
    <div v-if="data.news.calssNews">
      <div class="classNews classBox" v-for="(i, index) in data.news.calssNews" :key="index" >
        <img src="../../public/image/news_03.gif" />
        <div>
          <p class="classTop">
            班课通知
            <span class="time">{{i.time?i.time:""}}</span>
            <span class="go">></span>
          </p>
          <p class="classTil">{{i.news?i.news:"暂无新消息"}}</p>
        </div>
      </div>
    </div>
    <div v-if="data.news.lmyNews">
      <div class="lmyNews classBox" v-for="(i, index) in data.news.lmyNews" :key="index">
        <img src="../../public/image/news_06.gif" />
        <div>
          <p class="classTop">
            小蓝消息
            <span class="time">{{i.time?i.time:""}}</span>
            <span class="go">></span>
          </p>
          <p class="classTil">{{i.news?i.news:"暂无新消息"}}</p>
        </div>
      </div>
    </div>
    <div class="Cmian">
      <img src="../../public/image/news_09.gif">
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style scoped>
.classBox {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid gainsboro;
}
.classBox > img {
  width: 50px;
  height: 50px;
}
.classBox > div {
  padding: 0 5px;
}
.go {
  position: absolute;
  right: 0;
  font-size: 20px;
  font-weight: 600;
  color: gray;
}
.time {
  position: absolute;
  right: 20px;
  color: gray;
}
.classTil {
  color: gray;
  padding: 5px 0;
  font-size: 14px;
  font-weight: 200;
}
.classTop {
  padding: 3px 0;
}
.Cmian{
  text-align: center;
  padding: 30px 0;
}
.Cmian>img{
  width: 300px;
  height: 250px;
  display: inline-block;
}
</style>