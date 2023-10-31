import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/elham/Documents/github repositories/FrontEndMentor/Multi-Step-Form/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}