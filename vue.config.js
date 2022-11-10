const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //asyncheaders() {
  //  return [{
  //    source: '/:path*',
  //    headers: [
  //      { key: 'Access-Control-Allow-Credentials', value: true },
  //      { key: 'Access-Control-Allow-Origin', value:'*'},
  //      { key: 'Access-Control-Allow-Methods', value:'GET, OPTIONS, DELETE, POST, PUTCH'},
  //      { key: 'Access-Control-Allow-Methods', value:'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'}
  //    ]
  //  }]
  //},
  
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:5000'
  }
})
