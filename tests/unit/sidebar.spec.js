import { shallowMount, createLocalVue } from "@vue/test-utils"
import Sidebar from '@/components/layout/Sidebar.vue'
import Vuex from "vuex"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const localVue = createLocalVue()
localVue.use(Vuex)

localVue.component('font-awesome-icon', FontAwesomeIcon)

const store = new Vuex.Store({
    state: {
        menuitems: [{},{}]
    },
    getters: {
        getMenuitems(state){
            return state.menuitems
        }
    },
    actions: {
        loadMenu() {

        }
    }
})


describe("Sidebar.vue", () => {
    test("Show Sidebar", () => {
        const show = true

        const wrapper = shallowMount(Sidebar, {
            store,
            localVue,
            propsData: {
                show
            }
        })

        expect(wrapper.find(".displayblock").exists()).toBe(true)
    })

    test("Hide Sidebar", () => {
        const show = false

        const wrapper = shallowMount(Sidebar, {
            store,
            localVue,
            propsData: {
                show
            }
        })

        expect(wrapper.find(".displayblock").exists()).toBe(false)
    })
})