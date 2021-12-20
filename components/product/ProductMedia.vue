<template>
  <div>
    <h1
      class="
        font-poppins font-medium
        text-26px-58px
        flex
        items-center
        -tracking-09px
        text-mine-shaft
        mt-21px
        md:hidden
      "
    >
      {{ name }}
    </h1>
    <img
      class="h-277px w-full object-cover object-center mt-5"
      :src="image"
      :alt="name"
    />
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
