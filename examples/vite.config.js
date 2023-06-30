import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  mode: 'development',
  css: {
    preprocessorOptions: {
      less: {},
      javascriptEnabled: true
    }
  },
  server: {
    open: true,
    host: '0.0.0.0',
    port: 2233,
    hmr: true,
    fs: {
      strict: true,
      allow: ['..'],
    },
  },
  plugins: [
    vue(),
    vueJsx(),
  ]
})