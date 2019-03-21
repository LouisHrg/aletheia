<template>
  <div id="app" >
  <el-container v-if=isApp class="app-container">
  <el-aside width="200px">
    <el-menu :router=true class="app-container">
    <div class="brand">
      <img src="../public/favicon.png" class="logo">
    </div>
    <el-menu-item route="/"  index="1">
      <HomeIcon decorative :size="48"/> Home
    </el-menu-item>
    <el-menu-item route="/search" index="2">
      <SearchIcon decorative :size="48"/> Search by word
    </el-menu-item>
    <el-menu-item route="/search/url" index="3">
      <SearchIcon decorative :size="48"/> Search by url
    </el-menu-item>
    <el-menu-item route="/sources"  index="4">
      <SourceIcon decorative :size="48"/> Sources
    </el-menu-item>
    <el-menu-item route="/sources/data"  index="5">
      <ChartIcon decorative :size="48"/> Sources Data
    </el-menu-item>
    </el-menu>
  </el-aside>
    <el-container>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">Share</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view :layout=setLayout />
        <p class="alpha-label">ALPHA</p>
      </el-main>
    </el-container>
  </el-container>
  <div v-if=!isApp class="app-container">
    <router-view />
  </div>
  </div>
</template>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.brand p{
  font-weight: bold;
  position: relative;
}
.logo{
  width: 100px;

}
.alpha-label{
  position: fixed;
  bottom: 0px;
  right: 20px;
  color: #b7b7b7;
}
</style>

<script type="text/javascript">

import HomeIcon from 'vue-material-design-icons/Home.vue';
import SourceIcon from 'vue-material-design-icons/AccessPoint.vue';
import SearchIcon from 'vue-material-design-icons/Magnify.vue';
import ChartIcon from 'vue-material-design-icons/ChartDonut.vue';

export default {
  components: {
    HomeIcon,
    SourceIcon,
    SearchIcon,
    ChartIcon,
  },

  data() {
    return {
      isApp: true,
    };
  },

  methods: {
    setLayout(toggle) {
      this.isApp = toggle;
    },
  },
};

</script>
