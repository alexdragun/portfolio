const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/portfolio/'
  }
} : {}

export default {
  mode: 'universal',
  target: 'server',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio - Alex Dragun',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.svg' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2c97de' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles.scss'
  ],
  /*
  ** Google fonts
  */
  webfontloader: {
    google: {
      families: ['Roboto: 100, 200, 300, 400, 500, 700'] //Loads Lato font with weights 400 and 700
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "@/plugins/aos", ssr: false },
    { src: "@/plugins/VueScrollTo", ssr: false },
    { src: "@/plugins/particles", ssr: false }
  ],
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // Doc: https://www.npmjs.com/package/nuxt-webfontloader
    'nuxt-webfontloader',
    'vue-scrollto/nuxt'
  ],
  styleResources: {
    scss: [
      '@/assets/styles/variables/_colors.scss',
      '@/assets/styles/layout/_typography.scss',
      '@/assets/styles/layout/_zindex.scss'
    ],
  },
  /*
  ** Build configuration
  */
  ...routerBase,
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
