import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/AnNai',
      name:'AnNai',
      component:()=>import('../views/AnNai.vue')
    },
    {
      path:'/Q&A',
      name:'Q&A',
      component:()=>import('../views/Q&A.vue')
    },
    {
      path:'/Login',
      name:'Login',
      component:()=>import('../views/Login.vue')
    },
    {
      path:'/Sagasu',
      name:'Sagasu',
      component:()=>import('../views/Sagasu.vue')
    },
  ]
})

export default router
