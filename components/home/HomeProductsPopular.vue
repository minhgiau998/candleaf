<template>
  <div class="flex items-center justify-center bg-white">
    <div class="w-full px-0 max-w-7xl py-95px md:px-30px mx-15px md:mx-0">
      <p
        class="
          font-medium
          text-center
          font-poppins
          text-40px-58px text-downriver
        "
      >
        Popular
      </p>
      <p
        class="
          font-medium
          text-center
          mt-15px
          font-poppins
          text-18px-28px text-lynch
        "
      >
        Order it for you or for your beloved ones
      </p>
      <div class="flex flex-wrap -m-15px mt-60px">
        <home-products-item
          :product="product"
          v-for="product in getPopularProducts"
          :key="product.key"
        ></home-products-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('products', ['productsList']),
    getPopularProducts() {
      return this.productsList.slice(4)
    },
  },
  async mounted() {
    await this.getProducts()
  },
  methods: {
    ...mapActions('products', ['getProducts']),
  },
}
</script>
