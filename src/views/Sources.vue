<template>
  <div>
      <h1>Sources with Trust Indicators</h1>
      <el-table
        :v-if=result
        :data=result.data
        empty-text="No data"
        :default-sort="{prop: 'name', order: 'descending'}"
        v-on:sort-change=sortData
        v-on:cell-dblclick=openLink
        style="width: 100%">
        <el-table-column
          sortable="custom"
          prop="name"
          label="Name"
          width="1000">
        </el-table-column>
        <el-table-column
          prop="score"
          sortable="custom"
          label="Trust Indicator"
          width="400">
        </el-table-column>
        <el-table-column
          prop="edition"
          sortable="custom"
          label="Edition">
        </el-table-column>
      </el-table>
      <el-pagination
        :v-if="pagination.paginate"
        layout="prev, pager, next"
        :current-page=pagination.currentPage
        v-on:current-change=changePage
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

import axios from 'axios';

export default {

  name: 'sources',

  data() {
    return {
      result: null,
      errors: [],
      isLoading: false,
      pagination: {
        paginate: false,
        lastPage: 0,
        currentPage: 0,
        total: 0,
      },
    };
  },

  methods: {
    fetchSources(page = 1, sort = '') {
      let targetPage = page;

      this.isLoading = true;

      if (typeof this.$route.query.page !== 'undefined') {
        targetPage = this.$route.query.page;
      }
      return axios.get(`http://localhost:8080/api/sources?page=${targetPage}${sort}`).then((res) => {
        this.result = res.data;
        this.pagination.paginate = true;
        this.pagination.total = this.result.total;
        this.pagination.lastPage = this.result.last_page;
        this.pagination.currentPage = this.result.current_page;
        this.isLoading = false;
      });
    },
    changePage(event) {
      this.$router.replace({ query: { page: event } });
      this.fetchSources(event);
    },
    sortData(event) {
      const { order, prop } = event;
      const orderKey = (order === 'descending') ? 'DESC' : 'ASC';
      const query = `&sort=${prop}&order=${orderKey}`;
      this.fetchSources(this.currentPage, query);
    },
    openLink(event) {
      window.open(`http://www.${event.name}`, '_blank');
    },
  },

  created() {
    this.fetchSources();
  },
};
</script>
