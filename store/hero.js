const hero = {
  namespaced: true,

  state: () => ({
    loading: false,
    error: false,
    message: '',
    hero: {},
  }),

  getters: {
    heroObject: (state) => state.hero,
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
    SET_HERO(state, hero) {
      state.hero = hero
    },
  },

  actions: {
    async getHero({ commit }) {
      const res = await this.$repositories.hero.all()
      commit('SET_LOADING', true)
      if (res.status === 200 && res.data) {
        commit('SET_ERROR', false)
        commit('SET_HERO', res.data[0])
      } else {
        commit('SET_ERROR', true)
      }
      commit('SET_MESSAGE', res.statusText)
      commit('SET_LOADING', false)
    },
  },
}

export default hero
