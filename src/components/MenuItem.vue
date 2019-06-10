<template>
    <ul class="menu-item">
        <li v-if="sublevels" class="text-gray-800 font-medium">{{ name }}</li>
        <li v-else class="text-gray-600">{{ name }}</li>
        <menu-item
            v-for="item in sublevels" 
            :sublevels="item.sublevels" 
            :name="item.name" 
            :key="item.id">
        </menu-item>
    </ul>
</template>

<script>
    export default {
        props: ["id", "name", "sublevels"],
        name: "menu-item"
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
</style>