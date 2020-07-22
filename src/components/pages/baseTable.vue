<template>
  <div>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/table">基础表格</a></el-breadcrumb-item>
     </el-breadcrumb>

      <!-- 卡片内容区 -->
      <el-card>
        <!-- 筛选行 -->
        <el-row>
            <el-col :span="16">
                <el-row :gutter="5">
                    <el-col :span="3">
                      <el-button type="primary" icon="el-icon-delete" @click="allDeleteClick">批量删除</el-button>
                    </el-col>
                    <el-col :span="5">
                        <el-select v-model="inputValue" placeholder="地址">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="5">
                        <el-input v-model="inputValue" placeholder="请输入内容"></el-input>
                    </el-col>
                    <el-col :span="4">
                       <el-button type="primary" icon="el-icon-search" @click="searchClick">搜索</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>

        <!-- 表格区域 -->
        <el-table
            stripe
            border
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            ref="multipleTable"
            :data="showData.filter(data => !inputValue 
            || data.username.toLowerCase().includes(inputValue.toLowerCase())
            || data.address.toLowerCase().includes(inputValue.toLowerCase()))"
            tooltip-effect="dark"
            @selection-change="handleSelectionChange"
            style="width: 100%">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>

            <!-- id 列 -->
            <el-table-column
                label="ID"
                type="index"
                width="55">
            </el-table-column>

            <!-- 用户名列 -->
            <el-table-column
                prop="username"
                label="用户名">
            </el-table-column>

            <!-- 账户余额 -->
            <el-table-column
                label="金额">
                <template slot-scope="scope">￥ {{scope.row.count}}</template>
            </el-table-column>

            <!-- 地址 -->
            <el-table-column
                label="地址"
                prop="address">
            </el-table-column>

            <!-- 状态 -->
            <el-table-column
                label="是否已经付款">
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.isTrue" type="success">已付款</el-tag>
                    <el-tag v-else type="danger">未付款</el-tag>
                </template>
            </el-table-column>

            <!-- 注册时间 -->
            <el-table-column
                prop="signDate"
                label="注册时间">
            </el-table-column>
             <!-- 操作列 -->
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini"  icon="el-icon-edit" type="primary" @click="editClick(scope.row.id)">修改</el-button>
                    <el-button size="mini"  icon="el-icon-delete" type="danger" @click="delClick(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->
         <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryInfo.pageNum"
            :page-sizes="[1, 2, 5, 10]"
            :page-size="queryInfo.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
         </el-pagination>
      </el-card>

      <!-- 对话框 -->
      <el-dialog
        title="修改"
        :visible.sync="editDialogVisible"
        width="30%">
        <!-- 表单 -->
        <el-form label-width="80px" :model="editDialogInfo">
            <el-form-item label="用户名">
                <el-input v-model="editDialogInfo.showUsername"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="editDialogInfo.showAdress"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="editDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editDialogSureClick">确 定</el-button>
        </span>
     </el-dialog>
  </div>
</template>

