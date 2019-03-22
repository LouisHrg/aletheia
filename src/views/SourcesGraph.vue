<template>
  <div v-loading=isLoading>
    <h1> Countries graph </h1>
      <p> Choose an edition </p>
      <el-select v-model="form.edition" placeholder="Select" class="let-me-breath">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button @click=switchEdition> Search </el-button>
      <el-row>
        <el-col :span="10">
          <ApexChart
          class="center-el"
          type="bar"
          width="750"
          :options="editionChart.chartOptions"
          :series="editionChart.series">
          </ApexChart>
        </el-col>
      </el-row>
  </div>
</template>

<style scoped>
  .app-container{
    min-height: 100vh;
  }
  .center-el > div{
    margin: 0 auto !important;
  }
</style>

<script>

import axios from 'axios';
import { editionChart } from '@/constants/charts';

export default {
  name: 'sources-graph',
  data() {
    return {
      result: null,
      errors: [],
      isLoading: false,
      selectedEdition: 'fr-fr',
      form: {
        edition: 'fr-fr',
      },
      options: [{
        value: 'fr-fr',
        label: 'France',
      }, {
        value: 'en-us-ny',
        label: 'USA - East Coast',
      }, {
        value: 'de-de',
        label: 'Germany',
      }],
      editionChart,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    switchEdition() {
      this.selectedEdition = this.form.edition;
    },
    fetchData() {
      this.isLoading = true;
      return axios.get(`http://localhost:8080/api/sources/byDate?edition=${this.selectedEdition}`).then((res) => {
        this.result = res.data;
        this.isLoading = false;
      });
    },
  },
  watch: {
    selectedEdition() {
      this.fetchData();
    },
  },
  isUp() {
    this.$apexcharts.exec('edition-chart', 'updateSeries', [{ data: [...this.result] }]);
  },
  updated() {
    this.$apexcharts.exec('edition-chart', 'updateSeries', [{ data: [...this.result] }]);
  },
};
</script>
