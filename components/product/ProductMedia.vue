<template>
  <div class="w-full md:w-1/2">
    <product-title class="block md:hidden" :name="name"></product-title>
    <img
      class="object-cover object-center w-full mt-5 h-277px md:h-433px"
      :src="image"
      :alt="name"
    />
    <product-slogan class="hidden md:block"></product-slogan>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
}
</script>
