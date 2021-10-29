<template>
    <div class="row">
        <div class="col-md-12">
            <h1>Header Backend</h1>
            <div class="row">
                <router-link to="/dashboard">หน้าหลัก</router-link> |
                
                <router-link to="/form1">Form 1</router-link> |
                
                <router-link to="/form2">Form 2</router-link> |
            </div>
            <a @click="onClickLogout" class="text-white btn btn-danger">Log out</a>
        </div>
    </div>
</template>

<script>
//api login laravel 8
import http from '@/services/BackendService'
export default {
    name: 'Header',
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
    methods: { // ต้องมีการกระทำ
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