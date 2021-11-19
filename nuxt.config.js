export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'candleaf',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Font Roboto: https://fonts.google.com/specimen/Roboto
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
      },
      // Font Poppins: https://fonts.google.com/specimen/Poppins
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Repositories: https://viblo.asia/p/quan-ly-va-su-dung-api-trong-nuxt-bang-cach-su-dung-repository-pattern-6J3ZgNRBKmB
    { src: '~/plugins/repositories.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components/shared/',
      prefix: 'base',
    },
    {
      path: '~/components/home/',
      prefix: 'home',
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/nuxt-vue-multiselect
    'nuxt-vue-multiselect',
    // https://www.npmjs.com/package/@nuxtjs/dotenv
    '@nuxtjs/dotenv',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_ENDPOINT,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // SVG Configuration: https://www.npmjs.com/package/@nuxtjs/svg#configuration
  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    },
  },

  // Config Server: https://nuxtjs.org/docs/features/configuration/#edit-host-and-port
  server: {
    host: '0.0.0.0', // default: localhost
    port: 8000, // default: 3000
  },
}
