<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #0032b2;">
        <div class="container-sm">
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
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/dashboard" class="nav-link" aria-current="page"><img src="@/assets/images/home_icon.png" style="width: 25px; height: 20px; margin-bottom: 5px;"> หน้าหลัก</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/form1" class="nav-link">Menu 1</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/form2" class="nav-link">Menu 2</router-link>
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