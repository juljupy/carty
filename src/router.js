import Vue from "vue"
import Router from "vue-router"
import store from "@/store"

Vue.use(Router)

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [{
			path: "/",
			name: "products",
			component: () => import( /* webpackChunkName: "products" */ '@/views/Products.vue')
		},
		{
			path: "/shoppingcart",
			name: "shoppingcart",
			component: () => import( /* webpackChunkName: "products" */ '@/views/ShoppingCart.vue')
		},
		{
			path: "/approvepay",
			name: "approvepay",
			component: () => import( /* webpackChunkName: "products" */ '@/views/ApproveBuy.vue'),
			beforeEnter: (to, from, next) => {
				if(store.getters.getShoppingProducts.length > 0){
					next()
				} else {
					next('/')
				}
			}
		},
		{
			path: "/happybuy",
			name: "happybuy",
			component: () => import( /* webpackChunkName: "products" */ '@/views/HappyBuy.vue'),
			beforeEnter: (to, from, next) => {
				if(store.getters.getShoppingProducts.length > 0){
					next()
				} else {
					next('/')
				}
			}
		},
		{
			path: "/about",
			name: "about",
			component: () => import( /* webpackChunkName: "about" */ "./views/About.vue")
		}
	]
})