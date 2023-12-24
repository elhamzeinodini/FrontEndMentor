import ViteRestart from "vite-plugin-restart";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@element-plus/nuxt", "@nuxt/image"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/sass/_index.scss";',
        },
      },
    },
  },
});
