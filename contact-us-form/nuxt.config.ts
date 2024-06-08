export default defineNuxtConfig({
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"],
      },
    ],
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          refresh: true,
          additionalData: `@import "~/assets/sass/utils.scss";`,
          includePaths: ["sass"],
        },
      },
    },
  },
});
