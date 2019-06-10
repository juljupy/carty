<template>
    <div class="dropdown">
        <div class="dropdownitem">
            <div class="badge rounded-full font-medium text-xs">
                {{getShoppingProducts.length}}
            </div>
            <font-awesome-icon icon="shopping-cart" class="rounded" @click="toggleDropDown"/>
        </div>
        <ul class="shadow rounded" :class="{ 'block': open }">
            <li v-for="(item, index) in getShoppingProducts" :key="index">
                <router-link to="/shoppingcart" class="text-gray-800">
                    <div class="item-title font-medium" @click="toggleDropDown">
                        {{item.name}}
                        <span class="rounded text-xs rounded-full">{{item.quantity}}</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'shopping-dropdown',

        computed: {
            ...mapGetters(['getShoppingProducts'])
        },

        data(){
            return {
                open: false
            }
        },

        methods: {
            toggleDropDown(){
                this.open = !this.open
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/shoppingdropdown.scss";
</style>