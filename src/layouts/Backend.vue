<template>
    
    <div class="container-fluid">
        <div class="row">
            <Header />
        </div>
        <div class="p-4 row">
            <router-view></router-view>
            <vue-progress-bar></vue-progress-bar>
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
    created() {
      this.$Progress.start();
    },
    mounted() {
      setTimeout(function(){
           this.$Progress.finish();     
        }, 2 * 1000);
    },
}
</script>