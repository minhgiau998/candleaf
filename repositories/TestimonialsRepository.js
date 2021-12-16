const resource = '/testimonial'

export default ($axios) => ({
  all() {
    return $axios.get(`${resource}`)
  },
})
