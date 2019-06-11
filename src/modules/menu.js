import axios from 'axios'

export const menu = {
    /*
        Defines the state being monitored for the module.
    */
    state: {
        menuitems: []
    },

    /*
        Defines the actions used to retrieve the data.
    */
    actions: {
        /*
            Action to retrieve data
        */
        loadMenu({ commit }) {
            axios.get('data/categories.json')
                .then( response => response)
                .then( data => {
                    let menuitems = [{
                        id: null,
                        name: "Home",
                        to: "/",
                        sublevels: {}
                    }, ...data.data.categories, {
                        id: null,
                        name: "About",
                        to: "/about",
                        sublevels: {}
                    }]
                    commit('setMenuitems', menuitems)
                })
                .catch( error => console.log(error))
        }
    },

    /*
    Defines the mutations used
    */
    mutations: {
        setMenuitems(state, menuitems) {
            state.menuitems = menuitems
        }
    },

    /*
    Defines the getters used by the module.
    */
    getters: {
        getMenuitems(state) {
            return state.menuitems
        }
    }
}