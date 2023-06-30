import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {},
      javascriptEnabled: true
    }
  },
  plugins: [
    vue(),
    VueSetupExtend(),
    vueJsx(),
  ],
  build:{
    target: 'modules',
    outDir: 'es',
    emptyOutDir: false,
    minify: false,
    lib: {
      entry: 'src/index.js',
      formats: ['es']
    },
    rollupOptions:{
      external: ['vue'],
      input: ['src/index.js'],
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
          globals: {
            vue: 'Vue',
          },
        }
      ]
    },
  }
})