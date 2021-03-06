import VueFullPage from 'vue-fullpage.js';
import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueApexCharts from 'vue-apexcharts';
import App from './App.vue';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-material-design-icons/styles.css';
import 'fullpage.js/vendors/scrolloverflow';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(VueApexCharts);
Vue.use(VueFullPage);

Vue.component('ApexChart', VueApexCharts);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
