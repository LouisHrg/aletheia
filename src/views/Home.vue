<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div :id='1' v-on:click=openKeyword($event) class="grid-content keyword-div">
            <el-card shadow="hover">
              <div >
                #keyword
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<style>
  .keyword-div{
    margin-bottom: 30px;
  }
  .keyword-div:hover{
    cursor: pointer;
  }
</style>

<script>

export default {
  name: 'home',

  data() {
    return {
      result: null,
      errors: [],
      isLoading: false,
      selectedKeyword: null,
    };
  },

  methods: {
    openKeyword(event) {
      if (event) {
        this.selectedKeyword = event.currentTarget.id;
        this.openWord();
      }
    },
    openWord() {
      alert(`Opening ! ${this.selectedKeyword}`);
    },
    closeWord() {
      alert(`Opening ! ${this.selectedKeyword}`);
    },
  },
};
</script>
