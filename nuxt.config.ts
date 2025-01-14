// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  pages: true,

  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", ["@nuxt/ui", {}]],

  icon: {
    serverBundle: {
      collections: ["uil", "mdi"],
    },
  },

  runtimeConfig: {
    TOGETHER_API_KEY: process.env.NUXT_TOGETHER_API_KEY
  },
});
