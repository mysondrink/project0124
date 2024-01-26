<template>
  <div class="register-container">
    <el-card class="box-card" shadow="never">
      <el-form
        :model="registerForm"
        :rules="registerRules"
        ref="registerForm"
        class="register-form"
      >
        <el-form-item
          prop="name"
          label="用户名"
          label-width="180px"
          class="item"
        >
          <el-input
            id="input1"
            class="input1"
            v-model.number="registerForm.name"
            type="text"
          ></el-input>
        </el-form-item>

        <el-form-item prop="pass" label="密码" label-width="180px" class="item">
          <el-input
            id="input2"
            class="input2"
            type="password"
            v-model="registerForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="checkPass"
          label="再次输入"
          label-width="180px"
          class="item"
        >
          <el-input
            id="input3"
            class="input3"
            type="password"
            v-model="registerForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-row type="flex" class="row-bg" justify="space-around">
          <el-button icon="el-icon-check" @click="submitForm('registerForm')">确认</el-button>
          <el-button icon="el-icon-refresh-left" @click="registerView()">返回</el-button>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
 
<script>
import registerjs from "./register.js";
export default {
  ...registerjs,
};
</script>

<style lang='less' scoped>
@import "./register.scss";
@import "@/components/virtualkeyboard/virtualkeyboard.css";
</style>
