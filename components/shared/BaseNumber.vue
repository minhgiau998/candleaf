<template>
  <div
    class="inline-block mx-auto my-0 border-solid  border-1 border-silver-tree px-10px"
  >
    <button class="text-silver-tree" @click="add">+</button>
    <input class="w-10 text-center focus:outline-none" v-model.number="count" />
    <button class="text-silver-tree" @click="minus" :disabled="count < 1">
      -
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    count: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    add() {
      this.count++
    },
    minus() {
      this.count--
    },
  },
}
</script>
