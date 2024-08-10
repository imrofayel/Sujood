// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/content", "@nuxt/ui"],

  css: [
    'assets/css/fonts.css'
  ],
})