const resource = '/products'

export default ($axios) => ({
  all() {
    return $axios.get(`${resource}`)
  },
})
