<template>  
    <vue-progress-bar></vue-progress-bar>
    <Header />
    <Navbar />
    <div class="container-fluid">
        <router-view v-slot="{Component}">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    <Footer />
    </div>
</template>

<script>
import Header from '@/components/backend/Header.vue'
import Navbar from '@/components/backend/Navbar.vue'
import Footer from '@/components/backend/Footer.vue'
export default {
    name: 'BackendLayout',
    components: {
        Header,
        Navbar,
        Footer,
    },
    data() {
        return {
            
        }
    },
    created() {
        this.$Progress.start()
    },
    mounted() {
        
        this.$Progress.finish()   
    },
}
</script>
<style>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-out;
}
</style>