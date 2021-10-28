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

// import VueProgressBar มาใช้งาน
import VueProgressBar from "@aacassandra/vue3-progressbar";
const options = {
    color: "#8fa7ff",
    failedColor: "#874b4b",
    thickness: "3px",
    transition: {
      speed: "0.2s",
      opacity: "0.6s",
      termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
  };

// createApp(App).use(store).use(router).mount('#app') แบบเดิม
// สร้างตัวแปรมาเก็บ Constant ของ App
const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueSweetalert2)
app.use(VueCookies);
app.use(VueProgressBar, options);

// Or to set default config:
// app.use(VueCookies, {
//     expireTimes: "7d",
//     path: "/",
//     domain: "",
//     secure: true,
//     sameSite: "None"
// });

app.mount('#app')
