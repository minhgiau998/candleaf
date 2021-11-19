<template>
  <div class="flex items-center justify-center bg-athens-gray">
    <div
      class="w-full px-0 max-w-7xl md:py-40 py-28 md:px-30px mx-15px md:mx-0"
    >
      <div class="flex flex-col md:flex-row">
        <div>
          <p
            class="font-medium text-center  font-poppins text-40px-48px text-ebony-clay"
          >
            {{ benefitObject.title }}
          </p>
          <p
            class="font-normal text-center  font-poppins text-16px-22px text-silver-tree"
          >
            {{ benefitObject.description }}
          </p>
        </div>
        <img src="~/assets/images/home-benefits-product-image.png" alt="" />
        <ul v-for="benefit in benefitObject.benefits" :key="benefit.title">
          <li>
            <img src="~assets/svg/checkmark.svg" class="inline" />
            <p class="inline">
              <span class="font-bold"> {{ benefit.title }}: </span>
              <span>{{ benefit.description }}</span>
            </p>
          </li>
        </ul>
        <base-button class="mt-14">
          <span>See more</span>
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('benefit', ['benefitObject']),
  },
  async mounted() {
    await this.getBenefit()
    console.log(this.benefitObject)
  },
  methods: {
    ...mapActions('benefit', ['getBenefit']),
  },
}
</script>
