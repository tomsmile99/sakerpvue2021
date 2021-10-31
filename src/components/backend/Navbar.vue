<template>
    <nav class="navbar navbar-expand-md" style="background-color: #0032b2;">
        <div class="container-sm">
            <a class="navbar-brand" href="#"></a>
            <button
                class="ml-auto navbar-toggler"
                :class="{ 'collapsed': !this.$store.state.showMenu }"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="true"
                aria-label="Toggle navigation"
                @click="onClickMobileMenu"
            >
            <span class="" style="font-size:20pt;"><i class="fas fa-bars"></i></span>
            </button>
          
                <div class="collapse navbar-collapse navbar-dark" :class="{ 'show': this.$store.state.showMenu }" id="navbarNav">
                    <ul class="text-left navbar-nav border-danger">
                        <li class="nav-item">
                            <router-link to="/home" class="nav-link" id="navCustome" @click="onClickMobileMenu"><i class="fas fa-home"></i> หน้าหลัก</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/ElectronicsForm" class="nav-link" id="navCustome" @click="onClickMobileMenu"> <i class="fas fa-file-alt"></i> ฟอร์มอิเล็กทรอนิกส์</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/form2" class="nav-link" id="navCustome" @click="onClickMobileMenu"> <i class="fas fa-file-alt"></i> menu 2</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/form3" class="nav-link" id="navCustome" @click="onClickMobileMenu"> <i class="fas fa-file-alt"></i> menu 3</router-link>
                        </li>
                        <!-- <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navCustome"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="true"
                                @click="ClickshowSubMenu"
                            >
                            <i class="fas fa-file-alt"></i>
                            ฟอร์มอิเล็กทรอนิกส์
                            </a>
                            <transition name="fade">
                                <ul class="dropdown-menu" :class="{'show' : showSubMenu}" aria-labelledby="navCustome">
                                    <li>
                                        <a class="dropdown-item" href="#">ยื่นขออนุมัติรถไม่มีเรทจัด</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Another action</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </transition>
                        </li> -->
                    </ul>
                </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            //showSubMenu: false,
            
        }
    },
    mounted() { 
       
    },
    methods: {
        // ClickshowSubMenu(){
        //     this.showSubMenu = !this.showSubMenu
        // }
        onClickMobileMenu(){
            this.$store.commit("toggleMenu")
        }
    },
}
</script>

<style scoped>
button.navbar-toggler {
    color:rgb(255, 255, 255);
}
#navCustome{
    color:rgb(255, 255, 255);
}
a#navCustome:hover{
    color:rgba(255, 255, 255, 0.76);
}
a.nav-link {
    font-size: 12pt;
    color:rgb(255, 255, 255);
    text-align: left;
    padding: 10px 10px 10px 10px;
}
a.active{
    background:rgba(255,255,255,.1);
    color:rgb(255, 255, 255);
    padding: 10px 10px 10px 10px;
}


</style>