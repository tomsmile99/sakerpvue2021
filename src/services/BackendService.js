import axios from "axios";

// อ่าน token จาก localStorage

//let token = ''
// if(localStorage.getItem('user')){
//     let userStorage = localStorage.getItem('user')
//     let userStorageJSON = JSON.parse(userStorage)
//     token = userStorageJSON['token']
// }else{
//     token = ''
// }

const BackendService = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
  withCredentials: true,
  headers: {
    "Content-type": "multipart/form-data",
    "Accept": "application/json",
    //"Authorization": `Bearer ${token}`
  },
});


// การใช้ Interceptors in Vue.js เพื่อแทรก token เข้าไปใน header
BackendService.interceptors.request.use( config =>{

  // อ่าน token จาก localStorage
  let token = ''

  try{
    let userStorage = localStorage.getItem('user')
    //let userStorage = sessionStorage.getItem('user')
    let userStorageJSON = JSON.parse(userStorage)
    token = userStorageJSON['token']

  }catch(error){
    console.log(error);
  }

  //ถ้า token ไม่เป็นค่าว่าง
  if(token){
    config.headers.Authorization = "Bearer "+token
  }

  return config
})

export default BackendService;