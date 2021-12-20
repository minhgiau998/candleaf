<template>
  <div class="w-full md:w-1/4 p-15px">
    <div class="bg-athens-gray home-products-item">
      <img
        :src="product.image"
        class="object-cover object-center w-full md:h-230px h-98px"
      />
      <div class="flex flex-row items-center justify-between px-6 py-10px">
        <nuxt-link
          class="font-medium font-poppins text-16px-28px text-cloud-burst"
          :to="`/product/${product.id}`"
        >
          {{ product.name }}
        </nuxt-link>
        <p class="font-medium font-roboto text-20px-28px text-silver-tree">
          {{ productPrice }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    productPrice() {
      return this.product.price + '$'
    },
  },
}
</script>

<style scoped>
.home-products-item {
  filter: drop-shadow(0px 4px 24px rgba(123, 123, 123, 0.15));
}

.home-products-item:hover {
  transition: all 0.3s ease-out;
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  transform: scale(1.1);
  cursor: pointer;
}
</style>
