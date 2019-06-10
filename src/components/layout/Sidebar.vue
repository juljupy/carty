<template>
    <div class="sidebar">
        <div class="sidebarheader"></div>
        <div class="menu">
            <span class="text-gray-500 menutitle">Navegación</span>
            <menu-item
                v-for="(item, index) in getMenuitems.categories" 
                :key="index"
                :name="item.name"
                :sublevels="item.sublevels">
            </menu-item>
            <!-- <br>
            <router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> -->
        </div>
    </div>
</template>

<script>
    import MenuItem from '@/components/MenuItem.vue'
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "Sidebar",
        components: {
            MenuItem
        },
        computed: {
            ...mapGetters([
                'getMenuitems'
            ])
        },

        methods: {
            ...mapActions([
                'loadMenu'
            ])
        },

        mounted(){
            this.loadMenu()
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/sidebar.scss";
</style>