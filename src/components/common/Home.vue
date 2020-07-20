<template>
  <el-container class="mainContainer">
    <!-- 首页头部区域 -->
    <el-header>
      <Header></Header>
    </el-header>
    <!-- 首页主题区域 -->
    <el-container>
      <!-- 菜单栏 -->
        <el-aside :width="collapse? '60px':'250px'">
          <AsideBar :collapse="collapse"></AsideBar>
        </el-aside>
        <!-- 页面内容区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header'
import AsideBar from './AsideBar'
export default {
    name:'Home',
    components:{
      AsideBar,
      Header
    },
    data(){
      return{
        // collapse:false
      }
    },
    computed:{
      collapse(){
          return this.$store.state.collapse
        }
    }
}
</script>

<style scoped>
.mainContainer{
  height: 100%;
}
.el-header{
  background-color: #242f42;
}
.el-aside{
  background-color: #324157;
  /* background-color: forestgreen; */
}
</style>