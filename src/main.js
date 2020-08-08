import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/iconfont/iconfont.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
