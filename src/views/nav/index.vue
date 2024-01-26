<template>
  <el-row>
    <el-col :span="6" :offset="2">
      <div class="title" style="font-weight: bold; white-space: nowrap">
        荧光分析仪
      </div>
    </el-col>
    <el-col :span="6" :offset="6">
      <div>
        <span
          class="hidden-md-and-down"
          style="font-weight: bold; white-space: nowrap"
          >服务器时间:&nbsp;&nbsp;{{ currentTime }}</span
        >
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "mynav",
  data() {
    return {
      timer: "", //定义一个定时器的变量
      currentTime: "", // 获取当前时间
    };
  },
  created() {
    this.timer = setInterval(() => {
      var year = new Date().getFullYear();
      var month = this.appendZero(new Date().getMonth() + 1);
      var day = this.appendZero(new Date().getDate());
      var hour = this.appendZero(new Date().getHours());
      var minute = this.appendZero(new Date().getMinutes());
      var second = this.appendZero(new Date().getSeconds());
      //修改数据date
      this.currentTime =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;
    }, 1000);
  },
  methods: {
    //时间过滤加0
    appendZero(obj) {
      if (obj < 10) {
        return "0" + obj;
      } else {
        return obj;
      }
    },
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
};
</script>

<style>
</style>