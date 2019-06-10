<template>
    <nav class="header shadow">
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
    @import "@/assets/sass/header.scss";
    @import "@/assets/sass/_utilities.scss";

</style>