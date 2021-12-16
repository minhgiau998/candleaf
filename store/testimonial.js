const testimonial = {
  namespaced: true,

  state: () => ({
    loading: false,
    error: false,
    message: '',
    testimonial: {},
  }),

  getters: {
    testimonialObject: (state) => state.testimonial,
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
    SET_TESTIMONIAL(state, testimonial) {
      state.testimonial = testimonial
    },
  },

  actions: {
    async getTestimonial({ commit }) {
      const res = await this.$repositories.testimonials.all()
      commit('SET_LOADING', true)
      if (res.status === 200 && res.data) {
        commit('SET_ERROR', false)
        commit('SET_TESTIMONIAL', res.data[0])
      } else {
        commit('SET_ERROR', true)
      }
      commit('SET_MESSAGE', res.statusText)
      commit('SET_LOADING', false)
    },
  },
}

export default testimonial
