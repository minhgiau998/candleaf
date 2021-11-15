<template>
  <input
    :type="isType"
    :placeholder="placeholder"
    :class="[isDefault]"
    class=""
    :value="value"
    @input="input"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    isDefault() {
      return 'py-2 px-4 border-solid  border-gray border-1 focus:outline-none focus:ring-2 focus:ring-silver-tree rounded'
    },
    isType() {
      switch (this.type) {
        case 'password':
          return 'password'
          break
        case 'email':
          return 'email'
          break
        case 'submit':
          return 'submit'
          break
        case 'reset':
          return 'reset'
          break
        case 'disabled':
          return 'disabled'
          break
        default:
          return 'text'
      }
    },
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style></style>
