import Vue from 'vue'
import Vuex from 'vuex'

import benefit from './benefit'
import hero from './hero'
import products from './products'
import testimonial from './testimonial'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    benefit,
    hero,
    products,
    testimonial,
  },
})
