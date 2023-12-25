<template>
    <div class="MessageList">
      <div class="search">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.addressid"
            :label="item.addressname"
            :value="item.addressid"
          >
          </el-option>
        </el-select>
        <el-button type="primary" @click="searchMain" class="btn">搜索</el-button>
        <el-button @click="resetForm">重置</el-button>
      </div>
      <div class="list">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" width="50"> </el-table-column>
          <el-table-column prop="jrname" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="jrtel" label="电话号码" width="180">
          </el-table-column>
          <el-table-column prop="jrlevel" label="等级ID" width="180">
          </el-table-column>
          <el-table-column prop="levelname" label="等级名称"> </el-table-column>
          <el-table-column prop="addressname" label="地址名称"> </el-table-column>
          <el-table-column label="操作" width="200" fixed="right">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </template>
  
  <script>
  import { locationMain } from "@/api/location.js";
  import { messageMain, delMessage, searchMessage } from "@/api/message.js";
  
  export default {
    name: "location",
    data() {
      return {
        tableData: [],
        options: [],
        value: "",
      };
    },
    created() {
      // 获取地址方法
      this.getMain();
      // 获取信息列表方法
      this.getList();
    },
    methods: {
      // 获取地址方法
      getMain() {
        locationMain()
          .then((res) => {
            this.options = res.data;
          })
          .catch((err) => {
            console.log(err, "失败");
          });
      },
      //获取信息列表方法
      getList() {
        messageMain()
          .then((res) => {
            console.log(res, "成功");
            if (res.code == 101) {
              this.tableData = res.data;
            } else {
              this.tableData = [];
            }
          })
          .catch((err) => {
            console.log(err, "失败");
          });
      },
      // 删除
      handleDelete(row) {
        this.$confirm("是否删除当前信息", "确认删除", {
          distinguishCancelAndClose: true,
          confirmButtonText: "删除",
          cancelButtonText: "取消",
        })
          .then(() => {
            delMessage({
              id: row.jrid,
            })
              .then((res) => {
                console.log(res, "删除成功");
                if (res.code == 101) {
                  this.$message({
                    message: res.message,
                    type: "success",
                  });
                  this.getList();
                  this.value = "";
                }
              })
              .catch((err) => {
                console.log(err, "删除失败");
              });
          })
          .catch((action) => {
            this.$message({
              type: "info",
              message:
                action === "cancel" ? "放弃删除并离开页面" : "停留在当前页面",
            });
          });
      },
      // 查询地址
      searchMain() {
        var _addressName = "";
        this.options.forEach((item) => {
          if (item.addressid == this.value) {
            _addressName = item.addressname;
          }
        });
        console.log(_addressName);
        searchMessage({
          searchid: this.value,
        })
          .then((res) => {
            if (res.code == 101) {
              this.tableData = res.data.map((val) => {
                console.log(val, "val");
                val.addressname = _addressName;
                val.levelname = "暂无内容";
                return val;
              });
            } else {
              this.tableData = [];
            }
          })
          .catch((err) => {
            console.log(err, "失败");
          });
      },
      // 重置选择
      resetForm() {
        this.value = "";
        this.getList();
      },
      // 修改
      handleEdit(row) {
        this.$router.push({
          name: "addMessage",
          params: {
            id: row.jrid,
          },
        });
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .MessageList {
    width: 800px;
    margin: 100px auto 0;
  }
  .list {
    margin-top: 30px;
  }
  .btn {
    margin-left: 20px;
  }
  </style>