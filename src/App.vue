<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo sidebar-logo">
        <a href="https://ng.ant.design/" target="_blank">
          <img src="https://ng.ant.design/assets/img/logo.svg" alt="logo">
          <h1>Ant Design Of Vue</h1>
        </a>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" theme="dark" mode="inline">
        <!-- <a-menu-item key="0">
          <user-outlined />
          <span>Menu</span>
        </a-menu-item> -->
        <!-- replace tag<a> with tage<router-link> -->
        <a-sub-menu key="sub_1">
          <template #title>
            <span>
              <dashboard-outlined />
              <span>Vue-Guide</span>
            </span>
          </template>
          <a-menu-item key="1">
            <router-link to="/">Welcome</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/life-cycle">Life-Cycle</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub_2">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">
            <login-outlined/>
            <router-link to="/login-antd">Login</router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <usergroup-add-outlined />
            <router-link to="/register-antd">Register</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub_3">
          <template #title>
            <span>
              <ant-design-outlined />
              <span>Ant Design</span>
            </span>
          </template>          
          <a-menu-item key="5">
            <router-link to="/icon-antd">Icon Antd</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub_4">
          <template #title>
            <span>
              <home-outlined />
              <span>Home</span>
            </span>
          </template>  
          <a-menu-item key="6">
            <router-link to="/home">Home</router-link>
          </a-menu-item>
          <a-menu-item key="7">
            <router-link :to="{ name: 'about' }">About</router-link>
          </a-menu-item>
          <a-menu-item key="8">
            <router-link to="/food" v-page-permissions:Favortites.mod1>food</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub_5">
          <template #title>
            <span>
              <menu-outlined />
              <span>Working-Menu</span>
            </span>
          </template>  
          <a-menu-item key="7">
            <form-outlined />
            <router-link to="/working-with-forms">Working With Forms</router-link>
          </a-menu-item>
          <a-menu-item key="8">
            <file-excel-outlined />
            <router-link to="/working-with-excels">Working With Excels</router-link>
          </a-menu-item>
          <a-menu-item key="9">
            <area-chart-outlined />
            <router-link to="/working-with-charts">Working With Charts</router-link>
          </a-menu-item>
          <a-menu-item key="10">
            <area-chart-outlined />
            <router-link to="/working-with-echarts">Working With Echarts</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; display: flex;">
        <div style="width: 68px">
          <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </div>
        <div style="width: 50px">
          <img width="40" alt="Vue logo" src="./assets/logo.png">
        </div>
        <span>Welcome</span>
        <div class="spacer"></div>
        <!-- <div style="margin-left: 50px; width: 550px;">
          <nav>
            <label>menu: </label>
            <router-link to="/">Welcome</router-link> |
            <router-link to="/home">Home</router-link> |
            <router-link :to="{ name: 'about' }">About</router-link> |
            <router-link to="/antd">Ant Design</router-link> |
            <router-link to="/food" v-page-permissions:Favortites.mod1>food</router-link>
          </nav>
        </div> -->
        <div style="min-width: 120px; width: 100%;">
          <user-outlined style="font-size: 22px;" v-if="authData?.nickname" />&nbsp;&nbsp;
          <span>{{ authData?.nickname }}</span>
        </div>
        <div style="display: flex; margin-right: 24px;">
          <div class="container" style="min-width: 120px;">
            <div @click="logout()" v-if="authData?.nickname">
              <span>Logout</span>&nbsp;&nbsp;
              <logout-outlined/>
            </div>
            <router-link v-else to="/login-antd">
              <div style="color: black">
                <span>Login</span>&nbsp;&nbsp;
                <login-outlined/>
              </div>
            </router-link>
          </div>
          <div style="min-width: 60px; cursor: pointer;" @click="goToOtherPage(this.authData?.website, 'BLOG')">
            <span>Blog</span>&nbsp;
            <global-outlined :style="{fontSize: '16px'}"/>
          </div>
          <div style="min-width: 30px; cursor: pointer;" @click="goToOtherPage('https://twitter.com/vue','Twitter')">
            <twitter-outlined :style="{fontSize: '18px'}"/>
          </div>
          <div style="min-width: 30px; cursor: pointer;" @click="goToOtherPage('https://youtube.com/vue','youtube')">
            <youtube-outlined  :style="{fontSize: '18px'}"/>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant-Layout-Vue ©2022 Created by LiuTao
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import permissions from './directives/permissions'
import { telemetryMixin } from './mixins/telemetry'
//  
import {  
  AntDesignOutlined, AreaChartOutlined, DashboardOutlined, FileExcelOutlined,
  FormOutlined,  GlobalOutlined, HomeOutlined,  LoginOutlined, LogoutOutlined,
  MenuFoldOutlined, MenuUnfoldOutlined, MenuOutlined, TwitterOutlined, 
  UsergroupAddOutlined, UserOutlined, YoutubeOutlined,
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'App',
  directives: {
    permissions, //globe: page-permissions
  },
  components: {
    AntDesignOutlined,
    AreaChartOutlined,
    DashboardOutlined,
    FileExcelOutlined,
    FormOutlined, 
    GlobalOutlined,
    HomeOutlined, 
    LoginOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MenuOutlined,
    TwitterOutlined,
    UsergroupAddOutlined,
    UserOutlined,
    YoutubeOutlined,
  },
  mixins: [telemetryMixin],
  created() {
    console.log('Init App: ==>', this.$options.name);
  },
  data() {
    return {
      isCollapsed: true,
      authData: {
        nickname: 'LiuTao',
        website: 'http://taoliu-hub.github.io'
      }
    }
  },
  props: {

  },
  setup() {
    const router = useRouter()
    function jumpOtherPage(e) {
      console.log('path: ', e)
      router.push(e)
    }
    return {
      jumpOtherPage,
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      openKeys: ref(['sub_1'])
    }
  },
  methods: {
    logout() {
      this.authData = null;
      alert('logout successful!');
      this.jumpOtherPage('/login-antd');
    },
    goToOtherPage(url, name) {
      if (url) {
        window.open(url,);
      } else {
        alert(`Sorry, you have no website for ${name}.`)
      }
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}


.sidebar-logo {
  position: relative;
  height: 64px;
  overflow: hidden;
  line-height: 64px;
  background: #001529;
  transition: all .3s;
}

.sidebar-logo img {
  display: inline-block;
  height: 32px;
  width: 32px;
  vertical-align: middle;
}

.sidebar-logo h1 {
  display: inline-block;
  margin: 0 0 0 20px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  vertical-align: middle;
}

.ant-menu-title-content>a {
  margin-left: 10px;
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), margin 0.3s, color 0.3s;
}
</style>
