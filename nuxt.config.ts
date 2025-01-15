// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  pages: true,

  ssr: true,


   app: {
     head: {
       title: "AI CHATBOT",
       meta: [
         { name: 'description', content: "A simple AI-powered query assistant built with Nuxt 3, TypeScript, and Tailwind CSS." },
         { property: 'og:title', content: "NUXT AI CHATBOT" },
         { property: 'og:description', content: "Explore a minimal yet functional demonstration of integrating together.xyz's API into a Nuxt application." },
         { name: 'twitter:title', content: "NUXT AI CHATBOT" },
         { name: 'twitter:description', content: "A simple AI-powered query assistant built with Nuxt 3, TypeScript, and Tailwind CSS." },
         { name: 'twitter:image', content: "/favicon.ico" }, 
        ],
      }},
      
  icon: {
    serverBundle: {
      collections: ["uil", "mdi"],
    },
  },
  
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", ["@nuxt/ui", {}]],
  
  runtimeConfig: {
    TOGETHER_API_KEY: process.env.NUXT_TOGETHER_API_KEY
  },
});
