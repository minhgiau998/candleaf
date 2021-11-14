<template>
  <button :class="[this.isDefault, this.isColor]" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    isColor() {
      switch (this.color) {
        case 'outline':
          return 'bg-white border-solid  text-silver-tree border-silver-tree hover:bg-silver-tree hover:text-white cursor-pointer'
          break
        case 'disabled':
          return 'bg-alto border-solid  text-mine-shaft border-alto cursor-not-allowed'
          break
        default:
          return 'bg-silver-tree border-solid  text-white border-silver-tree hover:bg-white hover:text-silver-tree cursor-pointer'
      }
    },
    isDefault() {
      return 'flex items-center justify-center py-2 font-normal rounded  px-44px font-roboto border-1 text-20px-24px transition duration-500 ease'
    },
  },
}
</script>
