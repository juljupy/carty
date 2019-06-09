<template>
    <div class="sidebar">
        <div class="sidebarheader"></div>
        <div class="menu">
            <span class="text-gray-500">Hola mundo...</span>
            <br>
            <router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/sidebar.scss";
</style>