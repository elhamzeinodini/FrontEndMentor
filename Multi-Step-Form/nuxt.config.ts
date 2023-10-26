export default defineNuxtConfig({
  router: {
    options: {
      linkActiveClass: 'activeLink'
    }
  },
  app: {
    head: {
      title: 'Home | Terminal 101',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=0.9' },
        {
          name: 'description',
          content: ''
        },
        { name: 'author', content: '' },
        { name: 'og:site_name', content: '' },
        { name: 'og:url', content: '' },
        { name: 'og:title', content: '' },
        { name: 'og:description', content: '' },
        { name: 'og:image', content: '' },
        { name: 'twitter:url', content: '' },
        { name: 'twitter:title', content: '' },
        { name: 'twitter:description', content: '' },
        { name: 'twitter:image', content: '' }
      ],
      link: [
        { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap-grid.css' },
        { rel: 'icon', type: 'image/x-icon', href: '/svgs/logo.svg' },
        { rel: 'apple-touch-icon', href: '/pwa_icons/pwa_180x180_terminal101.png', sizes: '180x180' },
        { rel: 'mask-icon', href: '/pwa_icons/pwa_180x180_terminal101.png', color: '#FFFFFF' }
      ]
    }
  },
  modules: ['@pinia/nuxt', '@nuxtjs/eslint-module', '@element-plus/nuxt', '@vite-pwa/nuxt'],
  pinia: {
    autoImports: ['defineStore', 'storeToRefs']
  },
  // google otp
  googleSignIn: {
    clientId: '486135013350-sr4e6av1t8h7bsp0ma61g3cn0qaed0s6.apps.googleusercontent.com'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  runtimeConfig: {
    public: {
      ////////////////////////////////// auth keys
      token: '_TERMINAL101_BackOffice_token',
      refreshToken: '_TERMINAL101_BackOffice_refreshToken',

      ////////////////////////////////// service urls variables
      BASE_URL: process.env.NUXT_ENV_BASE_URL,

      ////////////////////////////////// contact info
      OFFICE_ADDRESS: process.env.OFFICE_ADDRESS,
      CONTACT_NUMBER: process.env.CONTACT_NUMBER,
      SUPPORT_NUMBER: process.env.SUPPORT_NUMBER,
      SUPPORT_EMAIL: process.env.SUPPORT_EMAIL,
      COMPANY_EMAIL: process.env.COMPANY_EMAIL
    }
  }
})
