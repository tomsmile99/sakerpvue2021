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
                                <div class="input-div one" :class="{ error : isActiveUser, focus : isFocus }">
                                    <div class="i"><i class="fas fa-user"></i></div>
                                    <div class="div">
                                        <h5>หมายเลขบัตรประชาชน</h5>
                                        <input type="text" class="input" v-model="InputUsername" maxlength="13" ref="focusUser"> 
                                    </div>
                                </div>
                                <div class="input-div pass" :class="{ error : isActivePass , focus : isFocusPass }">
                                    <div class="i"><i class="fas fa-lock"></i> </div>
                                    <div class="div">
                                        <h5>รหัสผ่าน</h5>
                                        <input type="password" class="input" v-model="InputPass" length="20" maxlength="20" ref="focusPass">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 row">
                            <div class="text-left col-md-6">
                                <label for="LoginFormRemember" class="remeber">
                                    <input type="checkbox" id="LoginFormRemember"
                                        v-model="remeber"
                                        true-value="yes"
                                        false-value=""
                                        @change="checkRemember()"
                                        :checked="booleanValue"
                                    />
                                จดจำฉันไว้</label>
                            </div>
                            <div class="text-right col-md-6">
                                <a href="#">ลืมรหัสผ่าน?</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="text-center col-md-12">
                                <button @click="submitForm" v-show="btLogin" class="btn_style font-weight-bold" ><span style="font-size:12pt;">เข้าสู่ระบบ</span></button>
                                
                                <button type="button" v-show="btWaitlogin" class="btn_style_with font-weight-bold disabled" disabled><span style="font-size:12pt;"><span class="mb-1 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> กรุณารอสักครู่...</span></button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="text-center col-md-12">
                                <span style="font-size: 16pt;">ระบบบริหารจัดการภายในองค์กร</span> <br/> <span style="font-size: 10pt;">บริษัท ศักดิ์สยามลิสซิ่ง จำกัด (มหาชน)</span><br><span style="font-size: 9pt;">พัฒนาโดย : ฝ่ายการตลาด (เว็บไซต์และบริหารงานลูกค้าออนไลน์)</span><br><span style="font-size: 10pt;">© 2021 Copyright: Saksiam Leasing Public Company Limited. All Rights Reserved. (version <span>{{this.$store.getters.getVERSION}}</span>)</span>
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

import useVuelidate from '@vuelidate/core'
//import { required, minLength, helpers } from '@vuelidate/validators'

//api login laravel 8
import http from '@/services/AuthService'

