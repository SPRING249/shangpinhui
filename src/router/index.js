import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "@/pages/Home/index.vue";
import Search from "@/pages/Search/index.vue";
import Register from "@/pages/Register/index.vue";
import Login from "@/pages/Login/index.vue";
Vue.use(VueRouter)
//先把VueRouter原型对象的push保存一份
let originPush=VueRouter.prototype.push
let originReplace=VueRouter.prototype.replace
//重写push、replace方法
VueRouter.prototype.push=function (location,resolve,reject) {
    if(resolve&&reject){
        // call&apply 都可以的调用函数一次，可以篡改函数上下文一次
        originPush.call(this,location,resolve,reject)
    }else {
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace=function (location,resolve,reject) {
    if(resolve&&reject){
        // call&apply 都可以的调用函数一次，可以篡改函数上下文一次
        originReplace.call(this,location,resolve,reject)
    }else {
        originReplace.call(this,location,()=>{},()=>{})
    }
    
}
export default new VueRouter({
    // 配置路由
    routes:[
        {
            name:'home',
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            name:"search",
            path:'/search/:keyWord',//使用params传递参数一定要用占位
            component:Search,
            meta:{show:true},
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        //重定向
        {
            path:'*',
            redirect:'/home'
        }
    ]
})