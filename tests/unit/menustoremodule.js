import axios from 'axios'

jest.mock("axios", () => ({
    get: () => {
        return new Promise((resolve) => {
            resolve({
                data: {
                    categories: [{
                        "id": 1,
                        "name": "Bebidas"
                    }]
                }
            })
        })
    }
}))

// Menu actions

const actions = {
    async loadCategories() {
        const response = await axios.get("./data/categories.json")
        return response.data.categories
    }
}

// Menu Mutations

const mutations = {
    setMenuitems(state, menuitems){
        state.menuitems = menuitems
    }
}

const getters = {
    getMenuitems(state) {
        return state.menuitems
    }
}

// Menu Getters

export { actions, mutations, getters }