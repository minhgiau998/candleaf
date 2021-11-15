<template>
  <multiselect
    :value="value"
    :options="options"
    :placeholder="placeholder"
    :label="label"
    :track-by="label"
    :allow-empty="false"
    deselect-label=""
    select-label=""
    @input="onInput"
  ></multiselect>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect,
  },
  props: {
    value: {
      type: [String, Number, Object],
      default: '',
    },
    label: {
      type: String,
      default: 'name',
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: 'Select One',
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event)
    },
  },
}
</script>

<style>
.multiselect__tags {
  min-height: 40px;
  display: block;
  padding: 8px 40px 0 8px;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  background: #fff;
  font-size: 14px;
}

.multiselect--active {
  border: 1px solid rgba(86, 178, 128);
  border-radius: 4px;
}

.multiselect__option--highlight {
  background: #56b280;
  outline: none;
  color: #ffffff;
}
</style>
