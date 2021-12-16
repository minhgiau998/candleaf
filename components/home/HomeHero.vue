<template>
  <div>
    <div
      class="
        flex
        items-center
        justify-center
        h-screen
        overflow-hidden
        pt-95px
        home-hero__background
      "
    >
      <div
        class="
          w-full
          py-10
          bg-athens-gray bg-opacity-80
          backdrop-filter backdrop-blur-xl
          px-10px
          mx-15px
          md:mx-0 md:w-1/2
        "
      >
        <div class="max-w-screen-sm mx-auto my-0">
          <p class="font-medium text-center font-poppins text-40px-48px">🌱</p>
          <p class="font-medium text-center font-poppins text-40px-48px">
            {{ heroObject.title }}
          </p>
          <p
            class="
              font-normal
              text-center
              mt-10px
              font-poppins
              text-18px-20px
              mb-30px
            "
          >
            {{ heroObject.description }}
          </p>
          <base-button class="mx-auto my-0">
            <p>Discover our collection</p>
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('hero', ['heroObject']),
  },
  async mounted() {
    await this.getHero()
  },
  methods: {
    ...mapActions('hero', ['getHero']),
  },
}
</script>

<style scoped>
.home-hero__background {
  background: url('~assets/images/home-hero-background.png') no-repeat center
    center fixed;
  background-size: cover;
}
</style>
