<template>
    <nav class="header shadow">
        <font-awesome-icon icon="bars" class="toggler-menu" @click="showMenu"></font-awesome-icon>
        <h2 class="text-warning">{{ brand }}</h2>
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
        },

        methods: {
            showMenu(){
                this.$emit('showMenu')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/header.scss";
    @import "@/assets/sass/_utilities.scss";

</style>