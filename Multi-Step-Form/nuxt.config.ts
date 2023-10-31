export default defineNuxtConfig({
  router: {
    options: {
      linkActiveClass: "activeLink",
    },
  },
  app: {
    head: {
      title: "Home | Multi Step Form",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=0.9" },
        {
          name: "description",
          content: "",
        },
        { name: "author", content: "" },
        { name: "og:site_name", content: "" },
        { name: "og:url", content: "" },
        { name: "og:title", content: "" },
        { name: "og:description", content: "" },
        { name: "og:image", content: "" },
        { name: "twitter:url", content: "" },
        { name: "twitter:title", content: "" },
        { name: "twitter:description", content: "" },
        { name: "twitter:image", content: "" },
      ],
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/bootstrap-grid.css",
        },
        { rel: "icon", type: "image/x-icon", href: "/svgs/logo.png" },
      ],
    },
  },
  modules: ["@pinia/nuxt", "@element-plus/nuxt"],
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
