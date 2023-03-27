import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Auth/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../components/Auth/Register.vue'),
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: () => import('../components/Auth/ForgotPassword.vue'),
    },
    {
      path: '/password-reset/:token',
      name: 'ResetPassword',
      component: () => import('../components/Auth/ResetPassword.vue'),
    },
    // {
    //   path: '/skills',
    //   name: 'SkillIndex',
    //   component: () => import('../views/skills/SkillIndex.vue')
    // },
    // {
    //   path: '/skills/create',
    //   name: 'SkillCreate',
    //   component: () => import('../views/skills/SkillCreate.vue')
    // },
    // {
    //   path: '/skills/:id/edit',
    //   name: 'SkillEdit',
    //   component: () => import('../views/skills/SkillEdit.vue'),
    //   props: true,
    // }
  ]
})

export default router
