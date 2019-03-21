<template>
  <div>
    <el-card class="info-pane" shadow="always" v-loading="isLoading">
      <el-button
        style="float:right"
        type="danger"
        target="info-pane"
        v-on:click=closeFn($event)
        size="mini"
        round>
        Close
      </el-button>
      <h3 :v-if=item>Top articles for keyword {{ item ? item : 'ya R' }}</h3>
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
          prop="value"
          label="Pertinence">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style scoped lang="scss">

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
      window.open(event.url, '_blank');
    },
    fetchArticles() {
      this.isLoading = true;
      return axios.get(`http://localhost:8080/api/articles/word/${this.item}`).then((res) => {
        this.result = res.data;
        this.isLoading = false;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
