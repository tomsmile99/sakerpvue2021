<template>
    <img class="wave" src="@/assets/images/img_login/wave.png">
    <div class="container">
        <div class="img">
            <img src="@/assets/images/img_login/undraw_pie_graph_x9dy.svg">
        </div>
        <div class="login-content">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <form @submit.prevent="FormLogin">
                        <div class="row">
                            <div class="col-md-12">
                                <img src="@/assets/images/logo-saksiam59(150x150px).png">
                                <h2 class="title font-weight-bold">Login เข้าสู่ระบบ</h2>
                                <div class="input-div one">
                                    <div class="i"><i class="fas fa-user"></i></div>
                                    <div class="div">
                                        <h5>หมายเลขบัตรประชาชน</h5>
                                        <input type="text" class="input" v-model="InputUsername" maxlength="13" minlength="13">
                                    </div>
                                </div>
                                <div class="input-div pass">
                                    <div class="i"><i class="fas fa-lock"></i> </div>
                                    <div class="div">
                                        <h5>รหัสผ่าน</h5>
                                        <input type="password" class="input" v-model="InpuPass" length="20" maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 row">
                            <div class="text-left col-md-6">
                                <label for="LoginFormRemember" class="remeber"><input type="checkbox" id="LoginFormRemember"  name="LoginFormRemember"> จดจำฉันไว้</label>
                            </div>
                            <div class="text-right col-md-6">
                                <a href="#">ลืมรหัสผ่าน?</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="text-center col-md-12">
                                <button @click="submitForm" v-show="btLogin" class="btn_style font-weight-bold"><span style="font-size:12pt;">เข้าสู่ระบบ</span></button>
                                
                                <button type="button" v-show="btWaitlogin" class="btn_style font-weight-bold disabled"><span style="font-size:12pt;"><span class="mb-1 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> กรุณารอสักครู่...</span></button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="text-center col-md-12">
                                <span style="font-size: 16pt;">ระบบบริหารจัดการภายในองค์กร</span> <br/> <span style="font-size: 10pt;">บริษัท ศักดิ์สยามลิสซิ่ง จำกัด (มหาชน)</span><br><span style="font-size: 9pt;">พัฒนาโดย : ฝ่ายการตลาด (เว็บไซต์และบริหารงานลูกค้าออนไลน์)</span><br><span style="font-size: 10pt;">© 2021 Copyright: Saksiam Leasing Public Company Limited. All Rights Reserved. (version )</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <img class="wave_2" src="@/assets/images/img_login/wave2.png">
</template>

<script>
import '@/assets/css/appcarStyle.min.css';
import '@/assets/css/styleLogin.css';

export default {
    data() {
        return {
            // showFocusUsername : false,
            // showFocusPass : false,
            InputUsername : "",
            InpuPass : "",
            btLogin : true,
            btWaitlogin : false,
        }
    },
    mounted() {
        const inputs = document.querySelectorAll(".input");
        function addcl(){
            let parent = this.parentNode.parentNode;
            parent.classList.add("focus");
        }
        function remcl(){
            let parent = this.parentNode.parentNode;
            if(this.value == ""){
                parent.classList.remove("focus");
            }
        }
        inputs.forEach(input => {
            input.addEventListener("focus", addcl);
            input.addEventListener("blur", remcl);
        });
    },
    methods: {
        // ClickInputUsername(){
        //     this.showFocusUsername = true
        //     if(this.InpuPass == ""){
        //         this.showFocusPass = false
        //     }
        // },
        // ClickInputPassword(){
        //     this.showFocusPass = true
        //     if(this.InputUsername == ""){
        //         this.showFocusUsername = false
        //     }
        // },
        // NoClickInput(){
        //     if(this.InputUsername == ""){
        //         this.showFocusUsername = false
        //     }
        //     if(this.InpuPass == ""){
        //         this.showFocusPass = false
        //     }
        // },
        submitForm(){
            //alert('มาละๆ');
            this.btLogin = false
            this.btWaitlogin = true
        }
    },
}
</script>
<style>
label {
    cursor: pointer;
}
</style>