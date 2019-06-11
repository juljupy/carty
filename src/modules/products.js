import axios from 'axios'

export const products = {
    /*
        Defines the state being monitored for the module.
    */
    state: {
        products: [],
        sublevelproducts: [],
        filteredproducts: [],
        resetfilters: false
    },

    /*
        Defines the actions used to retrieve the data.
    */
    actions: {
        /*
            Action to retrieve data
        */
        loadProducts({
            commit
        }) {
            const me = this
            axios.get('data/products.json')
                .then(response => response)
                .then(data => {
                    let shoppingproducts = me.getters.getShoppingProducts

                    let products = data.data.products.map( p => {
                        return Object.assign(p, { 
                            price : typeof(p.price) === 'string' ? Number(p.price.replace("$", "").replace(",","")) : p.price,
                            quantity: parseInt(p.quantity)
                        })
                    })

                    for (const item of shoppingproducts) {
                        let pr = products.find( p => p.id == item.id)
                        
                        pr.quantity = pr.quantity - item.quantity
                    }

                    commit('setProducts', products)
                })
                .catch(error => console.log(error))
        },

        /*
            Filter products by sublevel
        */
        filterProductsBySublevel({commit, state}, id){
            let products = state.products.filter(prod => prod.sublevel_id == id)

            commit('setSublevelProducts', products)
            commit('setFilteredProducts', products)
            commit('setResetFilters', true)
        },

        /*
            Filter products by availability
        */
        filterProducts({ commit, state }, {all, available, pricefrom, priceto, quantity, text}){
            commit('setResetFilters', false)
            if(all && !available){
                commit('setFilteredProducts', state.sublevelproducts)
            }

            if(available || !all && !available){
                commit('setFilteredProducts', state.sublevelproducts)
                commit('setFilteredProducts', state.filteredproducts.filter(prod => prod.available == available))
            }

            if(pricefrom >= 1){
                commit('setFilteredProducts', state.filteredproducts.filter(prod => prod.price >= pricefrom))
            }

            if(priceto >= 1){
                commit('setFilteredProducts', state.filteredproducts.filter(prod => prod.price <= priceto))
            }

            if(quantity >= 1){
                commit('setFilteredProducts', state.filteredproducts.filter(prod => prod.quantity >= quantity))
            }

            if(text != ""){
                commit('setFilteredProducts', state.filteredproducts.filter(prod => prod.name.includes(text)))
            }
        },

        /*
            Ordering products
        */
        orderProduct({ commit, state}, option){
            commit('setFilteredProducts', 
                    state.filteredproducts.sort( (a, b) => {
                            if (a[option] > b[option]) {
                                return 1
                            }

                            if (a[option] < b[option]) {
                                return -1
                            }

                            return 0
                        }
                    )
                )
        }
    },

    /*
    Defines the mutations used
    */
    mutations: {
        /*
           Set all products
         */
        setProducts(state, products) {
            state.products = products
        },

        /*
            Set products filtered by sublevel
        */
        setSublevelProducts(state, sublevelproducts) {
            state.sublevelproducts = sublevelproducts
        },

        /*
            Set products filtered by availability
        */
        setFilteredProducts(state, filteredproducts) {
            state.filteredproducts = filteredproducts
        },

        /*
            Reset filters
        */
        setResetFilters(state, reset){
            state.resetfilters = reset
        }
    },

    /*
    Defines the getters used by the module.
    */
    getters: {
        /*
            Get all products
        */
        getProducts(state) {
            return state.products
        },

        /*
            Get filtered products by sublevel
        */
        getSublevelProducts(state) {
            return state.sublevelproducts
        },

        /*
            Get filtered products by availability
        */
        getFilteredProducts(state) {
            return state.filteredproducts
        },

        /*
            Get filters reset status
        */
        getResetFilters(state){
            return state.resetfilters
        }
    }
}