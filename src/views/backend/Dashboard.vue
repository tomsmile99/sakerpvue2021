<template>
    <h1>Dashboard</h1>
    <a @click="onClickLogout" class="text-white btn btn-danger">Log out</a>
</template>
<script>
//api login laravel 8
import http from '@/services/BackendService'

export default {
    mounted() {
        /*
        setTimeout(function(){
            http.post('logout')
            .then(()=>{
              localStorage.removeItem('user')
              // กลับไปหน้า login
              this.$router.push({ name: 'Login'})
              //window.location.href = '/login'
            }).catch( error =>{
              if(error.response){
                console.log(error.response.data)
                console.log(error.response.status)
              }
            })
        }, 5 * 1000);
        */
    },
    methods: {
      onClickLogout(){
        //alert('มาละๆ');
        //เรียก api logout
        http.post('logout')
        .then(()=>{
          this.$cookies.get('userCokie').remeberCheck
          localStorage.removeItem('user')
          // กลับไปหน้า login
          this.$router.push({ name: 'Login'})
          //window.location.href = '/login'
        }).catch( error =>{
          if(error.response){
            console.log(error.response.data)
            console.log(error.response.status)
          }
        })
      },
    }
}





</script>
