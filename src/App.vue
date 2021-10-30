<template>
  <router-view/>
</template>
<script>
let brand  = " | "+ process.env.VUE_APP_TITLE
export default {
  name : 'App',
  watch : {
    $route(to){
      document.title = to.meta.title + brand,
      document.description = to.meta.description
    }
  }
}
</script>
<style>
/* @font-face {
    font-family: "Kanit";
    src: url('./assets/font/Kanit/Kanit-ExtraLight.woff') format('truetype');
    font-weight: normal;
    font-style: normal;
} */
#app {
  font-family: Kanit;
}
</style>
