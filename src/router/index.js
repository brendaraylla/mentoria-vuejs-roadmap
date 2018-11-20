import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/app/Home';
import Roadmap from '@/app/Roadmap';
import Kanban from '@/app/Kanban';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/roadmap',
      name: 'Roadmap',
      component: Roadmap,
    },
    {
      path: '/roadmap/kanban/:month',
      name: 'Kanban',
      component: Kanban
    }
  ],
});
