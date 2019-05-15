import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import photo from './module/photo'
// import image from './module/image'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    photo
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],

})