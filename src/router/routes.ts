import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        name: 'about',
        path: 'about',
        component: () => import('pages/AboutPage.vue'),
      },
      {
        name: 'skills',
        path: 'skills',
        component: () => import('pages/SkillsPage.vue'),
      },
      {
        name: 'experience',
        path: 'experience',
        component: () => import('pages/ExperiencePage.vue'),
      },
      {
        name: 'services',
        path: 'services',
        component: () => import('src/pages/ServicesPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
