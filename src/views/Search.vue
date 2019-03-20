<template>
<div>
  <h1>Search a word in our database</h1>
  <el-form ref="form" :model="form">
      <el-input
      class="research-box"
      placeholder="Search a word"
      :v-model="form.research"
      clearable>
      </el-input>
  </el-form>
</div>
</template>

<style>
  .research-box{
    position: relative;
    top: 25vh;
  }
</style>

<script>
export default {
  name: 'search',
  data() {
    return {
      form: {
        research: '',
      },
    };
  },
};
</script>
