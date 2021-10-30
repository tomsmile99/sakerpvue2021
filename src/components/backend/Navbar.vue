<template>
    <nav class="navbar navbar-expand-md" style="background-color: #0032b2;">
        <div class="container-sm">
            <a class="navbar-brand" href="#"></a>
            <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse navbar-dark" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item nav-custom">
                    <router-link to="/home" class="nav-link nav-custome" aria-current="page" id="navCustome"><i class="fas fa-home"></i> หน้าหลัก</router-link>
                </li>
                <li class="nav-item nav-custom">
                    <router-link to="/form1" class="nav-link" id="navCustome"> <i class="fas fa-inbox"></i> เงินเดือน และภาษี 50 ทวิ</router-link>
                </li>
                <li class="nav-item nav-custom">
                    <router-link to="/form2" class="nav-link" id="navCustome"> <i class="fas fa-file-alt"></i> ฟอร์มอิเล็กทรอนิกส์</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
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
}
a.active{
    background:rgba(255,255,255,.1);
    color:rgb(255, 255, 255);
}
</style>