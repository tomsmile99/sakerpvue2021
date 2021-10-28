<template>
    <div class="container-fluid">
        <vue-progress-bar></vue-progress-bar>
        <div class="row">
            <Header />
        </div>
        <transition name="fade">
            <div class="p-4 row" v-if="showContent">  
                <router-view></router-view>
            </div>
         </transition>
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
            showContent: false,
        }
    },
    created() {
        this.$Progress.start()
    },
    mounted() {
        this.showContent = true
        this.$Progress.finish()   
    },
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>