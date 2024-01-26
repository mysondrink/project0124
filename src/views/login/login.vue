<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        class="login-form"
      >
        <!-- 用户名 -->
        <el-form-item
          prop="name"
          label="用户名"
          label-width="180px"
          class="item"
        >
          <el-input
            id="input1"
            class="input1"
            v-model="loginForm.name"
            type="text"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item
          prop="password"
          label="密码"
          label-width="180px"
          class="item"
        >
          <el-input
            id="input2"
            v-model="loginForm.password"
            type="password"
            class="input2"
          ></el-input>
        </el-form-item>

        <el-row type="flex" class="row-bg" justify="space-around">
          <!-- 按钮跳转 -->
          <el-button icon="el-icon-user" @click="login()">登录</el-button>
          <el-button icon="el-icon-right" @click="registerView()"
            >注册</el-button
          >
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import loginjs from "./login.js";
export default {
  ...loginjs,
};
</script>

<style lang="less" scoped>
@import "./login.scss";
@import "@/components/virtualkeyboard/virtualkeyboard.css";
</style>