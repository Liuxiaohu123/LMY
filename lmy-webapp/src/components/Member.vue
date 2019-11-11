<template>
  <div>
    <div class="mTop">
      <img class="mTopImg" src="../assets/student_03.gif" alt />
      <p>
        第
        <span
          class="stuNum"
        >{{myNum|allStuNum(data.classStudents) | stuNum(data.classStudents,myId)}}</span>名
      </p>
      <p>获得{{myExp | myExp(data.classStudents,myId)}}经验值</p>
    </div>
    <div class="allStu">
      <p>
        成员总数
        <span>
          <span>{{allStuNum | allStuNum(data.classStudents)}}</span>人
        </span>
      </p>
    </div>
    <div class="students">
      <div class="student" v-for="(i, index) in courses.classStudents" :key="index">
        <span class="studentNumber">{{stuNum | stuNumber(data.classStudents,index)}}</span>
        <img :src="i.src" />
        <div class="studentId">
          <p>{{i.studentName}}</p>
          <p>{{i.studentId}}</p>
        </div>
        <div class="studentExp">
          <p>
            云教材学习
            <span class="sExp">{{i.material}}%</span>
          </p>
          <p>
            <span class="sExp">{{i.studentExperience}}</span>经验
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "myId"],
  data() {
    return {
      allStuNum: 0,
      myNum: 0,
      myExp: 0,
      stuNum: 0,
      courses: this.data
    };
  },
  methods: {
    _sort() {
      for (let i = 0; i < this.courses.classStudents.length; i++) {
        let num = i;
        // window.console.log(i)
        for (let j = i + 1; j < this.courses.classStudents.length; j++) {
          //  window.console.log(j)
          if (
            this.courses.classStudents[num].studentExperience <
            this.courses.classStudents[j].studentExperience
          ) {
            num = j;
          }
        }
        if (num != i) {
          [this.courses.classStudents[num], this.courses.classStudents[i]] = [
            this.courses.classStudents[i],
            this.courses.classStudents[num]
          ];
        }
      }
    }
  },
  created() {
    this._sort();
  },
  filters: {
    allStuNum(num, data) {
      for (let index = 0; index < data.length; index++) {
        num++;
      }
      return num;
    },
    stuNum(num, students, id) {
      let exp = 0;
      students.forEach(student => {
        if (student.studentId == id) {
          exp = student.studentExperience;
        }
      });
      students.forEach(student => {
        if (exp >= student.studentExperience && id != student.studentId) {
          num--;
        }
      });
      return num;
    },
    myExp(num, students, id) {
      students.forEach(student => {
        if (student.studentId == id) {
          num = student.studentExperience;
        }
      });
      return num;
    },
    stuNumber(num, data, id) {
      let arr = [];
      data.forEach(student => {
        if (arr.indexOf(student.studentExperience) == -1) {
          arr.push(student.studentExperience);
          num++;
        }
        // window.console.log(arr);
      });
      let number = data[id].studentExperience;
      data.forEach(student => {
        if (number > student.studentExperience) {
          num--;
        }
      });
      return num;
    }
  }
};
</script>

<style scoped>
.mTop {
  background-color: rgb(0, 187, 222);
  position: relative;
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: 200px;
  padding: 20px 0 10px;
  margin-top: -2px;
}
.mTopImg {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.mTop > p:nth-child(3) {
  font-size: 16px;

  font-weight: 100;
}
.stuNum {
  font-size: 40px;
  display: inline-block;
  padding: 0 10px;
  font-weight: 200;
}
.allStu {
  border-bottom: 1px solid gray;
  padding: 5px;
  font-size: 14px;
  font-weight: 100;
}
.allStu > p > span {
  float: right;
}
.student {
  margin-left: 5px;
  border-bottom: 1px solid gray;
  display: flex;
  padding: 5px 0;
  height: 50px;
}
.studentNumber {
  display: inline-block;
  line-height: 50px;
  padding: 0 5px;
}
.student > img {
  width: 50px;
  height: 50px;
}
.studentId {
  width: 38%;
  padding: 0 5px;
}
.studentId > p:nth-child(1) {
  font-size: 18px;
  font-weight: 100;
}
.studentId > p:nth-child(2) {
  padding: 5px 0;
  font-size: 14px;
  font-weight: 100;
}
.studentExp {
  text-align: right;
  width: 40%;
}
.studentExp > p:nth-child(1) {
  font-size: 14px;
  color: gainsboro;
}
.studentExp > p:nth-child(2) {
  font-size: 14px;
  color: orange;
}
.studentExp > p:nth-child(2) > span {
  font-size: 20px;
}
.sExp {
  display: inline-block;
  padding: 0 5px;
}
</style>