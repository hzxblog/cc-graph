import babel from "@rollup/plugin-babel";
import vue from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image"
import { cleandir } from 'rollup-plugin-cleandir'

export default {
  input: './src/index.js',
  output: {
    file: 'dist/index.js',
  },
  plugins: [
    cleandir('es'),
    resolve(),
    vue({
      css: false,
      defaultLang: {
        style: 'less',
      },
      style: {
        less: {}
      }
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: "**/node_modules/**",
      presets: ["@vue/babel-preset-jsx"]
    }),
    commonjs(),
    image()
  ]
}