import ViteRestart from 'vite-plugin-restart'

export default {
  plugins: [
    ViteRestart({
      restart: ['pwa.config.ts', 'vite.config.ts', 'nuxt.config.ts', 'tsconfig.json']
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        refresh: true,
        additionalData: `@import "./assets/index.scss";`,
        includePaths: ['sass']
      }
    }
  }
}
