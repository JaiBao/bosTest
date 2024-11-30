// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {}
  },

  // 開發者工具
  devtools: { enabled: true },
  // 使用的模块
  modules: ['@pinia/nuxt', 'nuxt-quasar-ui', 'nuxt-simple-sitemap', '@nuxt/image', '@pinia-plugin-persistedstate/nuxt'],
  css: ['~/assets/global.scss'],
  // Quasar 插件配置
  quasar: {
    lang: 'zh-TW',
    cssAddon: true,
    plugins: ['Notify', 'Loading'],
    config: {
      lang: 'zh-tw'
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', 'sitemap.xml'],
      ignore: []
    }
  },
  // 網站訊息
  site: {
    url: ''
  },
  // 路由配置
  router: {
    trailingSlash: false
    // middleware: ['agreeCollection']
  }
})
