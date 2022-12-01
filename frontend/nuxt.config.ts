// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@use "@/assets/scss/index.scss" as *;'
            }
          }
        }
      },
      app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=device-width, height=device-height, initial-scale=1',
          title: 'Plug.DJ',
          meta: [
            { name: 'description', content: 'Plug.DJ is the best music streaming app to enjoy great music. Play any song of your favorite artist, album or playlist in high quality.' }
          ],
        }
      },
      modules: [
        '@nuxt/image-edge',
      ]
})
