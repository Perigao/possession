<template>
    <div class="add-message">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :rules="rules"
      >
        <el-form-item label="用户名称" prop="uname">
          <el-input v-model="ruleForm.uname"></el-input>
        </el-form-item>
        <el-form-item label="地址ID" prop="addressid">
          <el-select v-model="ruleForm.addressid" placeholder="请选择">
            <el-option
              v-for="item in ruleForm.options"
              :key="item.addressid"
              :label="item.addressname"
              :value="item.addressid"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="等级ID" prop="levelid">
          <el-select v-model="ruleForm.levelid" placeholder="请选择">
            <el-option
              v-for="item in ruleForm.options1"
              :key="item.jrid"
              :label="item.levelname"
              :value="item.jrid"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话号码" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" v-if="open"
            >提交</el-button
          >
          <el-button type="primary" @click="updateForm('ruleForm')" v-else
            >修改</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  import { locationMain } from "@/api/location.js";
  import { addMessage, messageId, updateMessage } from "@/api/message.js";
  import { levelMain } from "@/api/level.js";
  export default {
    name: "levelList",
    data() {
      return {
        ruleForm: {
          tel: "",
          levelid: "",
          addressid: "",
          uname: "",
          options: [],
          option1: [],
        },
        open:true,
        rules: {
          uname: [
            { required: true, message: "用户姓名不能为空", trigger: "blur" },
          ],
          tel: [{ required: true, message: "用户电话不能为空", trigger: "blur" }],
          addressid: [
            { required: true, message: "地址ID不能为空", trigger: "change" },
          ],
          levelid: [
            { required: true, message: "等级ID不能为空", trigger: "change" },
          ],
        },
      };
    },
    created() {
      console.log(this.$route.params.id);
      if (this.$route.params.id) {
        // 通过ID查询信息
        this.getList();
        this.open = false;
      }
      // 地址ID
      this.getAddress();
      // 等级ID
      this.getLevel();
    },
    methods: {
      getList() {
        messageId({
          id: this.$route.params.id,
        })
          .then((res) => {
            if (res.code == 101) {
              this.ruleForm.uname = res.data[0].jrname;
              this.ruleForm.tel = res.data[0].jrtel;
              this.ruleForm.addressid = res.data[0].jraddressesid;
              this.ruleForm.levelid = res.data[0].jrlevel;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
      getAddress() {
        locationMain()
          .then((res) => {
            this.ruleForm.options = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      },
      getLevel() {
        levelMain()
          .then((res) => {
            this.ruleForm.options1 = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      },
      submitForm(formName) {
        console.log(this.ruleForm);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            addMessage({
              uname: this.ruleForm.uname,
              tel: this.ruleForm.tel,
              addressid: this.ruleForm.addressid,
              levelid: this.ruleForm.levelid,
            })
              .then((res) => {
                if (res.code == 101) {
                  this.$message({
                    message: res.message,
                    type: "success",
                  });
  
                  this.$router.push({
                    name: "messageList",
                  });
                }
              })
              .catch((err) => {
                console.log(err, "失败");
              });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      updateForm(formName) {
        console.log(this.ruleForm);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            updateMessage({
              uname: this.ruleForm.uname,
              tel: this.ruleForm.tel,
              addressid: this.ruleForm.addressid,
              levelid: this.ruleForm.levelid,
              id: this.$route.params.id
            })
              .then((res) => {
                if (res.code == 101) {
                  this.$message({
                    message: res.message,
                    type: "success",
                  });
  
                  this.$router.push({
                    name: "messageList",
                  });
                }
              })
              .catch((err) => {
                console.log(err, "失败");
              });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .add-message {
    width: 1000px;
    margin: 200px auto 0;
  }
  // 深度样式穿透 v-deep => ::v-deep
  // ::v-deep .el-form-item__content {
  //   line-height: 100px;
  // }
  // .el-input {
  //   background: #00f;
  // }
  </style>