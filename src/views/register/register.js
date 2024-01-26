import storageService from "@/service/storageService";
import userService from "@/service/userService";
import virtualkeyboard from "@/components/virtualkeyboard/virtualkeyboard";
import $ from "jquery"

import { mapActions } from "vuex";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        pass: "",
        checkPass: "",
        name: "",
      },
      user: {
        name: "1234",
        password: "123456",
        telephone: "12312312315",
      },
      registerRules: {
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [{ required: true, validator: validatePass2, trigger: "blur" }],
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      },
    };
  },
  components: {},
  mounted() {
    $("#input1").virtualkeyboard();
    $("#input2").virtualkeyboard();
    $("#input3").virtualkeyboard();
  },
  methods: {
    // 重命名
    ...mapActions("userModule", { userRegister: "register" }),

    submitForm(formName) {
      // 验证数据
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("register");
          this.register();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    register() {
      // 原方法
      // 请求API
      // const api = "http://localhost:1016/api/auth/register";
      // this.axios
      //   .post(api, { ...this.user })
      //   .then((res) => {
      //     // 保存token
      //     console.log(res.data);
      //     localStorage.setItem('token', res.data.data.token);
      //     this.$message({
      //       message: "注册成功",
      //       type: "success",
      //     });
      //     // 跳转主页
      //     this.$router.replace('/login');
      //   })
      //   .catch((err) => {
      //     // console.log("err:", err.response.data.msg);
      //     this.$message.error(err.response.data.msg);
      //   });

      this.userRegister(this.user)
        .then(() => {
          // 跳转首页
          this.$message({
            message: "注册成功",
            type: "success",
          });
          this.$router.replace("./login");
        })
        .catch((err) => {
          this.$router.push('/404');
          console.log("err: ", err.response.data.msg);
        });
    },

    registerView() {
      this.$router.push("/login");
    },
  },
};