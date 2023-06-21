import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
      { path: '/signup', component: () => import('pages/SignupPage.vue')},
            ],
  },

  {
    path: '/home',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      {path: '', component: () => import('pages/HomePage.vue'),},
      {path: 'cart', component: () => import('pages/CartPage.vue')},
      {path: 'success',component: () => import('pages/SuccessPage.vue')},
      {path: 'test',component: () => import('src/pages/TestPage.vue'),},
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