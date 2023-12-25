<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="jrid"
        label="等级id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="levelname"
        label="等级名称"
        width="180">
      </el-table-column>
      <!-- 删除 -->
      <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.row)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>

    </el-table>

</template>

<script>
import {levelMain} from '@/api/level';
import {delLevel} from '@/api/level';
export default {
    // name: '',
    path:"/level",

    data() {
        return {
            tableData:[]
        }
    },

    created(){
        this.getList();
    },
    mounted() {
        
    },

    methods: {
        // 获取接口
        getList(){
            levelMain()
                .then((res)=>{
                    if(res.code == 101){
                    this.tableData = res.data;
                    }
                }).catch((err)=>{
                    console.log(err,'err')
                });
        },
        // 删除
        deleteRow(rows) {
            // rows.splice(index, 1);
            delLevel({
                levelid:rows.jrid
            }).then(res =>{
                if(res.code == 101){
                    this.$message({
                        message:res.message,
                        type:'success'
                    });
                    this.getList();
                }
            }).catch(err =>{
                console.log(err,'失败')
            })
        },

    },
};
</script>

<style lang="scss" scoped>

</style>