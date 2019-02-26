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
    '@nuxtjs/auth',
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
    { path: '/api/buildings', handler: '~/api/buildings.js' },
    { path: '/api/login', handler: '~/api/login.js' },
    { path: '/api/logout', handler: '~/api/logout.js' },
    { path: '/api/user', handler: '~/api/user.js' },
  ],
  auth:{
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/user', method: 'get', propertyName: 'data' }
        }
      }
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/'
      }
    },
    localStorage: false
  }
}
