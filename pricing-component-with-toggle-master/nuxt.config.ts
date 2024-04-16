// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [["@pinia/nuxt", { autoImports: ["defineStore", "storeToRefs"] }]],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/sass/app/variables.scss";',
        },
      },
    },
  },
});
