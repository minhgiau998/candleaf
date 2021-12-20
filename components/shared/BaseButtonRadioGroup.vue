<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col p-18px"
      :key="index"
      v-for="(option, index) in options"
    >
      <div class="flex flex-row items-center">
        <div>
          <p-radio
            type="radio"
            name="base-button-radio-group"
            :value="option.value"
            :id="index"
            @change="$emit('input', option.value)"
            class="p-default p-round p-thick"
            color="success"
          ></p-radio>
        </div>
        <span
          class="
            ml-5
            font-roboto font-normal
            text-16px-18px
            -tracking-09px
            text-mine-shaft
          "
        >
          {{ option.label }}
        </span>
      </div>
      <div v-if="option.description">
        <div v-html="option.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style scoped>
.pretty {
  margin-right: 0;
}

.pretty.p-default.p-thick /deep/ .state label:after {
  transform: scale(0.75) !important;
}

.pretty input:checked ~ .state.p-success /deep/ label:after,
.pretty.p-toggle .state.p-success /deep/ label:after {
  background-color: #56b280 !important;
}
</style>
