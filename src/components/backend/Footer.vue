<template>
    <div>
        <h1>Footer Backend</h1>
        <h6>version {{this.$store.getters.getVERSION}}</h6>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    created() { //โหลดครั้งแรก ครั้งเดียว
        this.$store.dispatch("showVersion")
    },
}
</script>