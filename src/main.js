import Vue from 'vue'
import App from './app'
import router from './router'
import store from './store'
import Auth from './utils/auth'
import vuetify from './plugins/vuetify';
import axios from 'axios'

Vue.use(Auth)

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/' : 'http://localhost'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
