import { createLocalVue } from "@vue/test-utils"
import Vuex from 'vuex'
import { actions, mutations, getters } from './menustoremodule'

const localVue = createLocalVue()

localVue.use(Vuex)


describe("menu", () => {
    describe("actions", () => {
        test("calls axios and return categories", async () => {
            const categories = await actions.loadCategories()
            expect(categories).toContainEqual({"id": 1,"name": "Bebidas"})
        });
    })

    describe("mutations", () => {
        test("adds categories to menuitems array", () => {
            const state = {
                menuitems: []
            }
            const menuitems = [{}, {}]
            mutations.setMenuitems(state, menuitems)
            expect(state.menuitems).toEqual(menuitems)
        })
    })

    describe("getters", () => {
        test("returns menuitems", () => {
            const state = {
                menuitems: [{},{}]
            }

            getters.getMenuitems(state)
            expect(state.menuitems).toEqual([{},{}])
        })
    })
});