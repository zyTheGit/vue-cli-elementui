import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'

import locale from 'element-ui/lib/locale/lang/en'
import animate from 'animate.css'
import './plugins/element.js'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App.vue'
import store from './store/store'

Vue.use(Vuex)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: ['scroll']
})
Vue.use(ElementUI, { locale })
Vue.use(VueRouter)
Vue.use(animate)

Vue.config.productionTip = false

var router = new VueRouter({
  routes
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
