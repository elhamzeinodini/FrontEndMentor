export default defineNuxtConfig({
  devtools: { enabled: true },
    vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/_index.scss";',
        },
      },
    },
  },
})
