<template>
  <div>
    <div class="activity">
      <a href :class=" (index==1)?'activityDiv1':'activityDiv' " @click="changea(1)">
        <p>全部</p>
        <p>{{num}}</p>
      </a>
      <a :class="  (index==2)?'activityDiv1':'activityDiv' " @click="changea(2)">
        <p>进行</p>
        <p>{{num}}</p>
      </a>
      <a :class="  (index==3)?'activityDiv1':'activityDiv' " @click="changea(3)">
        <p>已结束</p>
        <p>{{num}}</p>
      </a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Activity",
  props: ["data"],
  data() {
    return {
      num: 1,
      index: 1
    };
  },
  methods: {
    changea(num) {
      this.index = num;
    }
  }
};
</script>
<style  scoped>
.activity {
  display: flex;
  padding: 5px 0 0;
  font-size: 14px;
}
.activity > a {
  flex: 1;
  text-align: center;
  padding-bottom: 3px;
  color: black;
}
.activityDiv {
  border-bottom: 1px solid gainsboro;
}
.activityDiv1 {
  border-bottom: 2px solid rgb(0, 187, 222);
  color: rgb(0, 187, 222);
}

</style>