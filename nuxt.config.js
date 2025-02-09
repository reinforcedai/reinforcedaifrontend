import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  head: {
    titleTemplate: '%s',
    title: 'Reinforced AI',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://reinforcedai.com'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { 'data-website-id': '2032fb6c-b6fb-4fba-bcbf-fe6402c6169f', src: 'https://analytics-admin.netlify.app/umami.js' },
    ],
  },

  css: [
    '@/assets/css/main.css',
  ],

  plugins: [
    '~/plugins/vue-swal'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit',
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#010101',
          accent: '#999999',
          info: '#101010',
          warning: '#3B5E26',
          error: '#4D4D4D',
          success: '#64DD17',
        }
      }
    }
  },

  build: {
  },

  strapi: {
    entities: ['blogs', 'categories', 'contact'],
    url: process.env.BACKEND_URL || 'http://localhost:1337'
  },

  sitemap: {
    hostname: 'https://reinforcedai.com/' || 'http://localhost:3000/',
    gzip: true,
    exclude: [
      '/secret',
      '/admin',
      '/admin/**'
    ],
    routes: [
      '/page/**',
      '/page/blog',
      {
        url: '/page/blog/**',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date()
      }
    ]
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },
  
  env: {
  strapiBaseUri: process.env.BACKEND_URL || "http://localhost:1337",
  },

}
