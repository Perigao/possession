<template>
    <div class="locationList">
        <el-table
    :data="tableData"
    style="width: 100%">
        <el-table-column
        type="index"
        width="50">
        </el-table-column>
        <!-- <el-table-column
            prop="addressid"
            label="地址ID"
            width="180">
        </el-table-column> -->
        <el-table-column
            prop="addressname"
            label="地址名称">
        </el-table-column>
        <el-table-column
            prop="longitude"
            label="经度">
        </el-table-column>
        <el-table-column
            prop="latitude"
            label="纬度">
        </el-table-column>
        <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.row, tableData)"
          type="text"
          size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
    </el-table>
    </div>
</template>

<script>
import {getLocation,delLocation} from '@/api/location.js';

export default {
    name: 'location',

    data() {
        return {
            tableData:[]
        };
    },
    created() {
      this.getAllLocation();
    },
    mounted() {
        
    },

    methods: {
        getAllLocation(){
            getLocation().then(res=>{
                if(res.code==101){
                    this.tableData = res.data;
                }
            }).catch(err=>{
                console.log(err,"失败");
            })
        },
        deleteRow(rows) {
            // rows.splice(index, 1);
            delLocation({
                addressid: rows.addressid
            }).then(res=>{
                if(res.code==101){
                    this.$message({
                        message:res.message,
                        type:'success'
                    });
                    this.getAllLocation();
                }
            }).catch(err=>{
                console.log(err,'失败')
            })
        }
    },
};
</script>

<style lang="scss" scoped>
.locationList{
    border: 1px solid rgb(151, 151, 156);
}
::v-deep .el-button{
    width: 50px;
    height: 30px;
    background: rgb(174, 177, 174);
    color: darkblue;
}
</style>