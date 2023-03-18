const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  //关闭eslint校验功能
  lintOnSave:false,
//   代理跨域
  devServer:{
    proxy:{
      '/api':{  //遇到带有api的请求，代理服务器才会请求转发
        target:'http://gmall-h5-api.atguigu.cn'
      }
    }
  }
})
