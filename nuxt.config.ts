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
  // Configure Nuxt routing
  pages: {
    'about-me': './components/AboutMe.vue'
  },
  target: 'static',
})
