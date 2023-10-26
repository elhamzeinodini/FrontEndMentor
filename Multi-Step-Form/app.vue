<template>
  <div>
    <div v-if="!show">
      <AppLoadingSpinner />
    </div>
    <div v-else>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
////////////////////////////////////// auth store
import { useAuthStore } from '~/store/authentication'
const authStore = useAuthStore()
const { userAgent, isLoggedIn } = storeToRefs(authStore)

///////////////////////////////////// states
const show = ref(false)

//////////////////////////////////// passing the user agent to the ajax requests
onMounted(() => {
  if (process.client) {
    authStore.userAgent = navigator.userAgent
  }
  show.value = true
})

/////////////////////////////////// loading spinner
// const nuxtApp = useNuxtApp()
// nuxtApp.hook('page:start', () => {
//   show.value = true
// })

// nuxtApp.hook('page:finish', () => {
//   show.value = false
// })
</script>

<style lang="scss">
@import '/assets/sass/main.scss';
</style>
