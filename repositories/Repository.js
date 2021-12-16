import HeroRepository from '~/repositories/HeroRepository'
import ProductsRepository from '~/repositories/ProductsRepository'
import BenefitRepository from '~/repositories/BenefitRepository'
import TestimonialsRepository from '~/repositories/TestimonialsRepository'

export default ($axios) => ({
  hero: HeroRepository($axios),
  products: ProductsRepository($axios),
  benefit: BenefitRepository($axios),
  testimonials: TestimonialsRepository($axios),
})
