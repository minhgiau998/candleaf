const resource = '/hero'

export default ($axios) => ({
  all() {
    return $axios.get(`${resource}`)
  },
})
