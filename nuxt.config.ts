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
    base: '/joelstephen97.github.io/',
  },
  generate: {
    dir: 'docs',
    routes: () => require('fs').readdirSync('docs').map(file => ({
      route: `/${file.replace('.md', '.html')}`,
    })),
  },
})