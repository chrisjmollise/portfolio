import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: () => import ('./views/Home.vue'),
    meta: { title: 'Skills - MyApp' }
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import ('./views/Resume.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import ('./views/Projects.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import ('./views/Contact.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import ('./views/About.vue'),
  },
  {
    path: '*',
    component: () => import ('./views/Home.vue'),
  },
  ],
});
