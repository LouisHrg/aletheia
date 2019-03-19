import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Sources from './views/Sources.vue';
import Search from './views/Search.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sources',
      name: 'sources',
      component: Sources,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
  ],
});
