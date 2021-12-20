<template>
  <h1
    class="font-medium  font-poppins text-26px-58px -tracking-09px text-mine-shaft mt-21px"
  >
    {{ name }}
  </h1>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>
