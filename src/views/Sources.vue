<template>
  <div>
      <h1>Sources with Trust Indicators</h1>
      <el-table
        v-loading=isLoading
        :v-if=result
        :data=result.data
        empty-text="No data"
        :default-sort="{prop: 'score', order: 'descending'}"
        v-on:sort-change=sortData
        v-on:cell-dblclick=openLink
        style="width: 100%">
        <el-table-column
          sortable="custom"
          prop="name"
          label="Name">
        </el-table-column>
        <el-table-column
          prop="score"
          sortable="custom"
          label="Trust Indicator">
        </el-table-column>
        <el-table-column
          prop="edition"
          sortable="custom"
          :formatter="translateEditionKey"
          label="Edition">

        </el-table-column>
      </el-table>
      <el-pagination
        :v-if="pagination.paginate"
        layout="prev, pager, next"
        :current-page=pagination.currentPage
        v-on:current-change=changePage
        :page-count=pagination.lastPage>
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
import EDITIONS from '@/constants/sources';

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
      sorting: {
        sort: false,
        col: null,
        order: null,
      },
    };
  },

  methods: {
    fetchSources(page = 1, sort = '') {
      let targetPage = page;
      let targetSort = sort;

      this.isLoading = true;

      if (typeof this.$route.query.page !== 'undefined') {
        targetPage = this.$route.query.page;
      }

      if (typeof this.$route.query.order !== 'undefined'
          && typeof this.$route.query.sort !== 'undefined') {
        targetSort = `&sort=${this.$route.query.sort}&order=${this.$route.query.order}`;
      }

      return axios.get(`http://localhost:8080/api/sources?page=${targetPage}${targetSort}`).then((res) => {
        this.result = res.data;
        this.pagination.paginate = true;
        this.pagination.total = this.result.total;
        this.pagination.lastPage = this.result.last_page;
        this.pagination.currentPage = this.result.current_page;
        this.isLoading = false;
      });
    },

    changePage(event) {
      let targetSort = null;

      if (typeof this.$route.query.order !== 'undefined'
          && typeof this.$route.query.sort !== 'undefined') {
        targetSort = { sort: this.$route.query.sort, order: this.$route.query.order };
      }

      this.$router.replace({ query: { page: event, ...targetSort } });
      this.fetchSources(event);
    },
    sortData(event) {
      const { order, prop } = event;
      const orderKey = (order === 'descending') ? 'DESC' : 'ASC';

      this.sorting.sort = true;
      this.sorting.col = prop;
      this.sorting.order = orderKey;

      const query = `&sort=${prop}&order=${orderKey}`;
      this.$router.replace({ query: { order: orderKey, sort: prop } });

      this.fetchSources(this.currentPage, query);
      this.isLoading = false;
    },
    openLink(event) {
      window.open(`http://www.${event.name}`, '_blank');
    },
    translateEditionKey(row) {
      return EDITIONS[row.edition];
    },
  },

  created() {
    const query = '&sort=score&order=DESC';
    this.$router.replace({ query: { page: 1, sort: 'score', order: 'DESC' } });
    this.fetchSources(1, query);
  },
};
</script>
