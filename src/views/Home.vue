<template>
<el-container class="app-container">
  <el-aside width="200px">
    <el-menu router=true class="app-container">
    <el-menu-item route="/"  index="1">Home</el-menu-item>
    <el-menu-item index="2">Feature 1</el-menu-item>
    <el-menu-item index="3">Feature 2</el-menu-item>
    <el-menu-item route="/sources"  index="3-1">Sources</el-menu-item>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header>
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">Lorem</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <Home msg="Salut mec" />
    </el-main>
  </el-container>
</el-container></template>

<style>
  .app-container{
    min-height: 100vh;
  }
</style>

<script>

import Home from '@/components/Home.vue';

export default {
  name: 'home',
  components: {
    Home,
  },
};
</script>
