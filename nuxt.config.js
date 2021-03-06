import dotenv from 'dotenv';
let config = dotenv.config({ path: `.env.${process.env.NODE_ENV}` }).parsed;
if (!config) config = process.env;

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s',
    title: 'CatchStudy',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover',
      },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: 'CatchStudy' },
      { hid: 'ogtitle', name: 'og:title', content: 'CatchStudy' },
      { hid: 'ogdescription', name: 'og:description', content: 'CatchStudy' },
      { hid: 'ogtype', name: 'og:type', content: 'website' },
      { hid: 'ogiamge', name: 'og:image', content: '' },
      { hid: 'ogurl', name: 'og:url', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  server: {
    port: config.PORT, // default: 3000
    host: config.HOST || '0.0.0.0', // default: localhost,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/css/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/tiptap-vuetify.js', mode: 'client' },
    { src: '~/plugins/vue-input-tag.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', { treeShake: true }],
    '@nuxtjs/moment',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    'vuetify-dialog/nuxt',
    'nuxt-material-design-icons',
  ],
  axios: {
    browserBaseURL: config.browserBaseURL,
    baseURL: config.baseURL,
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeshake: true,
  },
  env: {
    baseUrl: config.baseUrl,
    default_img: config.default_img,
    no_img: config.no_img,
    default_cover: config.default_cover,
    WS_URL: config.WS_URL,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    extend(config, { isServer, isDev }) {
      if (isServer && !isDev) {
        config.devtool = 'hidden-source-map';
      }
    },
  },
};
