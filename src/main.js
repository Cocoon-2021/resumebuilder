import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuelidate)
export const EventBus= new Vue();
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
