<template>
    <!-- <div class="row">
        <div class="col-md-12">
            <h1>Header Backend</h1>
            <div class="row">
                <router-link to="/dashboard">หน้าหลัก</router-link> |
                
                <router-link to="/form1">Form 1</router-link> |
                
                <router-link to="/form2">Form 2</router-link> |
            </div>
            <a @click="onClickLogout" class="text-white btn btn-danger"><span style="font-size:12pt; font-weight:bold;">Log out</span></a>
        </div>
    </div> -->
    <!--header-->
    <!--header PC -->
    <header class="d-none d-md-block">
        <div class="p-2 container-sm">
            <div class="row">
                <div class="p-1 col-md-6 col-lg-6">
                    <img src="@/assets/images/logo_sakerp21(400x88px).png">
                </div>
                <div class="mt-1 text-right col-md-6 col-lg-6">
                    <div class="mb-1 row justify-content-end d-flex">
                        <div class="text-right col-md-11">
                            <span class="" style="font-size:11pt; font-weight:bold;">คุณทดสอบ ทดสอบ (อายุงาน 8 ปี 9 เดือน) <br>ฝ่ายการตลาด
                            ตำแหน่งพนักงานฝ่ายการตลาด</span>
                        </div>
                        <div class="text-center col-md-1" style="">
                            <span class="" style="font-size:25pt;"><i class="fas fa-user-circle"></i></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="justify-content-end d-flex align-items-end" style="height: 30px;">
                            <div class="mr-2"><a href="#"><span id="menuProfile"><i class="fas fa-id-card-alt"></i> ข้อมูลส่วนตัว</span></a></div> |
                            <div class="ml-2 mr-2"><a href="#"><span id="menuProfile"><i class="fas fa-lock"></i> เปลี่ยนรหัสผ่าน</span></a></div> |
                            <div class="ml-2"><a href="javascript:void(0)" @click="onClickLogout"><span id="menuProfile"><i class="fas fa-sign-out-alt"></i> ออกจากระบบ</span></a></div>
                        </div>
                        <!-- <div class="text-right col-md-12">
                            <span class="mr-2" style="font-size:11pt;"><i class="fas fa-id-card-alt"></i> ข้อมูลส่วนตัว</span> |
                            <span class="ml-2 mr-2" style="font-size:11pt;"><i class="fas fa-lock"></i> เปลี่ยนรหัสผ่าน</span> |
                            <span class="ml-2" style="font-size:11pt;"><i class="fas fa-sign-out-alt"></i> ออกจากระบบ</span>
                        </div> -->
                    </div>
                    <!-- <div class="d-flex align-items-end" style="height: 33px;">
                        <span class="mr-2" style="font-size:11pt;"><i class="fas fa-id-card-alt"></i> ข้อมูลส่วนตัว</span> |
                        <span class="ml-2 mr-2" style="font-size:11pt;"><i class="fas fa-lock"></i> เปลี่ยนรหัสผ่าน</span> |
                        <span class="ml-2" style="font-size:11pt;"><i class="fas fa-sign-out-alt"></i> ออกจากระบบ</span>
                    </div> -->
                </div>
            </div>
        </div>
    </header>
    <!--header PC -->

    <!--header Mobile -->
    <header class="d-md-none">
        <div class="p-2 container-sm">
            <div class="row">
                <div class="col-md-12">
                    <img src="@/assets/images/logo_sakerp21(300x66px).png">
                </div>
                <!-- <div class="mt-3 mb-3 text-center col-md-12">
                    4
                </div> -->
            </div>
        </div>
    </header>
    <!--header Mobile -->
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
        this.$swal({
            title: 'คุณต้องการออกจากระบบหรือไม่ ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ออกจากระบบ',
            cancelButtonText: 'ไม่ใช่'
            }).then((result) => {
                if(result.isConfirmed) {
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
                }
            })
        },
    }
}
</script>
<style>
.nav-link {
    font-size: 14pt;
    font-weight: bold;
} 
#menuProfile{
    font-size: 10pt;
    font-weight: bold;
}

</style>