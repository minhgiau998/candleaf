const benefit = {
  namespaced: true,

  state: () => ({
    loading: false,
    error: false,
    message: '',
    benefit: {},
  }),

  getters: {
    benefitObject: (state) => state.benefit,
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
    SET_BENEFIT(state, benefit) {
      state.benefit = benefit
    },
  },

  actions: {
    async getBenefit({ commit }) {
      const res = await this.$repositories.benefit.all()
      commit('SET_LOADING', true)
      if (res.status === 200 && res.data) {
        commit('SET_ERROR', false)
        commit('SET_BENEFIT', res.data[0])
      } else {
        commit('SET_ERROR', true)
      }
      commit('SET_MESSAGE', res.statusText)
      commit('SET_LOADING', false)
    },
  },
}

export default benefit
