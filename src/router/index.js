import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'MainPage',
    meta: { layout: 'main' },
    component: () => {
      import('../views/MainPage.vue')
    },
  },
  {
    path: '/',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => {
      import('../views/Login.vue')
    },
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: { layout: 'empty' },
    component: () => {
      import('../views/Registration.vue')
    },
  },
  {
    path: '/about',
    name: 'About',
    meta: { layout: 'main' },
    component: () => import('../views/About.vue'),
  },
  {
    path: '/documentation',
    name: 'Documentation',
    meta: { layout: 'main' },
    component: () => import('../views/Documentation.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    meta: { layout: 'main' },
    component: () => import('../views/Contacts.vue'),
  },
  {
    path: '/looona',
    name: 'Looona',
    meta: { layout: 'main' },
    component: () => import('../views/Looona.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
