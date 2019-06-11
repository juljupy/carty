<template>
    <ul class="menu-item rounded">
        <li v-if="sublevels">
            <router-link class="text-gray-800 font-medium" v-if="to" :to="to">{{ name }}</router-link>
            <span class="text-gray-800 font-medium" v-else>{{ name }}</span>
        </li>
        <li v-else>
           <router-link to="/products" class="text-gray-600">
                <span @click="filterProductsBySublevel(id)">{{ name }}</span>
           </router-link>
        </li>
        <menu-item
            v-for="item in sublevels" 
            :sublevels="item.sublevels" 
            :name="item.name" 
            :id="item.id"
            :key="item.id">
        </menu-item>
    </ul>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        props: ["id", "name", "sublevels", "to"],
        name: "menu-item",

        methods: {
            ...mapActions(['filterProductsBySublevel'])
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/sass/menuitem.scss";
</style>