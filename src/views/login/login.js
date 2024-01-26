import { mapActions } from "vuex";
import virtualkeyboard from "@/components/virtualkeyboard/virtualkeyboard";
import $ from "jquery"

export default {
  name: "Login",
  components: {},
  mounted() {
    $("#input1").virtualkeyboard();
    $("#input2").virtualkeyboard();
  },
  data() {
    return {
      loginForm: {
        //初始值
        name: "",
        password: "",
        telephone: "12345678914",
      },
      user: {
        //初始值
        name: "",
        password: "12345678911",
        telephone: "12345678914",
      },
      loginRules: {
        //验证校验
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      currentTime: '',
      timer: '',
    };
  },
  methods: {
    // 重命名
    ...mapActions("userModule", { userLogin: "login" }),
    // 页面跳转
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    registerView() {
      this.$router.push("/register");
    },
    login() {
      this.userLogin(this.user)
        .then(() => {
          // 跳转首页
          this.$message({
            message: "登录成功",
            type: "success",
          });
          this.$router.replace("./index");
        })
        .catch((err) => {
          this.$router.push('/404');
          console.log("err: ", err.response.data.msg);
        });
    },
  },
};