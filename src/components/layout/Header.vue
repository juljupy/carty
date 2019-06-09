<template>
    <nav class="header">
        <h2>{{ brand }}</h2>
    </nav>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                brand : "Carty"
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/header.scss"
</style>