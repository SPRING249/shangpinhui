//对于axios的二次封装
import axios from 'axios'
// 引入页面顶部加载进度条
import nprogress from 'nprogress'
// 引入页面顶部加载进度条样式
import "nprogress/nprogress.css"
const requests=axios.create({
    //基础路径
    baseURL:'/api',
    // 代表请求超时的时间
    timeout:5000,
    
})

// 请求拦截器
requests.interceptors.request.use((config)=>{
    // 配置对象，对象里面有一个属性很重要，headers请求头
    // 页面顶部加载进度条开始
    nprogress.start()
    return config
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调函数，服务器相应数据回来以后，响应拦截器可以监测到，可以做一些事情
    // 页面顶部加载进度条结束
    nprogress.done()
    return res.data
},(error) =>{
    // 响应失败的回调函数
    return Promise.reject(new Error('fail'))
} )
//对外暴露
export default requests