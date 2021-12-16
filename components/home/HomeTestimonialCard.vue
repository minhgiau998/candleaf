<template>
  <div
    class="bg-white py-30px px-15px rounded-6px md:w-1/3 w-full"
    style="box-shadow: 0px 4px 24px rgba(139, 167, 178, 0.16)"
  >
    <img
      class="h-84px w-84px rounded-full mx-auto"
      style="box-shadow: 0px 3.36px 20.16px rgba(139, 167, 178, 0.16)"
      :src="testimonial.avatar"
      :alt="testimonial.name"
    />
    <div class="flex justify-center mt-15px">
      <base-rate :active="testimonial.rating" :inactive="inactive"></base-rate>
    </div>
    <p
      class="
        font-poppins font-medium
        text-22px-29px text-center text-downriver
        mt-22px
      "
    >
      {{ testimonial.quote }}
    </p>
    <p
      class="
        font-poppins font-normal
        text-18px-28px text-center text-gray-400
        mt-6px
      "
    >
      {{ testimonial.name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    inactive() {
      return 5 - this.testimonial.rating
    },
  },
}
</script>
