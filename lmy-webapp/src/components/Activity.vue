<template>
  <div class="activityMain">
    <div class="activity">
      <a
        href="#/lmyClass/activity/allActivity"
        :class=" (index==1)?'activityDiv1':'activityDiv' "
        @click="changea(1)"
      >
        <p>全部</p>
        <p>{{allActivity | Statistics1(allActivity,"data.activity")}}</p>
      </a>
      <a
        href="#/lmyClass/activity/activitying"
        :class="  (index==2)?'activityDiv1':'activityDiv' "
        @click="changea(2)"
      >
        <p>进行</p>
        <p>{{activitying | Statistics2(activitying,data.activity)}}</p>
      </a>
      <a
        href="#/lmyClass/activity/activited"
        :class="  (index==3)?'activityDiv1':'activityDiv' "
        @click="changea(3)"
      >
        <p>已结束</p>
        <p>{{activited | Statistics3(activited,data.activity)}}</p>
      </a>
    </div>
    {{data.activity}}
    <router-view :data="data.activity"></router-view>
  </div>
</template>

<script>
export default {
  name: "Activity",
  props: ["data"],
  data() {
    return {
      allActivity: 0,
      activitying: 0,
      activited: 0,
      index: 1
    };
  },
  methods: {
    changea(num) {
      this.index = num;
    }
  },
  filters: {
    Statistics1(num,data) {
      // for(let i=0;i<arr.length;i++){
      //   num++
      // } 
      num = data;
      num = num+1;
      return num;
    },
    Statistics2(num,data) {
      for(let i=0;i<Object.keys(data);i++){
        num++
      } 
      return num
    },
    Statistics3(num,data) {
      for(let i=0;i<Object.keys(data);i++){
        num++
      } 
      return num
    }
  }
};
</script>
<style  scoped>
.activityMain {
  padding-top: 50px;
}
.activity {
  display: flex;
  font-size: 14px;
  position: fixed;
  padding: 5px 0 0;
  top: 50px;
  width: 100%;
  background-color: white;
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