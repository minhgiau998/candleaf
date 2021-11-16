import ProductsRepository from '~/repositories/ProductsRepository'

export default ($axios) => ({
  products: ProductsRepository($axios),
})
