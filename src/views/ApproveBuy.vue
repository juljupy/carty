<template>
    <div class="page">
		<div class="pageheader">
			<h1><font-awesome-icon icon="credit-card"></font-awesome-icon> Buy</h1>
        </div>
        <table class="shopping-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Value</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in getShoppingProducts" :key="index">
                    <td class="uppercase">{{product.name}}</td>
                    <td class="text-right">
                        {{product.quantity}}
                    </td>
                    <td class="text-right">{{product.price | currFormat}}</td>
                    <td class="text-right">{{ product.price * product.quantity | currFormat}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="4">Total: {{totalcart | currFormat}}</th>
                    <th>&nbsp;</th>
                </tr>
            </tfoot>
        </table>
        <div class="text-center">
            <button @click="pay" class="btn btn-warning rounded text-xl font-medium btn-buy"><font-awesome-icon icon="credit-card"></font-awesome-icon> Pay</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'approve-buy',

        filters: {
			currFormat(val){
				return '$' + Number(val).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
			}
        },

        computed: {
            ...mapGetters(['getShoppingProducts']),
            totalcart(){
                return this.getShoppingProducts.reduce( (a , b) => a + (b.price * b.quantity), 0)
            }
        },

        methods: {
            ...mapActions(['approveBuy']),
            pay(){
                const me = this
                me.$router.push({name: "happybuy"})
                me.approveBuy()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/shoppingtable.scss";
</style>