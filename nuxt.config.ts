import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
  target: 'static',
  router: {
    base: '/',
  },
  generate: {
    fallback: true, // if you want a single fallback page
    exclude: [
      /^\/dynamic-route\/.*$/ // regex to exclude dynamic routes
    ]
  }
})
