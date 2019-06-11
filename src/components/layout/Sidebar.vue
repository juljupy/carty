<template>
    <div class="sidebar">
        <div class="sidebarheader"></div>
        <div class="menu">
            <span class="text-gray-500 menutitle">Navegación</span>
            <!-- <router-link to="/">Home</router-link> -->
            <menu-item
                v-for="(item, index) in getMenuitems" 
                :key="index"
                :to="item.to"
                :name="item.name"
                :sublevels="item.sublevels">
            </menu-item>
			<!-- <router-link to="/about">About</router-link> -->
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