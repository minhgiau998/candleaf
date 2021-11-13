<template>
  <div class="fixed z-20 w-full" :class="{ 'shadow-lg': !view.atTopOfPage }">
    <!-- Base Navigation Bar For Mobile -->
    <div class="block md:hidden">
      <div
        class="flex flex-row items-center justify-between border-solid  border-b-1 p-30px border-mercury"
      >
        <button @click="this.open">
          <div class="hamburger" :class="['hamburger', this.active]">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </button>
        <a href=".">
          <img src="~/assets/images/logo.png" alt="Candleaf" />
        </a>
        <div class="flex flex-row items-center space-x-15px">
          <button>
            <img src="~assets/svg/user.svg" />
          </button>
          <button>
            <img src="~assets/svg/cart.svg" />
          </button>
        </div>
      </div>
      <transition name="slide">
        <div
          id="menu"
          v-if="this.isOpened"
          class="flex flex-col py-5 space-y-5 font-normal border-solid  px-30px font-roboto text-24px-28px text-mine-shaft border-b-1 border-mercury"
        >
          <nuxt-link v-for="menu in menus" :key="menu.title" :to="menu.link">
            {{ menu.title }}
          </nuxt-link>
        </div>
      </transition>
    </div>
    <!-- Base Navigation Bar For Desktop -->
    <div class="hidden border-solid md:block border-mercury border-b-1">
      <div
        class="flex flex-row items-center justify-between mx-auto my-0  p-30px max-w-7xl"
      >
        <a href=".">
          <img src="~/assets/images/logo.png" alt="Candleaf" />
        </a>
        <div
          class="flex flex-row items-center font-medium  space-x-9 font-roboto text-16px-18px text-mine-shaft"
        >
          <nuxt-link v-for="menu in menus" :key="menu.title" :to="menu.link">
            {{ menu.title }}
          </nuxt-link>
        </div>
        <div class="flex flex-row items-center space-x-15px">
          <button>
            <img src="~assets/svg/user.svg" />
          </button>
          <button>
            <img src="~assets/svg/cart.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false,
      menus: [
        {
          title: 'Discovery',
          link: '/discovery',
        },
        {
          title: 'About',
          link: '/about',
        },
        {
          title: 'Contact',
          link: '/contact',
        },
      ],
      view: {
        atTopOfPage: true,
      },
    }
  },
  computed: {
    active() {
      return this.isOpened ? 'active' : ''
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    open() {
      this.isOpened = !this.isOpened
    },
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    },
  },
}
</script>

<style scoped>
.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
}

@media only screen and (max-width: 768px) {
  .hamburger {
    display: block;
    cursor: pointer;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

.slide-enter-active {
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-leave-active {
  -webkit-animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@-webkit-keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
}

@keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
}
</style>
