<template>
    <nav class="header shadow">
        <h2>{{ brand }}</h2>
        <ShoppingDropDown></ShoppingDropDown>
    </nav>
</template>

<script>
    import ShoppingDropDown from '@/components/ShoppingDropDown'
    export default {
        name: "Header",

        components: {
            ShoppingDropDown
        },

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