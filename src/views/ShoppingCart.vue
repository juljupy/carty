<template>
    <div class="page">
		<div class="pageheader">
			<h1><font-awesome-icon icon="shopping-cart"></font-awesome-icon> Shopping Cart</h1>
        </div>
        <table class="shopping-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Value</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in getShoppingProducts" :key="index">
                    <td class="uppercase">{{product.name}}</td>
                    <td class="text-right">
                        <div v-if="edit && equals(product.id)">
                            <input type="number" v-model="edquantity" class="rounded text-sm font-medium quant-input">
                            <button @click="saveProd" class="btn btn-primary rounded text-sm font-medium"><font-awesome-icon icon="save"></font-awesome-icon></button>
                            <button @click="cancelEdit" class="btn btn-danger rounded text-sm font-medium"><font-awesome-icon icon="times"></font-awesome-icon></button>
                        </div>
                        <span v-else>{{product.quantity}}</span>
                    </td>
                    <td class="text-right">{{product.price | currFormat}}</td>
                    <td class="text-right">{{ product.price * product.quantity | currFormat}}</td>
                    <td class="text-center">
                        <button @click="editProd(product)" class="btn btn-primary rounded text-sm font-medium"><font-awesome-icon icon="edit"></font-awesome-icon></button>
                        <button @click="delProd(index)" class="btn btn-danger rounded text-sm font-medium"><font-awesome-icon icon="trash-alt"></font-awesome-icon></button>
                    </td>
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
            <button @click="approvePay" class="btn btn-warning rounded text-xl font-medium btn-buy"><font-awesome-icon icon="check"></font-awesome-icon> Checkout</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'shopping-cart',

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

        data(){
            return {
                edquantity: 0,
                edit: false,
                pid: null
            }
        },

        methods: {
            ...mapActions(['editProduct', 'removeProduct']),
            editProd(product){
                const me = this
                me.edit = true
                me.pid = product.id
                me.edquantity = product.quantity
            },

            equals(id){
                return this.pid == id
            },

            cancelEdit(){
                const me = this
                me.edit = false
            },

            saveProd(){
                const me = this
                let prod = { id: me.pid, quantity: me.edquantity}
                me.editProduct(prod)
                me.cancelEdit()
            },

            delProd(index){
                const me = this
                me.removeProduct(index)
            },

            approvePay(){
                this.$router.push({ name: 'approvepay'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/shoppingtable.scss";
</style>