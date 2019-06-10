<template>
    <div class="shadow prodcard rounded">
        <div class="prodheader rounded">
            <h2>{{product.name}}</h2>
        </div>
        <ul class="proddetail text-base">
            <li><span class="text-gray-800 font-medium">Price:</span> {{product.price}}</li>
            <li><span class="text-gray-800 font-medium">Quantity:</span> {{product.quantity}}</li>
            <li><span class="text-gray-800 font-medium">Available:</span> {{product.available}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "product-item",
        props: ["product"]
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/prodcard.scss";
</style>