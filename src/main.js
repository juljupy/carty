import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faBoxes, faPlus, faTrashAlt, faEdit, faSave, faTimes, faCreditCard, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart, faBoxes, faPlus, faTrashAlt, faEdit, faSave, faTimes, faCreditCard, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
