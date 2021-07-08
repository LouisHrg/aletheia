<template>
  <div>
    <h4 :style="{color:color}">{{ this.returnMessage() }}</h4>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    score: Number,
  },
  data() {
    return {
      color: null,
    };
  },
  methods: {
    returnMessage() {
      if (this.score <= 40) {
        this.color = '#F56C6C';
        return 'This source cannot be trusted.';
      }
      if (this.score >= 40 && this.score <= 60) {
        this.color = '#E6A23C';
        return 'This source cannot be trusted, some facts may be real.';
      }
      if (this.score >= 60 && this.score <= 85) {
        this.color = '#409EFF';
        return 'This source can be trusted, the point of view of the article may be biased.';
      }
      if (this.score > 85) {
        this.color = '#67C23A';
        return 'This source is sure.';
      }
      return '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
