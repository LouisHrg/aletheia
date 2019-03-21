<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
        <img class="logo" src="../../public/favicon.png">
    </div>
    <div class="section">
      What we do
    </div>
    <div class="section">
      Prices
    </div>
    <div class="section">
      Accès
    </div>
  </full-page>
  </div>
</template>

<style scoped>
.app-container{
  min-height: 100vh;
}
.logo{
  position: fixed;
  top: 20px;
  left: 20px;
}
</style>

<script>
export default {
  name: 'sources-graph',
  props: {
    layout: Function,
  },
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['home', 'about', 'contact', 'access'],
        sectionsColor: ['#FFF', '#6EB63E', '#E5A33B', '#ED6C6D'],
      },
    };
  },

  created() {
    this.layout(false);
  },
};
</script>
