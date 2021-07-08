<template>
  <div id="app" >
  <el-container v-if=isApp class="app-container">
  <el-aside width="255px">
    <el-menu :router=true class="app-container">
    <div class="val-sidebar-header">
      Aletheia
    </div>
    <el-menu-item route="/"  index="1">
      <HomeIcon decorative :size="48"/>Home <i class="el-icon-arrow-right"></i>
    </el-menu-item>
    <el-menu-item route="/search/url" index="3">
      <SearchIcon decorative :size="48"/> Search by url <i class="el-icon-arrow-right"></i>
    </el-menu-item>
    <el-menu-item route="/sources"  index="4">
      <SourceIcon decorative :size="48"/> Sources <i class="el-icon-arrow-right"></i>
    </el-menu-item>
    <el-menu-item route="/sources/data"  index="5">
      <ChartIcon decorative :size="48"/> Sources Data <i class="el-icon-arrow-right"></i>
    </el-menu-item>
    </el-menu>
  </el-aside>
    <el-container>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal">
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

.el-header{
      height: 66px;
    padding: 0;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.08);
    box-shadow: 0 2px 4px rgba(0,0,0,.08);
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

.el-aside{
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    z-index: 1031;
    padding-bottom: 35px;
    -webkit-box-shadow: 2px 2px 8px 0 rgba(0,0,0,.33);
    box-shadow: 2px 2px 8px 0 rgba(0,0,0,.33);
    -webkit-box-shadow: 0 5px 20px #d6dee4;
    box-shadow: 0 5px 20px #d6dee4
}

.val-sidebar-header{
  position: relative;
    padding: 20px 25px;
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
    background: -webkit-linear-gradient(45deg,#09C6F9,#045DE9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight:bold;
    font-size: 1.5rem;
}

.el-menu-item{
  padding-left:60px !important;
  padding-bottom:15px !important;
  text-align: left;
  font-size: 1rem !important;
  height:45px !important;
  color: #212529;
  font-weight: 600;
  line-height: 46px !important;

}

.el-menu-item.is-active, .el-menu-item.is-active:hover{
  background: #045DE9 !important;
  color:#fff !important;

  i{
    color:#fff !important;
  }
}


.el-menu-item:hover {
  background: #f2f3fa !important;
  color:#045DE9;
}

.el-menu-item span{
  position: absolute;
  top: 30%;
  left: 25px;
}

.el-icon-arrow-right{
  color: #212529 !important;
  font-weight: 600;
  position: absolute;
  top: 30%;
  right: 25px;
}

.eel-icon-arrow-rightl-menu-item:hover {
  color:#2949ef !important;
}

html {
  margin: 0;
  padding: 0;
}

body{
  margin: 0 !important;
  padding: 0 !important;
}

main {
  background: #f2f3fa;
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
  left: 20px;
  color: #b7b7b7;
  z-index: 10000;
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
