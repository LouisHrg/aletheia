<template>
  <div>
      <Home msg="Sources" />
      <el-table
        :v-loading="isLoading"
        :data="result.data"
        empty-text="No data"
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
        :v-if=pagination
        layout="prev, pager, next"
        :total=pagination.lastPage>
      </el-pagination>
  </div>
</template>

<style>
  .app-container{
    min-height: 100vh;
  }
</style>

<script>

import Home from '@/components/Home.vue';
import axios from 'axios';

export default {


  name: 'sources',

  components: {
    Home,
  },

  data() {
    return {
      result: null,
      errors: [],
      isLoading: false,
      pagination: {},
    };
  },

  methods: {
    fetchSources() {
      this.isLoading = true;
      return axios.get('http://localhost:8080/api/sources').then((res) => {
        this.result = res.data;
        this.pagination.lastPage = this.result.last_page;
        this.isLoading = false;
      });
    },
  },

  created() {
    this.fetchSources();
  },
};
</script>
