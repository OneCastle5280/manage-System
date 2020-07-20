<template>
  <el-row>
      <!-- 左侧 -->
      <el-col :span="6">
          <el-row>
            <!-- 折叠按钮 -->
                <el-col :span="2">
                    <div class="collapse-btn" @click="collapseClick">
                        <i v-if="collapse" class="el-icon-s-fold"></i>
                        <i v-else class="el-icon-s-unfold"></i>
                    </div>
                </el-col>
                <!-- logo -->
                <el-col :span="6" class="logo">
                    后台管理系统
                </el-col>
          </el-row>
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
      <!-- 右侧  -->
      <el-col :span="6" class="rightRow" :offset="12">
          <el-row>
            <!-- 全屏按钮 -->
            <el-col :span="3" class="fullscreen-btn" :offset="9">
                <div @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>         
                    </el-tooltip>
                </div>
            
            </el-col>
            <!-- 消息中心 -->
            <el-col :span="3" >
                <div class="bell-btn">
                    <el-tooltip
                        effect="dark"
                        :content="message?`有${message}条未读消息`:`消息中心`"
                        placement="bottom">
                        <i class="el-icon-bell"></i>
                    </el-tooltip>
                    <!-- 小红点 -->
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
            </el-col>
            <!-- 用户头像区域 -->
            <el-col :span="3" class="user-avator">
                <div>
                    <img src="../../assets/img/img.jpg" />
                </div>
            </el-col>
            <!-- 用户下拉菜单 -->
            <el-col :span="4" class="dropdown">
                <el-dropdown trigger="click">
                    <span  class="el-dropdown-link">
                        admin
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="https://github.com" target="_blank">
                            <el-dropdown-item>项目仓库</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>     
          </el-row>
      </el-col>
  </el-row>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            //是否全屏显示
            fullscreen:false,
            //消息条数
            message:2,
        }
    },
    computed:{
        collapse(){
            return this.$store.state.collapse
        }
    },
    methods:{
        //折叠按钮点击事件
        collapseClick(){
            this.$store.commit('changeCollapse');
            // console.log("改变了状态");
            // console.log(this.$store.state.collapse);
        },

        //控制全屏显示
        handleFullScreen(){
            //获取到根元素element 
          let element = document.documentElement;
        //   console.log(this.fullscreen);
            if (!this.fullscreen) {
                // 如果fullscreen为false，说明此时没有全屏，调用根元素的requestFullScreen方法进入全屏
                 if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            } else {
                // 如果fullscreen为true，说明此时正在全屏，document调用exitFullscreen退出全屏
                // console.log("退出全屏");
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    }
}
</script>

<style>
.header{
    height: 100%;
    width: 100%;
}
.logo{
    min-width: 250px;
    margin: 15px;
    color: #FFF;
    font-size: 20px;
}
.collapse-btn{
    margin-top: 14px;
    font-size: 25px;
    cursor: pointer;
    color: #FFF;
}


.fullscreen-btn{
    font-size: 25px;
    color:#FFF
}
.bell-btn{
    position: relative;
    font-size: 25px;
    color:#FFF
}

.user-avator img {
    display: block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
}

.rightRow{
    margin-top: 16px;
}

.el-dropdown-link{
    color:#FFF
}
.dropdown{
    margin-top: 5px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    left: 20px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
</style>