export default {
    data() {
        return {
            // showFocusUsername : false,
            // showFocusPass : false,
            InputUsername : "",
            InputPass : "",
            passDate : "",
            ck : "",
            btLogin : true,
            btWaitlogin : false,
            v$: useVuelidate(),
            isActiveUser : false,
            isActivePass : false,
            isFocus : false,
            isFocusPass : false,
            remeber : "",
            booleanValue : false,
            userCokieCheck : "",
        }
    },
    created() { //โหลดครั้งแรก ครั้งเดียว
        this.$store.dispatch("showVersion")
    },
    mounted() { // โหลดเมื่อมีการเปลี่ยนแปลงค่า
        //this.dataVersion = "2.0.0"
        this.passDate = btoa(toString(new Date()))
        //console.log(this.passDate);

        if (this.$cookies.get('userCokie') && this.$cookies.get('userCokie').remeberCheck) {
            this.InputUsername = this.$cookies.get('userCokie').username_value
            this.booleanValue = true
            this.isFocus = true
            this.remeber = this.$cookies.get('userCokie').remeberCheck
        }
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
        //console.log(this.remeber)
    },
    validations(){
        return {
            InputUsername : { 
               //required : helpers.withMessage('กรอก Email', required)
            },
            InputPass : {
                /*
                required : helpers.withMessage('กรอก Password', required),
                minLength : helpers.withMessage(
                ({
                    $params
                }) => `รหัสผ่านต้องไม่น้อยกว่า ${$params.min} ตัวอักษร`,
                minLength(6)
                ),
                */
            }
        }
    },
    methods: { //ทำงานเมื่อมีการกระทำ
        // ClickInputUsername(){
        //     this.showFocusUsername = true
        //     if(this.InputPass == ""){
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
        //     if(this.InputPass == ""){
        //         this.showFocusPass = false
        //     }
        // },
        checkRemember(){
            //console.log(this.remeberCheck)
        },
        submitForm(){

            // console.log(this.InputUsername)
            // console.log(this.remeberCheck)

    
            //console.log(this.userCokieCheck)
            //console.log(this.remeber)

            if(this.InputUsername == ""){ //$('#InputUsername').val();
                this.$refs.focusUser.focus()
                this.isActiveUser = true
                this.isFocus = TextTrackCueList
                this.$swal({
                    icon: 'error',
                    title: 'กรุณากรอกหมายเลขบัตรประชาชนของท่าน',
                    confirmButtonText : 'ปิด'
                })
                return false
            }else if(this.InputUsername.length != '13'){
                this.$refs.focusUser.focus()
                this.isActiveUser = true
                this.isFocus = TextTrackCueList
                this.$swal({
                    icon: 'error',
                    title: 'กรุณากรอกหมายเลขบัตรประชาชนของท่าน ให้ครบ 13 หลัก',
                    confirmButtonText : 'ปิด'
                })
                return false
            }else if(this.InputPass == ""){
                this.$refs.focusPass.focus()
                this.isActivePass = true
                this.isFocusPass = true
                this.$swal({
                    icon: 'error',
                    title: 'กรุณากรอกรหัสผ่าน',
                    confirmButtonText : 'ปิด'
                })
                return false
            }else if(this.InputUsername == "" && this.InputPass == ""){
                this.$refs.focusUser.focus()
                this.$refs.focusPass.focus()
                this.isActiveUser = true
                this.isActivePass = true
                this.$swal({
                    icon: 'error',
                    title: 'กรุณากรอกหมายเลขบัตรประชาชน และรหัสผ่าน',
                    confirmButtonText : 'ปิด'
                })
                return false
            }else{
                //alert('มาละๆ');
                this.v$.$validate(); // Check all input
                if(!this.v$.$error){
                  
                    // set ตรวจสอบ ui login
                    this.btLogin = false
                    this.btWaitlogin = true
                    this.isActiveUser = false
                    this.isActivePass = false
                    this.isFocus = true
                    // localStorage.InputUsername = this.InputUsername
                    // localStorage.remeberCheck = this.remeberCheck
    
                    const InputPass = btoa(btoa(btoa(this.InputPass+'|'+this.passDate)))
                    //const InputPass = btoa(btoa(btoa(this.InputPass)))
                    //api login
                    http.post('login',{
                    "InputUsername_Form" : this.InputUsername,
                    "InputPass_Form" : InputPass,
                    }).then(res => {
                        console.log(res.data)
                        //console.log(res.data.status)
                        if(res.data.status == '901'){
                            this.$swal({
                                icon: 'error',
                                title: res.data.message,
                                confirmButtonText : 'ปิด'
                            })
                            this.btLogin = true
                            this.btWaitlogin = false
                            return false
                        }else if(res.data.status == '902'){
                            this.$swal({
                                icon: 'error',
                                title: res.data.message,
                                confirmButtonText : 'ปิด'
                            })
                            this.btLogin = true
                            this.btWaitlogin = false
                            return false
                        }else if(res.data.status == '903'){
                            this.$swal({
                                icon: 'error',
                                title: res.data.message,
                                confirmButtonText : 'ปิด'
                            })
                            this.btLogin = true
                            this.btWaitlogin = false
                            return false
                        }else{

                
                            const userCokie = { username_value : this.InputUsername, remeberCheck: this.remeber,session:'25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX' }
                            this.$cookies.set('userCokie', userCokie)
                            this.userCokieCheck = this.$cookies.get('userCokie').username_value
                            this.remeber = this.$cookies.get('userCokie').remeberCheck

                            //const userData = JSON.stringify(res.data)
                            //console.log(btoa(res.data.user.role))
                            //this.$cookies.set('user',res.data)
                            
                            // cookie เก็บ role ยังไม่ใช้งาน
                            //this.$cookies.set('role', btoa(btoa(btoa(res.data.user.role))),60 * 60 * 1) // 1 hour after, expire
                            

                            // เก็บข้อมูล user ลง localStorage
                            localStorage.setItem('user', JSON.stringify(res.data)) //รูปแบบ localStorage 
                            //sessionStorage.setItem('user', JSON.stringify(response.data)); //รูปแบบ sessionStorage 
                            this.$router.push({ name : 'Dashboard' })
                            
                        }
                    }).catch(error => {
                        if(error.res){
                            // console.log(error.response.data)
                            //console.log(error.res.message)
                            // console.log(error.response.headers)

                            /*
                            if(error.response.status == 901){
                                // เรียกใช้งาน popup ของ sweetalert2
                                
                                // this.$swal({
                                //     position: 'top-end',
                                //     icon: 'error',
                                //     title : 'Username ไม่ถูกต้อง',
                                //     showConfirmButton : false,
                                //     timer: 1500
                                // })
                                //console.log(error.response.message)
                                this.$swal('Username ไม่ถูกต้อง');
                                this.$swal({
                                    icon: 'error',
                                    title: error.response.message,
                                    confirmButtonText : 'ปิด'
                                })
                                return false
                            }
                            */
                        }
                    })
                }
            }
        }
    }
}

</script>
<style>
label {
    cursor: pointer;
}
</style>