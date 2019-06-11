<template>
	<div id="app">
		<Header @showMenu="showMenu"></Header>
		<Sidebar :show="show" @showMenu="showMenu"></Sidebar>
		<Content></Content>
	</div>
</template>

<script>
	import Header from '@/components/layout/Header'
	import Sidebar from '@/components/layout/Sidebar'
	import Content from '@/components/layout/Content'
	import { mapActions } from 'vuex'
	export default {
		components: {
			Header,
			Sidebar,
			Content
		},

		data(){
			return {
				show: true
			}
		},

		methods: {
			...mapActions([
				'loadProducts'
			]),

			showMenu(){
				this.show = !this.show
			}
		},

		mounted(){
			this.loadProducts()
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>