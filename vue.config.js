
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
  css: {
    // modules:false,
    // extract:true,
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  },
  //跨域配置
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://mobile.yangkeduo.com/proxy/api/api",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/99api": {  //配置99api接口跨域
        target: "http://api01.6bqb.com/pdd",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/99api": ""
        }
      }
    }
  }
};