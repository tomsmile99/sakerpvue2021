import { createRouter, createWebHistory } from 'vue-router'


// import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'
import BackendLayout from '@/layouts/Backend.vue'

// import Views Frontend
import Login from '@/views/frontend/Login.vue'


// import Views Backend
import Dashboard from '@/views/backend/Dashboard.vue'


//สร้างเป็น function เพื่อลดความซ้ำซ่อนสำหรับตรวจสอบ route ก่อนเข้าไปใช้งานหลังบ้าน (Route Auth Guard)


function authGuard(to, from, next){
  let isAuthenticated = false; //default ค่าเป็น false
  if(localStorage.getItem('user')){
    //set แบบใช้ localStorage
    let userStorage = localStorage.getItem('user') //ดึงค่าจาก localStorage
    //let userStorage = sessionStorage.getItem('user') //ดึงค่าจาก localStorage
    let userStorageJSON = JSON.parse(userStorage) // แปลงข้อมูลเป็น json
    let role  = userStorageJSON.user.role //เรียกข้อมูล role และตรวจสอบจากสิทธิ์การใช้งาน
    //console.log('มาละๆ')
    

    // set แบบใช้ Cookie
    /*
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    const role = atob(atob(atob(decodeURIComponent(cookie.role))))
    */
    //console.log(role)


    //let userStorage = $cookies.get('user').role //ดึงค่าจาก Cookie
    // let userStorageJSON = JSON.parse(userStorage) // แปลงข้อมูลเป็น json
    // let role  = userStorageJSON.user.role
    //console.log(userStorage)


    //เมื่อมีการ Login และสิทธิ์สามารถเข้าใช้งานได้ เปลี่ยนเป็น true
    if(role == "1" || role == "2"){ //ถ้าสิทธิ์ role เป็น 1 สามารถเข้า back-end ได้
      isAuthenticated = true //ถ้ามีข้อมูล localStorage อยู่ จะอนุญาตให้เข้า
    }else{
      isAuthenticated = false //ถ้าไม่มีข้อมูล localStorage อยู่ ไม่อนุญาตให้เข้า
    }
    
    //ตรวจสอบ
    if(isAuthenticated){
      next() //อนุญาตให้เข้าสู่ Route และเข้าสูง component
    }else{
      next({name : 'Login'})
    }
  }else{
    next({name : 'Login'})
  }
}


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

  /*  Backend routers */
  {
    path: '/dashboard',
    component: BackendLayout,
    // name: 'Dashboard',
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
        // beforeEnter: (to, from, next) => {
        //   // to ส่งไปหน้าใน
        //   // from มาจากหน้าไหน
        //   // next ไปไหนต่อ
        //   if(state){
        //     next() //ให้โหลด component ที่เรากำลังเรียกใช้
        //   }else{
        //     next({name : 'Login'})
        //   }
        // },

        beforeEnter : authGuard
      }
    ],
    
    meta: {
      title: 'Dashboard'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

