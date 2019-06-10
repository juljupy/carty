import axios from 'axios'

export const products = {
    /*
        Defines the state being monitored for the module.
    */
    state: {
        products: [],
        sublevelproducts: []
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
            axios.get('data/products.json')
                .then(response => response)
                .then(data => commit('setProducts', data.data))
                .catch(error => console.log(error))
        },

        /*
            Filter products by sublevel
        */
        filterProductsBySublevel({commit, state}, id){
            commit('setSublevelProducts', state.products.products.filter(prod => prod.sublevel_id == id))
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
        }
    }
}