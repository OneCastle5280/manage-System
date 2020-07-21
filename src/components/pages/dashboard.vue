<template>
<div>
  <el-row :gutter="20">
    <!-- 左部分 -->
    <el-col :span="8">
      <!-- 用户状态卡片 -->
      <el-row>
        <el-col>
          <el-card shadow="hover" class="user-info-card">
            <!-- 用户信息 -->
            <div class="user-info">
              <img src="../../assets/img/img.jpg" alt="头像" class="user-avator">
              <!-- 用户详细信息 -->
              <div class="user-info-item">
                <div class="user-name" >{{name}}</div>
                <div class="user-role">{{role}}</div>
              </div>
            </div>
            <!-- 登录信息 -->
            <div class="user-signIn-info">
              上次登录时间：
              <span>2020-07-20</span>
            </div>
            <div class="user-signIn-info">
              上次登录地点：
              <span>广州</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- 语言详情卡片 -->
      <el-row>
        <el-col>
          <el-card>
            <!-- 标题 -->
            <div class="language-title">
              <span>语言详情</span>
            </div>
            <!-- 进度条 -->
            <div class="language-progress">
              Vue 
              <el-progress :percentage="69.3" color="#42b983"></el-progress>
              JavaScript 
              <el-progress :percentage="20.1" color="#f1e05a"></el-progress>
              CSS 
              <el-progress :percentage="12.9"></el-progress>
              HTML
              <el-progress :percentage="29.9" color="#f56c6c"></el-progress>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
    <!-- 右部分 -->
    <el-col :span="16">
      <!-- 数据展示 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card shadow="hover" :body-style="{padding:'0px'}">
            <!-- 图片部分 -->
              <div class="data-card">
                <i class="el-icon-user data-card-icon_1"></i>
                <!-- 数字部分 -->
                <div class="data-num">
                  <div>5280</div>
                  <div class="data-num-title">用户访问量</div>
                </div>
              </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover" :body-style="{padding:'0px'}">
            <!-- 图片部分 -->
              <div class="data-card">
                <i class="el-icon-message data-card-icon_2"></i>
                <!-- 数字部分 -->
                <div class="data-num">
                  <div>326</div>
                  <div class="data-num-title">系统消息</div>
                </div>
              </div>
          </el-card>
        </el-col>
        <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding:'0px'}">
            <!-- 图片部分 -->
              <div class="data-card">
                <i class="el-icon-message data-card-icon_3"></i>
                <!-- 数字部分 -->
                <div class="data-num">
                  <div>9999</div>
                  <div class="data-num-title">订单数量</div>
                </div>
              </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- 待办事项 -->
      <el-alert
        title="待办事项"
        :closable="false"
        center
        show-icon
        style="margin-bottom:5px"
        type="success">
       </el-alert>
      <el-card shadow="hover" class="todolistCard">
        <el-table
          :data="todoList"
          :show-header="false"
          style="width: 100%">
          <!-- CheckBox列 -->
          <el-table-column width="40">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.status"></el-checkbox>
            </template>
          </el-table-column>

          <!-- 内容列 -->
          <el-table-column>
            <template slot-scope="scope">
              <div :class="scope.row.status?`list-item-del`:`list-item`">
                {{scope.row.title}}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
    name:'dashboard',
    data(){
      return{
        name:'admin',
        role:'超级管理员',
        // 待办事项
         todoList: [
                {
                    title: '今天要修复100个bug',
                    status: false
                },
                {
                    title: '今天要修复100个bug',
                    status: true
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                    status: false
                },
                {
                    title: '今天要修复100个bug',
                    status: true
                },
                {
                    title: '今天要修复100个bug',
                    status: false
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                    status: true
                },{
                    title: '今天要修复100个bug',
                    status: true
                },{
                    title: '今天要修复100个bug',
                    status: true
                },{
                    title: '今天要修复100个bug',
                    status: true
                },{
                    title: '今天要修复100个bug',
                    status: true
                },{
                    title: '今天要修复100个bug',
                    status: true
                },{
                    title: '今天要修复100个bug',
                    status: true
                },{
                    title: '今天要修复100个bug',
                    status: true
                },{
                    title: '今天要修复100个bug',
                    status: true
                }
            ],
      }
    }
}
</script>

<style scoped>
  .el-row {
    margin: 20px;
  }
  .el-col {
    border-radius: 4px;
  }

  .user-info{
    position: relative;
    padding: 20px;
    border-bottom: 2px solid #ccc;
  }

  .user-avator{
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .user-info-item{
    position: absolute;
    right: 140px;
    top: 50px;
  }
  .user-name{
    font-size: 30px;
    color: #222;
  }
  .user-role{
    font-size: 14px;
    color: #999;
  }
  .user-signIn-info{
    font-size: 14px;
    color: #999;
    line-height: 25px;
    margin: 5px;
  }

  .language-title{
    padding:10px;
    border-bottom: 3px solid #EBEEF5;
    color: #303133;
  }

  .language-progress{
    margin: 10px;
  }

  .el-progress{
    margin: 2px;
  }

  .data-card{
    position: relative;
  }
  
  .data-card-icon_1{
    background-color: rgb(45, 140, 240);
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }

  .data-num{
    display: inline-block;
    color: rgb(45, 140, 240);
    font-size: 30px;
    /* margin-left: 15%; */
    position: absolute;
  	left: 50%;
    top: 50%;
    transform: translate(0%,-50%);
  }

  .data-num-title{
    font-size: 14px;
    color: #999;
  }

  .data-card-icon_2{
    background-color: rgb(100, 213, 114);
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }

  .data-card-icon_3{
    background-color: rgb(242, 94, 67);
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }
  .list-item-del{
    text-decoration: line-through;
    color: #999;
  }
  .list-item{
    font-size: 14px;
  }

  .todolistCard{
    height: 400px;
    overflow: auto;
  }
</style>