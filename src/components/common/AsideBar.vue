<template>
  <el-menu
      @open="handleOpen"
      @close="handleClose"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
      >
      <template v-for="item in items">
        <!-- 渲染一级菜单并且判断是否有二级菜单 -->
        <template  v-if="item.subs">
          <!-- 渲染一级菜单 -->
          <el-submenu :key="item.index" :index="item.index" >
              <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
              </template>
             <template v-for="subItem in item.subs">
              <!-- 渲染二级菜单并且判断是否有三级菜单 -->
              <el-submenu 
                          v-if="subItem.subs"
                          :index="subItem.index" 
                          :key="subItem.index">
                          <!-- 渲染二级菜单 -->
                          <template slot="title">{{ subItem.title }}</template>
                          <!-- 渲染三级菜单 -->
                          <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                              {{threeItem.title}}
                          </el-menu-item>
              </el-submenu>
              <!-- 如果没有三级菜单，那么直接渲染二级 -->
              <el-menu-item
                          v-else 
                          :key="subItem.index" 
                          :index="subItem.index">
                {{subItem.title}}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 没有二级菜单，那就直接渲染一级 -->
        <template v-else>
          <el-menu-item :key="item.index" :index="item.index">
            <template slot="title">
              <!-- 图标 -->
              <i :class="item.icon"></i>
              <!-- 标题 -->
              <span slot="title">{{item.title}}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
  </el-menu>
</template>

<script>
export default {
    name:'AsideBar',
    data(){
      return {
        items: [
                {
                    icon: 'el-icon-s-home',
                    index: 'dashboard',
                    title: '系统首页'
                },
                {
                    icon: 'el-icon-menu',
                    index: 'table',
                    title: '基础表格'
                },
                {
                    icon: 'el-icon-document-copy',
                    index: 'tabs',
                    title: 'tab选项卡'
                },
                {
                    icon: 'el-icon-edit',
                    index: '3',
                    title: '表单相关',
                    subs: [
                        {
                            index: 'form',
                            title: '基本表单'
                        },
                        {
                            index: '3-2',
                            title: '三级菜单',
                            subs: [
                                {
                                    index: 'editor',
                                    title: '富文本编辑器'
                                },
                                {
                                    index: 'markdown',
                                    title: 'markdown编辑器'
                                }
                            ]
                        },
                        {
                            index: 'upload',
                            title: '文件上传'
                        }
                    ]
                },
                {
                    icon: 'el-icon-s-promotion',
                    index: 'icon',
                    title: '自定义图标'
                },
                {
                    icon: 'el-icon-pie-chart',
                    index: 'charts',
                    title: 'schart图表'
                },
                {
                    icon: 'el-icon-rank',
                    index: '6',
                    title: '拖拽组件',
                    subs: [
                        {
                            index: 'drag',
                            title: '拖拽列表'
                        },
                        {
                            index: 'dialog',
                            title: '拖拽弹框'
                        }
                    ]
                },
                {
                    icon: 'el-icon-eleme',
                    index: 'i18n',
                    title: '国际化功能'
                },
                {
                    icon: 'el-icon-warning-outline',
                    index: '7',
                    title: '错误处理',
                    subs: [
                        {
                            index: 'permission',
                            title: '权限测试'
                        },
                        {
                            index: '404',
                            title: '404页面'
                        }
                    ]
                },
                {
                    icon: 'el-icon-user-solid',
                    index: '/donate',
                    title: '支持作者'
                }
            ]
      }
    },
    computed:{
        // 折叠按钮的标识符
        collapse(){
            return this.$store.state.collapse
        },
        // 当前获取的菜单项
        onRoutes(){
            return this.$route.path.replace('/','');
        }
    },
    methods:{
      //打开事件
      handleOpen(){
        console.log("打开");
      },
      //关闭事件
      handleClose(){
          console.log("关闭");
      }
      
    }
      
}
</script>

<style scoped>
.el-menu{
    border: 0;
}
</style>