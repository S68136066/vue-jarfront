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
        <el-button @click="loadBtn" type="primary"> 登 录</el-button>
        <el-button type="primary" @click="dialogFormVisible = true"
          >注 册</el-button
        >
      </el-form-item>
    </el-form>
    <el-dialog
      title="用户注册"
      :visible.sync="dialogFormVisible"
      append-to-body
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名称" prop="name">
          <el-col :span="16">
            <el-input v-model="ruleForm.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="用户邮箱" prop="mail">
          <el-col :span="16">
          <el-input v-model="ruleForm.mail"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="用户手机" prop="phone">
          <el-col :span="16">
          <el-input v-model="ruleForm.phone"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-col :span="16">
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="确认密码" prop="passwordconfirm">
          <el-col :span="16">
            <el-input v-model="ruleForm.passwordconfirm" type="password"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="使用状态" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="用户角色" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用户性别" prop="usersex">
          <el-radio-group v-model="ruleForm.usersex">
            <el-radio label="男" value="0"></el-radio>
            <el-radio label="女" value="1"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { login, getUser } from "@/api/baseapi";
import Cookies from "js-cookie";
import { Notification, MessageBox, Message } from "element-ui";
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",
      ruleForm: {
        name: "",
        mail: "",
        phone:"",
        passwordconfirm:"",
        password:"",
        region: "",
        delivery: false,
        //type: [],
        resource: "",
        usersex: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],

        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
      
      },
      formModel: {
        username: "s68136066",
        password: "758758",
      },
    };
  },
  methods: {
    loadBtn() {
      debugger;
      login(this.formModel).then((res) => {
        console.log(res);
        if (res.code == 200) {
          Cookies.set("username", res.data.chinaname, 30);
          let getUserRole = this.formModel.username;
          localStorage.setItem("userRole", getUserRole);
          Message({
            message: res.message,
            type: "success",
          });
          this.$router.push({
            path: "/main",
          });
        } else {
          return Message({
            message: res.message,
            type: "error",
          });
        }
      });
      // getUser(this.formModel.username).then(res =>{
      //   console.log(res);
      // }) === "admin" ? "admin" : "user"
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
