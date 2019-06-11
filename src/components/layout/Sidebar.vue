<template>
    <div class="sidebar" :class="{ 'displayblock' : show }">
        <div class="sidebarheader shadow">
            <font-awesome-icon icon="times" class="toggler-menu" @click="showMenu"></font-awesome-icon>
        </div>
        <div class="menu">
            <span class="text-gray-500 menutitle">Navegación</span>
            <menu-item
                v-for="(item, index) in getMenuitems" 
                :key="index"
                :name="item.name"
                :to="item.to"
                :sublevels="item.sublevels" class="border-bottom">
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
        props: ["show"],
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
            ]),

            showMenu(){
                this.$emit('showMenu')
            }
        },

        mounted(){
            this.loadMenu()
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/sidebar.scss";
</style>