<template>
  <footer>
    <div class="bg-mine-shaft">
      <div class="px-5 mx-auto my-0 md:px-30px font-poppins p-30px max-w-7xl">
        <hr class="clear-both bg-white" />
        <div class="flex flex-col md:flex-row md:justify-between">
          <div class="flex flex-col w-full md:w-1/4">
            <img
              class="h-auto mt-1"
              src="~/assets/images/footer.png"
              alt="Candleaf"
            />
            <p class="text-white text-16px-22px">
              {{ footer.title }}
            </p>
          </div>
          <div class="flex flex-wrap w-full md:flex-nowrap mt-52px md:w-2/4">
            <div
              class="flex flex-col w-1/2 mb-10"
              v-for="menu in footer.menus"
              :key="menu.title"
            >
              <p class="mb-5 font-medium text-16px-28px text-silver-tree">
                {{ menu.title }}
              </p>
              <div class="font-medium text-white space-y-15px text-16px-28px">
                <p v-for="content in menu.contents" :key="content">
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-mercury p-30px">
      <div
        class="flex items-center justify-center mx-auto my-0  md:justify-between max-w-7xl px-30px"
      >
        <p class="font-normal text-16px-28px text-lynch">
          {{ footer.copyright }}
        </p>
        <p class="hidden font-normal text-16px-28px text-lynch md:block">
          {{ footer.design }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footer: {
        title: 'Your natural candle made for your home and for your wellness.',
        menus: [
          {
            title: 'Discovery',
            contents: ['New season', 'Most searched', 'Most selled'],
          },
          {
            title: 'Info',
            contents: ['Contact Us', 'Privacy Policies', 'Terms & Conditions'],
          },
          {
            title: 'About',
            contents: ['Help', 'Shipping', 'Affiliate'],
          },
        ],
        copyright: '©Candleaf All Rights Reserved.',
        design: 'Designed with ❤️ by uxbly',
      },
    }
  },
}
</script>
