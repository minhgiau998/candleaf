const resource = '/benefit'

export default ($axios) => ({
  all() {
    return $axios.get(`${resource}`)
  },
})
