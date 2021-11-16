const products = {
  namespaced: true,

  state: () => ({
    loading: false,
    error: false,
    message: '',
    products: [],
  }),

  getters: {
    productsList: (state) => state.products,
  },

  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    SET_MESSAGE(state, message) {
      state.message = message
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    },
  },

  actions: {
    async getProducts({ commit }) {
      const res = await this.$repositories.products.all()
      commit('SET_LOADING', true)
      if (res.status === 200 && res.data) {
        commit('SET_ERROR', false)
        commit('SET_PRODUCTS', res.data)
      } else {
        commit('SET_ERROR', true)
      }
      commit('SET_MESSAGE', res.statusText)
      commit('SET_LOADING', false)
    },
  },
}

export default products
