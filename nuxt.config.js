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
      {
        hid: 'description', 
        name: 'description', 
        content: 'My journey as a front-end developer started almost 4 years ago. I have 3 years of work experience. I\'m very passionate and dedicated to my work. Always working on improving my skills.'
      },
      {
        hid: 'og:og:title',
        name: 'og:og:title',
        content: 'Portfolio - Alex Dragun'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'My journey as a front-end developer started almost 4 years ago. I have 3 years of work experience. I\'m very passionate and dedicated to my work. Always working on improving my skills.'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://alexdragun.github.io/portfolio/'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://alexdragun.github.io/portfolio/images/projects/portfolio.png'
      }
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
    { src: "@/plugins/VueScrollTo", ssr: false },
    { src: "@/plugins/particles", ssr: false }
  ],
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/i18n',
      { locales: ['en', 'hr'],
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: {
            copyright: 'Copyright © 2021 Alex Dragun | All rights reserved.',
            navigation: {
              home: 'Home',
              about: 'About',
              work: 'Work',
              contact: 'Contact'
            },
            hero: {
              hello: 'HELLO',
              description: 'Front-end developer located in Croatia',
              cv: 'DOWNLOAD CV'
            },
            about: {
              title: 'About Me',
              description: 'My journey as a front-end developer started almost 4 years ago. I have 3 years of work experience. I\'m very passionate and dedicated to my work. Always working on improving my skills.',
              contact: 'CONTACT ME',
              skills: 'My Skills'
            },
            work: {
              title: 'Recent Work',
              link: 'Visit Website',
              portfolio: {
                title: 'Portfolio',
                description: 'My journey as a front-end developer started almost 4 years ago. I have 3 years of w...',
                date: 'Sep, 2021'
              },
              todo: {
                title: 'To Do List',
                description: 'Simple to do list.',
                date: 'Aug, 2020'
              }
            },
            contact: {
              subject: 'Subject',
              message: 'Message',
              submit: 'SUBMIT',
              sending: 'SENDING',
              sent: 'SENT'
            }
          },
          hr: {
            copyright: 'Autorska prava © 2021 Alex Dragun | Sva prava pridržana.',
            navigation: {
              home: 'Početna',
              about: 'O Meni',
              work: 'Projekti',
              contact: 'Kontakt'
            },
            hero: {
              hello: 'BOK',
              description: 'Front-end developer iz Hrvatske',
              cv: 'PREUZMITE ŽIVOTOPIS'
            },
            about: {
              title: 'O Meni',
              description: 'Moje putovanje kao front-end developer započelo je prije gotovo 4 godine. Imam 3 godine radnog iskustva. Strastvena sam osoba i maksimalno posvećen poslu. Educiram se što više kako bih poboljšao svoje vještine.',
              contact: 'KONTAKTIRAJ ME',
              skills: 'Moje Vještine'
            },
            work: {
              title: 'Nedavni Projekti',
              link: 'Posjeti Stranicu',
              portfolio: {
                title: 'Portfolio',
                description: 'Moje putovanje kao front-end developer započelo je prije gotovo 4 godine. Imam 3 godine r...',
                date: 'Ruj, 2021'
              },
              todo: {
                title: 'Lista Zadataka',
                description: 'Jednostvana lista zadataka.',
                date: 'Kol, 2020'
              }
            },
            contact: {
              subject: 'Predmet',
              message: 'Poruka',
              submit: 'POŠALJI',
              sending: 'SLANJE',
              sent: 'POSLANO'
            }
          },
        }
      } }
    ]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // Doc: https://www.npmjs.com/package/nuxt-webfontloader
    'nuxt-webfontloader',
    'vue-scrollto/nuxt',
  ],

  /* i18n: {
    locales: ['en', 'hr'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        hr: {
          welcome: 'Dobrodošao'
        },
      }
    }
  }, */

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
    babel:{
      plugins: [
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ]
    },
    extend (config, ctx) {
    }
  }
}
