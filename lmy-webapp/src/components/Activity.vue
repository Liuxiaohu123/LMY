<template>
  <div class="activityMain">
    <div class="activity">
      <a
        href="#/lmyClass/activity/allActivity"
        :class=" (index==1)?'activityDiv1':'activityDiv' "
        @click="changea(1)"
      >
        <p>全部</p>
        <p>{{allActivity | Statistics(data.activity,"1")}}</p>
      </a>
      <a
        href="#/lmyClass/activity/activitying"
        :class="  (index==2)?'activityDiv1':'activityDiv' "
        @click="changea(2)"
      >
        <p>进行</p>
        <p>{{activitying | Statistics(data.activity,"2")}}</p>
      </a>
      <a
        href="#/lmyClass/activity/activited"
        :class="  (index==3)?'activityDiv1':'activityDiv' "
        @click="changea(3)"
      >
        <p>已结束</p>
        <p>{{activited | Statistics(data.activity,"3")}}</p>
      </a>
    </div>
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
    Statistics(num, data, index) {
      if (index == "1") {
        for (let i = 0; i < data.length; i++) {
          num++;
        }
        return num;
      } else if (index == "2") {
        for (let i = 0; i < data.length; i++) {
          if (data[i].state) {
            num++;
          }
        }
        return num;
      } else if (index == "3") {
        for (let i = 0; i < data.length; i++) {
          if (!data[i].state) {
            num++;
          }
        }
        return num;
      }
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