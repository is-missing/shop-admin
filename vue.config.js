const { defineConfig } = require('@vue/cli-service')
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
    }
  },
  devServer: {
    // port: '8888'
    host: 'localhost',
    open: true
  }
})
