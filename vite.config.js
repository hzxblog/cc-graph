import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
// import { createStyleImportPlugin } from 'vite-plugin-style-import'

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {},
      javascriptEnabled: true
    }
  },
  plugins: [
    vue(),
    // createStyleImportPlugin({
    //   libs: [
    //     {
    //       libraryName: '@arco-design/web-vue',
    //       esModule: true,
    //       resolveStyle: (name) => {
    //         return `@arco-design/web-vue/es/${name}/style/css.js`
    //       },
    //     }
    //   ]
    // }),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        })
      ]
    }),
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
      formats: ['es', 'cjs']
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