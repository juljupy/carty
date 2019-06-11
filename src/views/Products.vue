<template>
	<div class="page">
		<div class="pageheader">
			<h1><font-awesome-icon icon="boxes"></font-awesome-icon> Products</h1>
			<div class="filters text-gray-800 font-medium">
				All <input type="checkbox" v-model="filters.all" @change="checkAll(filters.all)"> | 
				Available <input type="checkbox" v-model="filters.available" @change="checkAval(filters.available)" class="rounded text-sm font-medium"> | 
				Price from: <input type="number" v-model="filters.pricefrom" class="rounded text-sm font-medium">
				to: <input type="number" v-model="filters.priceto"> | 
				Quantity: <input type="number" v-model="filters.quantity" class="rounded text-sm font-medium">
				<div class="order">
					Search: <input type="text" class="rounded text-sm font-medium" v-model="filters.text"> | 
					Order By:
					<select @change="handleOrder($event)">
						<option v-for="(opt, index) in ordering" :key="index" :value="opt.value">{{opt.text}}</option>
					</select>
				</div>
			</div>
		</div>
		<product-item v-for="prod in getFilteredProducts" :key="prod.id" :product="prod">
		</product-item>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import ProductItem from '@/views/ProductItem'
	export default {
		name: "products",

		components: {
			ProductItem
		},

		computed: {
			...mapGetters([
				'getFilteredProducts',
				'getResetFilters'
			])
		},

		data(){
			return {
				filters: {
					all: true,
					available: false,
					pricefrom: 0,
					priceto: 0,
					quantity: 0,
					text: ''
				},

				ordering: [
					{
						value: 'price',
						text: 'Price'
					},
					{
						value: 'available',
						text: 'Available'
					},
					{
						value: 'quantity',
						text: 'Quantity'
					}
				]
			}
		},
		
		watch: {
			filters : {
				handler(newVal){
					this.filterProducts(newVal)
				},
				deep: true
			},

			getResetFilters(val){
				const me = this
				if(val){
					me.filters = {
						all: true,
						available: false,
						pricefrom: 0,
						priceto: 0,
						quantity: 0,
						text: ''
					}
				}
			}
		},

		methods: {
            ...mapActions([
				'filterProducts',
				'orderProduct'
			]),

			checkAll(all){
				const me = this
				if(all){
					me.filters.available = false
				}
			},

			checkAval(aval){
				const me = this
				if(aval){
					me.filters.all = false
				}
			},

			handleOrder(event){
				this.orderProduct(event.target.value)
			}
        }
	};
</script>

<style lang="sass" scoped>
	@import "@/assets/sass/products.scss";
</style>
