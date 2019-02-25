const pkg = require('./package')
const config = require('config')

console.log(config.get('BASE_URL'))
module.exports = {
  env :{
    apiBaseUrl:  config.get('API_BASE_URL'),
    baseUrl:  config.get('BASE_URL')
  },
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Js Demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is a test' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  serverMiddleware: [

    { path: '/api/buildings', handler: '~/api/buildings.js' }
  ],
  axios : {
    baseURL: config.get('API_BASE_URL')
  }
}
