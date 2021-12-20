<template>
  <div class="border-1 border-solid border-platinum rounded-7px">
    <div class="p-18px">
      <base-button-radio-group :options="options"> </base-button-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    date: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
