import { createRouter , createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes : [
    {
      path : '/',
      name : 'main',
      component: ()=>import ('../views/main.vue')  
    },
  ]
})

export default router
