import Vue from "vue"
import Vuex from "vuex"
import { menu } from "@/modules/menu"
import { products } from "@/modules/products"
import { shoppingcart } from "@/modules/shoppingcart"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		menu,
		products,
		shoppingcart
	}
})