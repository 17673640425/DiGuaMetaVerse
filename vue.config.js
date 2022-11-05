const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
devServer: {
historyApiFallback: true,
allowedHosts: "all",
 host: '0.0.0.0',
    // https:true,
      port: 8080,
    //   client: {
    //     webSocketURL: 'ws://0.0.0.0:8080/ws',
    //   },
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
 proxy: {
      '/': {
        target: 'http://localhost:8082/', // 本地后端地址
        changeOrigin: true, //允许跨域
        ws: false
      }
    }
},
  transpileDependencies: true
})
