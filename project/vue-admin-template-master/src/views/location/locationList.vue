<template>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm"
    :rules="rules">
  <el-form-item
    label="地址名称"
    prop="address"
  >
    <el-input v-model="ruleForm.address"></el-input>
  </el-form-item>
  
  <el-form-item
    label="经度"
    prop="longitude"
  >
    <el-input v-model="ruleForm.longitude"></el-input>
  </el-form-item>

  <el-form-item
    label="纬度"
    prop="latitude"
  >
    <el-input v-model="ruleForm.latitude"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import {addLocation} from'@/api/location'
export default {
    name: 'locationList',

    data() {
        return {
            ruleForm: {
                address: "",
                longitude:"",
                latitude:""
            },
            rules:{
                address:[
                    {required:true,message:'地址名称不能为空',trigger:'blur'},
                ],
                longitude:[
                    {required:true,message:'经度不能为空',trigger:'blur'},
                ],
                latitude:[
                    {required:true,message:'纬度不能为空',trigger:'blur'},
                ]
            },
        };
    },

    mounted() {
        
    },

    methods: {
        submitForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
            if (valid) {
            // alert('submit!');
            addLocation({
                address:this.ruleForm.address,
                longitude: this.ruleForm.longitude,
                latitude: this.ruleForm.latitude,
            }).then(res=>{
                if(res.code==101){
                    this.$message({
                        message:res.message,
                        type:'success'
                    });
                    this.$router.push("/location/index");
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
    }
};
</script>

<style lang="scss" scoped>

</style>