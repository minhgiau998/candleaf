<template>
  <div class="bg-silver-tree bg-opacity-10 flex items-center justify-center">
    <div class="w-full px-15px max-w-7xl md:px-30px py-90px">
      <h2
        class="
          font-medium
          text-center
          font-poppins
          text-40px-58px
          -tracking-09px
          text-downriver
        "
      >
        {{ testimonialObject.title }}
      </h2>
      <p
        class="
          font-poppins font-medium
          text-18px-28px text-center
          tracking-01px
          mt-15px
          text-lynch
        "
      >
        {{ testimonialObject.description }}
      </p>
      <div
        class="
          mt-27px
          flex flex-nowrap
          overflow-scroll
          md:overflow-hidden
          space-x-30px
          -mx-15px
          md:mx-0
          px-15px
          md:px-0
        "
      >
        <home-testimonial-card
          v-for="testimonial in testimonialObject.testimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
        ></home-testimonial-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('testimonial', ['testimonialObject']),
  },
  async mounted() {
    await this.getTestimonial()
  },
  methods: {
    ...mapActions('testimonial', ['getTestimonial']),
  },
}
</script>
