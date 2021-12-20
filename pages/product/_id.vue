<template>
  <div class="flex items-center justify-center bg-white py-95px">
    <div class="w-full px-15px max-w-7xl md:px-30px">
      <div class="flex flex-col md:items-center md:flex-row md:space-x-30px">
        <product-media
          :name="productDetail.name"
          :image="productDetail.image"
        ></product-media>
        <product-detail :product="productDetail"></product-detail>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('products', ['productDetail']),
  },
  async mounted() {
    await this.getProduct(this.$route.params.id)
  },
  methods: {
    ...mapActions('products', ['getProduct']),
  },
}
</script>
