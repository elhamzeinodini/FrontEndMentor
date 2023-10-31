import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/elham/Documents/github repositories/FrontEndMentor/Multi-Step-Form/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}