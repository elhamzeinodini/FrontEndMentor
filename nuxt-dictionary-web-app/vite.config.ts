export default {
  css: {
    preprocessorOptions: {
      scss: {
        refresh: true,
        additionalData: `@import "../src/assets/index";`,
        includePaths: ['sass']
      }
    }
  }
}
