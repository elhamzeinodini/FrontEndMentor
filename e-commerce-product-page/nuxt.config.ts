export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@element-plus/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/app/variables.scss";',
        },
      },
    },
  },
});
