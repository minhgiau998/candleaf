<template>
  <div class="flex flex-col w-full mt-15px md:w-1/2">
    <product-title class="hidden md:block" :name="product.name"></product-title>
    <div class="flex flex-row items-center justify-between">
      <p
        v-if="formatPrice"
        class="font-semibold  font-poppins text-26px-58px -tracking-09px text-silver-tree"
      >
        {{ formatPrice }}
      </p>
      <div class="flex flex-row">
        <span class="font-normal font-roboto text-18px-28px -tracking-09px">
          Quantity
        </span>
        <base-number class="ml-15px" v-model="quantity"></base-number>
      </div>
    </div>
    <div>
      <product-detail-subscription
        :options="options"
        :date="date"
      ></product-detail-subscription>
    </div>
    <base-button class="w-full mx-auto my-0 mt-25px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-shopping-cart"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path
          d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
        ></path>
      </svg>
      <p class="ml-10px">+ Add to cart</p>
    </base-button>
    <div
      class="p-6 space-y-2 border-solid  border-1 border-platinum rounded-7px mt-22px"
    >
      <p class="font-normal font-poppins text-16px-18px text-dark-gunmetal">
        Wax:
        <span class="text-dolphin-gray">
          {{ product.wax }}
        </span>
      </p>
      <p class="font-normal font-poppins text-16px-18px text-dark-gunmetal">
        Fragrance:
        <span class="text-dolphin-gray">
          {{ product.fragrance }}
        </span>
      </p>
      <p class="font-normal font-poppins text-16px-18px text-dark-gunmetal">
        Burning Time:
        <span class="text-dolphin-gray">
          {{ product.burning_time }}
        </span>
      </p>
      <p class="font-normal font-poppins text-16px-18px text-dark-gunmetal">
        Dimension:
        <span class="text-dolphin-gray">
          {{ product.dimension }}
        </span>
      </p>
      <p class="font-normal font-poppins text-16px-18px text-dark-gunmetal">
        Weight:
        <span class="text-dolphin-gray">
          {{ product.weight }}
        </span>
      </p>
    </div>
    <product-slogan class="block md:hidden"></product-slogan>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      quantity: 0,
      options: [
        {
          label: 'One time purchase',
          value: 1,
          description: '',
        },
        {
          label: 'Subscribe and delivery every week',
          value: 2,
          description: `<p class="font-normal text-gray-400 font-poppins text-16px-18px">
            Subscribe now and get the 10% of discount on every recurring order.
            The discount will be applied at checkout.
          </p>
          <a
            href=""
            class="font-normal font-poppins text-16px-18px text-silver-tree"
          >
            See Detail
          </a>`,
        },
      ],
      date: [
        {
          label: 'weeks',
          value: 1,
        },
        {
          label: 'months',
          value: 2,
        },
      ],
    }
  },
  computed: {
    formatPrice() {
      return '$ ' + this.product.price
    },
  },
}
</script>