<script>
export default {
    name: 'baseTable',
    data(){
        return{
            // 多选框选择的值
            selectValue:'',
            options: [{
                value: '广东省',
                label: '广东省'
                },{
                value: '浙江省',
                label: '浙江省'
            }],
            // 输入框输入值
            inputValue:'',
            // 展示数据
            showData:[],
            
            // 表格数据
            tableData:
            [
                {
                    id:1,
                    username:'张三',
                    count:123,
                    address:'广东省东莞市长安镇',
                    isTrue:true,
                    signDate:'2019-11-1'
                },{
                    id:2,
                    username:'李四',
                    count:456,
                    address:'广东省广州市白云区',
                    isTrue:false,
                    signDate:'2019-10-11'
                },{
                    id:3,
                    username:'王五',
                    count:888,
                    address:'湖南省长沙市',
                    isTrue:true,
                    signDate:'2020-07-22'	
                },{
                    id:4,
                    username:'张三',
                    count:123,
                    address:'广东省东莞市长安镇',
                    isTrue:true,
                    signDate:'2019-11-1'
                },{
                    id:5,
                    username:'李四',
                    count:456,
                    address:'广东省广州市白云区',
                    isTrue:false,
                    signDate:'2019-10-11'
                },{
                    id:6,
                    username:'王五',
                    count:888,
                    address:'湖南省长沙市',
                    isTrue:true,
                    signDate:'2020-07-22'	
                },    {
                    id:7,
                    username:'张三',
                    count:123,
                    address:'广东省东莞市长安镇',
                    isTrue:true,
                    signDate:'2019-11-1'
                },{
                    id:8,
                    username:'李四',
                    count:456,
                    address:'广东省广州市白云区',
                    isTrue:false,
                    signDate:'2019-10-11'
                },{
                    id:9,
                    username:'王五',
                    count:888,
                    address:'湖南省长沙市',
                    isTrue:true,
                    signDate:'2020-07-22'	
                },{
                    id:10,
                    username:'张三',
                    count:123,
                    address:'广东省东莞市长安镇',
                    isTrue:true,
                    signDate:'2019-11-1'
                },{
                    id:11,
                    username:'李四',
                    count:456,
                    address:'广东省广州市白云区',
                    isTrue:false,
                    signDate:'2019-10-11'
                },{
                    id:12,
                    username:'王五',
                    count:888,
                    address:'湖南省长沙市',
                    isTrue:true,
                    signDate:'2020-07-22'	
                }],
                queryInfo:{
                    pageSize:10,
                    pageNum:1
                },
                total:13,
                // 多选选中的数组
                multipleSelection:[],
                // 需要删除的数组
                delList:[],
                //控制修改对话框的显示与隐藏
                editDialogVisible:false,
                // 修改对话框上展示的信息
                editDialogInfo:{
                    showUsername:'',
                    showAdress:''
                },
                //当前操作的行id
                currentID:0
       }      
    },
    methods:{
        // 请求表格数据
        // 模拟向后台请求数据
        getTableData(){
           this.showData = []; 
           for(let i = 0;i < this.queryInfo.pageSize;i++){
            //    console.log("i:",i)
               this.showData[i] = this.tableData[i];
           }
        //    console.log('pagesize',this.queryInfo.pageSize)
        //    console.log(this.showData);
        },
        // 每页大小改变
        handleSizeChange(newPageSize){
            console.log(newPageSize);
            this.queryInfo.pageSize = newPageSize
            this.getTableData();
        },

        // 当前页改变
        handleCurrentChange(newPageNum){
            // console.log(newPageNum);
            this.$message.success("跳转到"+newPageNum+"页");
            this.queryInfo.pageNum = newPageNum
            this.getTableData();
        },
        
        handleSelectionChange(val){
            this.multipleSelection = val
            // console.log(this.multipleSelection) 
        },

        //批量删除的点击事件
        allDeleteClick(){
            // 判断是否选中
            if(this.multipleSelection){
                this.$message.info("请选择需要删除的项")
                return
            }
            const length = this.multipleSelection.length
            this.delList = this.delList.concat(this.multipleSelection)
            console.log('dellist',this.delList);
            //发起请求删除相应的数据
            this.$message.success("发起请求删除相应的数据");
            // 清空多选数组
            this.multipleSelection = []
        },
        // 搜索按钮点击事件
        searchClick(){
            this.$message.success("搜索成功")
        },
        // 点击修改的响应事件
        editClick(id){
            // console.log("点击");
            id = id - 1
            this.editDialogVisible = true
            this.editDialogInfo.showUsername = this.showData[id].username
            this.editDialogInfo.showAdress = this.showData[id].address
            // console.log('id',id);
            this.currentID = id
        },
        //修改对话框的确认事件
        editDialogSureClick(){
            // console.log('currentID',this.currentID);
            this.showData[this.currentID].username = this.editDialogInfo.showUsername
            this.showData[this.currentID].address = this.editDialogInfo.showAdress 
            this.$message.success("修改成功")
            this.editDialogVisible = false
        },
        // 删除某行数据
        delClick(id){
             this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$message({
                    type: 'success',
                    message: "发起请求进行删除！"
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                 });
          // 将相应的数据删除
        }
    },
    created(){
        this.getTableData();
    }
}

</script>

<style scoped>
.el-table{
    margin-top: 8px;
    margin-bottom: 8px;
}

.el-row{
    padding: 3px;
    border-radius: 4px;
    background-color: #eeeeee;
}

.el-pagination{
    padding: 10px;
    border-radius: 4px;
    background-color: #eef1f6;
}
</style>