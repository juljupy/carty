<template>
	<div>
		<h1>Products</h1>
		<product-item v-for="prod in getSublevelProducts" :key="prod.id" :product="prod">
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
			...mapGetters(['getSublevelProducts'])
		},

		methods: {
            ...mapActions([
                'loadProducts'
            ])
        },

		mounted(){
			this.loadProducts()
		}
	};
</script>