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
      <Home :v-if=result.data msg="Sources" />
      <el-table
        :data="result.data"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="Name"
          width="400">
        </el-table-column>
        <el-table-column
          prop="score"
          label="Score"
          width="400">
        </el-table-column>
        <el-table-column
          prop="edition"
          label="Edition">
        </el-table-column>
      </el-table>

      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>

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
import sourceApi from '@/api/sources';

export default {

  name: 'home',
  components: {
    Home,
  },

  data() {
    return {
      result: null,
      errors: [],
      isLoading: false,
    };
  },

  methods: {
    isUp() {
      this.isLoading = true;
      return sourceApi.getAll().then((res) => {
        this.result = res.data;
        this.isLoading = false;
      });
    },
  },

  created() {
    this.isUp();
  },
};
</script>
