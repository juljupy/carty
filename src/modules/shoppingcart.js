export const shoppingcart = {
    /*
        Defines the state being monitored for the module.
    */
    state: {
        //Retrieve shopping products from localStorage
        shoppingproducts: localStorage.getItem('shoppingproducts') != null ? JSON.parse(localStorage.getItem('shoppingproducts')) : [],
    },

    actions: {
        /*
            Add product to shopping cart
        */
        addProduct({ commit }, product){
            commit('setProduct', product)
        },

        /*
            Remove product from shopping cart
        */

        removeProduct({ commit }, index){
            commit('deleteProduct', index)
        },

        /*
            Modify product quantity
        */
        editProduct({ commit, dispatch }, product){
            commit('modifyProduct', product)
            dispatch('loadProducts')
        }
    },

    mutations: {
        /*
            Adds product to cart and updates localStorage
        */
        setProduct(state, product){
            const me = this
            let found = false
            
            let ftproduct= me.getters.getFilteredProducts.find( p => p.id == product.id )

            for (const item of state.shoppingproducts) {
                if(item.id == product.id){
                    item.quantity = parseInt(item.quantity) + parseInt(product.quantity)
                    found = true
                }
            }

            if(ftproduct){
                ftproduct.quantity = parseInt(ftproduct.quantity) - parseInt(product.quantity)
            }
            
            if(!found) state.shoppingproducts.push(product)
            localStorage.setItem('shoppingproducts', JSON.stringify(state.shoppingproducts))
        },

        /*
            Deletes product from shoppingcart
        */
        deleteProduct(state, index){
            state.shoppingproducts.splice(index, 1)
            localStorage.setItem('shoppingproducts', JSON.stringify(state.shoppingproducts))
        },

        /*
            Edits product quantity
        */
        modifyProduct(state, product){
            const me = this

            let prod = me.getters.getShoppingProducts.find( p => p.id == product.id)

            prod.quantity = product.quantity

            localStorage.setItem('shoppingproducts', JSON.stringify(state.shoppingproducts))
        }
    },

    getters: {
        /*
            Get shopping cart products
        */
        getShoppingProducts(state){
            return state.shoppingproducts
        }
    }
}