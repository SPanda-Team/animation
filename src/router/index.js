import Vue from 'vue';
import Router from 'vue-router';
import intro from '@/views/intro.vue';
import ani from '@/views/ani.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/intro',
      name: 'intro',
      component: intro
    },
    {
      path: '/ani',
      name: 'ani',
      component: ani
    }
  ]
});
