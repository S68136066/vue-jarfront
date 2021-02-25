<template>
  <div class="load_wapper">
    <el-form class="form_wapper" size="mini" :model="formModel">
      <el-form-item label="用户名:">
        <el-input v-model="formModel.username"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="formModel.password"></el-input>
      </el-form-item>
      <el-form-item align="center">
        <el-button @click="loadBtn" type="primary" plain> 登录</el-button>
      </el-form-item>
      <span>管理者：admin,密码：1</span>
      <br />
      <span>普通用户：user,密码：1</span>
    </el-form>
  </div>
</template>
<script>
import { login, getUser } from "@/api/baseapi";
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      formModel: {
        username: "admin",
        password: "1",
      },
    };
  },
  methods: {
    loadBtn() {
      // 这里应该调用接口，将用户信息传给后端，后端查到用户的角色,类似于:
      // axios.post('/temp',this.formModel).then(res=>{})
      // 我暂时就不模拟了，直接取
      debugger;
      axios.post('/user/login',this.formModel).then(res =>{
        console.log(res)
      })
      // login(this.formModel).then((res) => {
      //   console.log(res);
      // });
      // getUser(this.formModel.username).then(res =>{
      //   console.log(res);
      // })
      let getUserRole = this.formModel.username === "admin" ? "admin" : "user";
      localStorage.setItem("userRole", getUserRole);
      // window.location.href="/main"
      this.$router.push({
        path: "/main",
      });
    },
  },
  mounted() {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.load_wapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(48, 65, 86);
}

.form_wapper {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20%;
  transform: translate(-50%, -50%);
  background-color: #1f2d3d !important;
  padding: 10px 30px;
  border-radius: 10px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 14px;
}
</style>
