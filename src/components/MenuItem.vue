<template>
    <ul class="menu-item">
        <li v-if="sublevels">
            <router-link to="/" class="text-gray-800 font-medium">{{ name }}</router-link>
        </li>
        <li v-else>
           <router-link to="/" class="text-gray-600">
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
        props: ["id", "name", "sublevels"],
        name: "menu-item",

        data(){
            return {
                sublevelid: null
            }
        },

        methods: {
            ...mapActions(['filterProductsBySublevel'])
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_text.scss";
@import "@/assets/sass/_font.scss";

.menu-item {
    list-style: none !important;
    padding-left: 20px !important;
    cursor: pointer;
}

.menu-item li:hover {
    opacity: 0.8;
}

a {
    text-decoration: none;
}
</style>