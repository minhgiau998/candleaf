import HeroRepository from '~/repositories/HeroRepository'
import ProductsRepository from '~/repositories/ProductsRepository'

export default ($axios) => ({
  hero: HeroRepository($axios),
  products: ProductsRepository($axios),
})
