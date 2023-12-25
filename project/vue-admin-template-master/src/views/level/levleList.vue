<template>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm" 
    :rules="rules">
  <el-form-item
    label="等级名称"
    prop="levelname"
  >
    <el-input v-model="ruleForm.levelname"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import {addLevel} from '@/api/level';
export default {
    // name: '',
    path:"/level",

    data() {
        return {
            ruleForm: {
                levelname: ''
            },
            rules:{
                levelname: [
                    {required: true, message: '等级名称不能为空', trigger: 'blur' },
                ],
            }

        };
    },

    mounted() {
        
    },

    methods: {
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            addLevel({
                levelname:this.ruleForm.levelname
            }).then(res=>{
                if(res.code==101){
                    this.$message({
                        message:res.message,
                        type:'success'
                    });
                    this.$router.push("/level/index");
                }
            }).catch(err=>{
                console.log(err,'失败')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
};
</script>

<style lang="scss" scoped>

</style>