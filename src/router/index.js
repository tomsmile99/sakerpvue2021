import { createRouter, createWebHistory } from 'vue-router'

// import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'


// import Views Frontend
import Login from '@/views/frontend/Login.vue'


const routes = [
  {
    path: '/',
    component: FrontendLayout,
    children: [
      {
        path : '',
        name: 'Login',
        component : Login
      }
    ],
    meta: {
      title: 'Login เข้าสู่ระบบ',
      description: 'หน้า Login เข้าสู่ระบบ',
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
