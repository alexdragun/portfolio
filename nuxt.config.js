const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/portfolio/"
        }
      }
    : {};

export default {
  mode: "universal",
  target: "server",
  /*
   ** Headers of the page
   */
  head: {
    title: "Portfolio - Alex Dragun",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Experienced Front-End Developer with 5+ years of experience in creating and implementing web solutions that improve the user experience. Collaborating with cross-functional teams to bring projects from concept to launch."
      },
      {
        hid: "og:og:title",
        name: "og:og:title",
        content: "Portfolio - Alex Dragun"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Experienced Front-End Developer with 5+ years of experience in creating and implementing web solutions that improve the user experience. Collaborating with cross-functional teams to bring projects from concept to launch."
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://alexdragun.github.io/portfolio/"
      },
      {
        hid: "og:image",
        name: "og:image",
        content:
          "https://alexdragun.github.io/portfolio/images/projects/portfolio.png"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.svg" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#2c97de" },
  /*
   ** Global CSS
   */
  css: ["@/assets/styles.scss"],
  /*
   ** Google fonts
   */
  webfontloader: {
    google: {
      families: ["Roboto: 100, 200, 300, 400, 500, 700"] //Loads Lato font with weights 400 and 700
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
    "@nuxtjs/eslint-module",
    [
      "@nuxtjs/i18n",
      {
        locales: ["en", "hr"],
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: {
              copyright: "Copyright © 2023 Alex Dragun | All rights reserved.",
              navigation: {
                home: "Home",
                about: "About",
                work: "Work",
                contact: "Contact"
              },
              hero: {
                hello: "HELLO",
                description: "Front-end developer located in Croatia",
                cv: "DOWNLOAD CV"
              },
              about: {
                title: "About Me",
                description:
                  "Experienced Front-End Developer with 5+ years of experience in creating and implementing web solutions that improve the user experience. Collaborating with cross-functional teams to bring projects from concept to launch. A team player, but can also work independently without any supervision. A continuous learner. Sets and achieves ambitious goals. Good communication skills. Improved website performance and user experience by implementing optimisation techniques and reducing load times. Utilised Git for version control and collaboration with remote teams. I am a highly skilled front-end developer with expertise in Vue.js, Nuxt.js, JavaScript, TypeScript, Strapi, Storybook, Bootstrap, Tailwind, Quasar, REST API, and Cypress.",
                contact: "CONTACT ME",
                skills: "My Skills"
              },
              work: {
                title: "Recent Work",
                link: "Visit Website",
                portfolio: {
                  title: "Portfolio",
                  description:
                    "Experienced Front-End Developer with 5+ years of experience in creating and implementing web sol...",
                  date: "Sep, 2021"
                },
                todo: {
                  title: "To Do List",
                  description: "Simple to do list.",
                  date: "Aug, 2020"
                }
              },
              contact: {
                subject: "Subject",
                message: "Message",
                submit: "SUBMIT",
                sending: "SENDING",
                sent: "SENT"
              }
            },
            hr: {
              copyright:
                "Autorska prava © 2023 Alex Dragun | Sva prava pridržana.",
              navigation: {
                home: "Početna",
                about: "O Meni",
                work: "Projekti",
                contact: "Kontakt"
              },
              hero: {
                hello: "BOK",
                description: "Front-end developer iz Hrvatske",
                cv: "PREUZMITE ŽIVOTOPIS"
              },
              about: {
                title: "O Meni",
                description:
                  "Iskusni Front-End Developer s 5+ godina iskustva u izradi i implementaciji web rješenja koja poboljšavaju korisničko iskustvo. Surađujem s međufunkcionalnim timovima kako bi se projekti doveli od koncepta do pokretanja. Timski igrač, ali mogu raditi i samostalno bez nadzora. Stalni učenik. Postavljam i ostvarujem ambiciozne ciljeve. Dobre komunikacijske vještine. Poboljšana izvedba web stranice i korisničko iskustvo implementacijom tehnika optimizacije i smanjenjem vremena učitavanja. Koristim Git za kontrolu verzija i suradnju s udaljenim timovima. Vrlo sam vješt front-end programer sa stručnim znanjem o Vue.js, Nuxt.js, JavaScript, TypeScript, Strapi, Storybook, Bootstrap, Tailwind, Quasar, REST API i Cypress.",
                contact: "KONTAKTIRAJ ME",
                skills: "Moje Vještine"
              },
              work: {
                title: "Nedavni Projekti",
                link: "Posjeti Stranicu",
                portfolio: {
                  title: "Portfolio",
                  description:
                    "Iskusni Front-End Developer s 5+ godina iskustva u izradi i implementaciji web rješ...",
                  date: "Ruj, 2021"
                },
                todo: {
                  title: "Lista Zadataka",
                  description: "Jednostvana lista zadataka.",
                  date: "Kol, 2020"
                }
              },
              contact: {
                subject: "Predmet",
                message: "Poruka",
                submit: "POŠALJI",
                sending: "SLANJE",
                sent: "POSLANO"
              }
            }
          }
        }
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    "@nuxtjs/style-resources",
    // Doc: https://www.npmjs.com/package/nuxt-webfontloader
    "nuxt-webfontloader",
    "vue-scrollto/nuxt"
  ],

  styleResources: {
    scss: [
      "@/assets/styles/variables/_colors.scss",
      "@/assets/styles/layout/_typography.scss",
      "@/assets/styles/layout/_zindex.scss"
    ]
  },
  /*
   ** Build configuration
   */
  ...routerBase,
  build: {
    /*
     ** You can extend webpack config here
     */
    babel: {
      plugins: [
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        ["@babel/plugin-proposal-private-methods", { loose: true }],
        ["@babel/plugin-proposal-private-property-in-object", { loose: true }]
      ]
    },
    extend(config, ctx) {}
  }
};
