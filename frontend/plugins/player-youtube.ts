import YouTube from 'vue3-youtube'

export default defineNuxtPlugin(nuxtApp => {
    // nuxtApp.component('YouTube', YouTube)
    nuxtApp.vueApp.component('YouTube', YouTube);
  })