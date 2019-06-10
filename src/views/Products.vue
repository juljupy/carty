<template>
	<div class="page">
		<div class="pageheader">
			<h1>Products</h1>
			<span class="text-gray-800 font-medium">All</span> <input type="checkbox" v-model="filters.all" @change="checkAll(filters.all)"> | 
			<span class="text-gray-800 font-medium">Available</span> <input type="checkbox" v-model="filters.available" @change="checkAval(filters.available)"> | 
			<span class="text-gray-800 font-medium">Price from:</span>&nbsp;<input type="number" v-model="filters.pricefrom">&nbsp;
			<span class="text-gray-800 font-medium">to:</span>&nbsp;<input type="number" v-model="filters.priceto"> | 
			<span class="text-gray-800 font-medium">Quantity:</span>&nbsp;<input type="number" v-model="filters.quantity">
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
					quantity: 0
				}
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
						quantity: 0
					}
				}
			}
		},

		methods: {
            ...mapActions([
				'loadProducts',
				'filterProducts'
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
			}
        },

		mounted(){
			this.loadProducts()
		}
	};
</script>