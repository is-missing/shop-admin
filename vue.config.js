const { defineConfig } = require('@vue/cli-service')
// 局部引入element-plus
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// 引入windicss
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = defineConfig({
  // 打包白屏问题
  publicPath: './',
  // 打包默认文件
  outputDir: 'build',
  transpileDependencies: true,
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      }
    },
    // 引入element-plus
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      new WindiCSSWebpackPlugin()
    ]
  },
  devServer: {
    // port: '8888'
    host: 'localhost',
    open: true
  }
})
