<template>
    <div class="shadow prodcard rounded">
        <div class="prodheader rounded">
            <h2>{{product.name}}</h2>
        </div>
        <ul class="proddetail text-base">
            <li><span class="text-gray-800 font-medium">Price:</span> {{product.price | currFormat}}</li>
            <li><span class="text-gray-800 font-medium">Quantity:</span> {{product.quantity}}</li>
            <li><span class="text-gray-800 font-medium">Available:</span> {{product.available}}</li>
            <li>
                <input type="number" min="0" :max="product.quantity" v-model="quantity" class="rounded text-sm font-medium quant-input"> 
                <button @click="addProd(product)" class="btn btn-primary rounded text-sm font-medium"><font-awesome-icon icon="plus"></font-awesome-icon></button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "product-item",
        props: ["product"],

        filters: {
			currFormat(val){
				return '$' + Number(val).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
			}
        },

        data(){
            return {
                quantity: 0
            }
        },
        
        methods: {
            ...mapActions(['addProduct']),
            addProd(product){
                const me = this
                if(me.quantity > 0 && me.quantity <= product.quantity){
                    me.addProduct({
                        id: product.id,
                        name: product.name,
                        quantity: me.quantity,
                        price: product.price
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/prodcard.scss";
</style>