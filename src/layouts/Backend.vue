<template>
    <div class="container-fluid">
        <vue-progress-bar></vue-progress-bar>
            <Header />
        <!-- <transition name="fade">
            <div class="p-4 row" v-if="showContent">  
                <router-view></router-view>
            </div>
         </transition> -->
        <div class="row">
            <router-view v-slot="{Component}">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
        <div class="row">
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from '@/components/backend/Header.vue'
import Footer from '@/components/backend/Footer.vue'
export default {
    name: 'BackendLayout',
    components: {
        Header,
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