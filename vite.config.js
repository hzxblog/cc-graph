import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {},
      javascriptEnabled: true
    }
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  build:{
    assetsDir: '',
    rollupOptions:{
      input: 'src/index.js',
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: "[name].js",
        assetFileNames: "[name][extname]"
      }
    },
  }
})