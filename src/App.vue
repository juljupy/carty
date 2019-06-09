<template>
	<div id="app">
		<Header></Header>
		<Sidebar></Sidebar>
		<Content></Content>
	</div>
</template>

<script>
	import Header from '@/components/layout/Header'
	import Sidebar from '@/components/layout/Sidebar'
	import Content from '@/components/layout/Content'
	export default {
		components: {
			Header,
			Sidebar,
			Content
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