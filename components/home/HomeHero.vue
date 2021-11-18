<template>
  <div>
    <div
      class="flex items-center justify-center h-screen overflow-hidden pt-95px"
      :style="{
        background: `url(${homeHeroBackground}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }"
    >
      <div
        class="w-full py-10  bg-athens-gray bg-opacity-80 backdrop-filter backdrop-blur-xl px-10px mx-15px md:mx-0 md:w-1/2"
      >
        <div class="max-w-screen-sm mx-auto my-0">
          <p class="font-medium text-center font-poppins text-40px-48px">🌱</p>
          <p class="font-medium text-center font-poppins text-40px-48px">
            {{ hero.title }}
          </p>
          <p
            class="font-normal text-center  mt-10px font-poppins text-18px-20px mb-30px"
          >
            {{ hero.description }}
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
import HomeHeroBackground from '~/assets/images/home-hero-background.png'

export default {
  data() {
    return {
      homeHeroBackground: HomeHeroBackground,
      hero: {
        title: 'The nature candle',
        description:
          'All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments.',
      },
    }
  },
}
</script>

<style></style>
