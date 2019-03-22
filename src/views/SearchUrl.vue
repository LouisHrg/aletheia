<template>
<div v-loading=isLoading element-loading-background="rgb(242, 243, 250, 0.8)">
  <h3>Enter an url to check</h3>
  <el-form ref="form" :model="form">
      <el-input
      @change=clearResults
      class="let-me-breath"
      placeholder="Search a word"
      v-model="form.research"
      clearable>
      </el-input>
      <el-button class="let-me-breath" @click=submitForm()> Search </el-button>
  </el-form>
  <transition name="el-fade-in-linear">
  <el-card v-if=result class="box-card">
      <h3>Results</h3>
      <p class="grey-text" v-if=isEstimation >
        The content is not in english, the verification cannot be trusted
      </p>
      <el-row type="flex" class="row-bg" justify="center" :gutter="20">
          <el-col :span="7">
            <div class="grid-content">
              <ApexChart
              class="center-el"
              width="400"
              type="radialBar"
              :options="fakenewsChart.chartOptions"
              :series="fakenewsChart.series">
              </ApexChart>
            </div>
          </el-col>
          <el-col :span="7">
            <ApexChart
            class="center-el"
            width="400"
            type="radialBar"
            :options="biasedChart.chartOptions"
            :series="biasedChart.series">
            </ApexChart>
          </el-col>
        </el-row>
        <p class="grey-text" style="float:right">
        The data presented here are experimental.
        Thanks for taking it into account.
      </p>
  </el-card>
  </transition>
  <img class="mt-50" v-if=!result src="../../public/url.png">
</div>
</template>

<style scoped>
  .let-me-breath{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .mt-50 {
    margin-top: 50px;
  }
  .center-el > div{
    margin: 0 auto !important;
  }
  .grey-text{
    color: #b7b7b7;
  }
</style>

<script>

import axios from 'axios';
import { fakenewsChart, biasedChart } from '@/constants/charts';

export default {
  name: 'search-url',
  data() {
    return {
      isEstimation: true,
      result: null,
      errors: [],
      isLoading: false,
      form: {
        research: '',
      },
      fakenewsChart,
      biasedChart,
    };
  },
  methods: {
    submitForm() {
      if (this.form.research.length > 0) {
        this.fetchResults(this.form.research);
      } else {
        this.$message.error('Please fill all the required inputs.');
      }
    },
    fetchResults(url) {
      this.isLoading = true;
      return axios.get(`http://localhost:8080/api/articles/data?url=${url}`).then((res) => {
        this.result = res.data;
        if (this.result.lang === 'en') {
          this.isEstimation = false;
        } else {
          this.isEstimation = true;
        }
        this.isLoading = false;
      });
    },
    clearResults() {
      this.result = null;
    },
  },

  updated() {
    this.$apexcharts.exec('biased-chart', 'updateSeries', [this.result.biased]);
    this.$apexcharts.exec('fakenews-chart', 'updateSeries', [this.result.fakenews]);
  },
};
</script>
