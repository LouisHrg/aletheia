<template>
<div>
  <h1>Search a word in our database</h1>
  <el-form ref="form" v-loading="isLoading">
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
      <el-button @click=fetchResults($event)> Search </el-button>
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
</style>

<script>

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
        // Success
      } else {
        this.$message.error('Please fill all the required inputs.');
      }
    },
  },
};
</script>
