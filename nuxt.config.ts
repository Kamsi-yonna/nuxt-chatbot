// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  pages: true,

  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", ["@nuxt/ui", {}]],

  icon: {
    serverBundle: {
      collections: ["uil", "mdi"], // <!--- this
    },
  },

  runtimeConfig: {
    openAIApi: process.env.OPENAI_API_KEY,
  },
});
