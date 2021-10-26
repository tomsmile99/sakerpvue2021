import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/login.css'

// import sweet alert2 มาใช้งาน
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// import Cookie มาใช้งาน
import VueCookies from 'vue3-cookies'


// createApp(App).use(store).use(router).mount('#app') แบบเดิม
// สร้างตัวแปรมาเก็บ Constant ของ App
const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueSweetalert2)
app.use(VueCookies);


// Or to set default config:
// app.use(VueCookies, {
//     expireTimes: "7d",
//     path: "/",
//     domain: "",
//     secure: true,
//     sameSite: "None"
// });


app.mount('#app')
