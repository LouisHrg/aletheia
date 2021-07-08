<template>
  <div>
    <div class="info-pane" shadow="always" v-loading="isLoading">

      <el-button
        style="float:right"
        type="danger"
        target="info-pane"
        v-on:click=closeFn($event)
        size="mini"
        icon="el-icon-error"
        round>
      </el-button>
      <h3 :v-if=item>Top articles</h3>
       <el-table
        :data=result.data
        empty-text="No data"
        v-on:cell-dblclick="openLink"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="Title">
        </el-table-column>
        <el-table-column
          :formatter="displayPertinence"
          prop="trust"
          label="Pertinence">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped lang="scss">

table.el-table__header{
  background: #2a41e8 !important;
  border-radius: 4px 0 0 0px !important;
}

#info-pane{
  background: #fff;
  border-radius: .6rem !important;
  padding: 10px 1.8rem !important;
  font-family: Poppins,sans-serif !important;
  font-weight: bold !important;
  text-align: left !important;
  -webkit-box-shadow: 0 1px 15px 1px rgba(62,57,107,.07) !important;
  box-shadow: 0 1px 15px 1px rgba(62,57,107,.07) !important;
  margin-bottom:50px;
}

h3 {
  text-align: left !important;
}

.info-pane{
  width: 100%;
  z-index: 1;
  margin-bottom: 50px;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'InfoPane',
  props: {
    opened: Boolean,
    closeFn: Function,
    item: String,
  },

  data() {
    return {
      result: null,
      errors: [],
      isLoading: false,
    };
  },

  watch: {
    item() {
      this.item = this.fetchArticles();
    },
  },

  methods: {
    openLink(event) {
      window.open(decodeURIComponent(event.url), '_blank');
    },
    fetchArticles() {
      this.isLoading = true;
      return axios.get(`http://localhost:8080/api/articles/word/${this.item}`).then((res) => {
        this.result = res.data;
        this.isLoading = false;
      });
    },
    displayPertinence(row) {
      if (row.trust === 1) {
        return 'Not enough data';
      }
      return row.trust;
    },
  },
};
</script>
