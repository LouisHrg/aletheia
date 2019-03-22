<template>
<div>
  <h3>Search a word in our database</h3>
  <el-form ref="form" v-loading=isLoading>
      <p> Choose a date range </p>
      <el-select v-model="form.range" placeholder="Select" class="let-me-breath">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input
      class="let-me-breath"
      placeholder="Search a word"
      v-model="form.research"
      clearable>
      </el-input>
      <el-button @click=fetchResults()> Search </el-button>
  </el-form>
  <img  class="mt-50" v-if=!result src="../../public/url.png">
</div>
</template>

<style scoped>
  .let-me-breath{
    margin-bottom: 20px;
  }
  .mt-50 {
    margin-top: 50px;
  }

  h3 {
    text-align: left !important;
  }

  .el-form{
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

  .el-input__inner{
    border-radius: 15px !important;
  }
</style>

<script>

import axios from 'axios';

export default {
  name: 'search',
  data() {
    return {
      result: null,
      errors: [],
      isLoading: false,
      form: {
        research: '',
        range: '',
      },
      options: [{
        value: 'week',
        label: '1 week',
      }, {
        value: 'month',
        label: '1 month',
      }, {
        value: 'semester',
        label: '6 months',
      }, {
        value: 'year',
        label: '1 year',
      }],
    };
  },

  methods: {
    fetchResults() {
      if (this.form.research.length > 0 && this.form.range.length > 0) {
        this.isLoading = true;
        return axios.get(`http://localhost:8080/api/articles/query/${this.form.research}/${this.form.range}`).then((res) => {
          this.result = res.data;
          this.isLoading = false;
        });
      }
      this.$message.error('Please fill all the required inputs.');
      return false;
    },
  },
};
</script>
