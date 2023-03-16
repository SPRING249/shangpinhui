import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "@/pages/Home/index.vue";
import Search from "@/pages/Search/index.vue";
import Register from "@/pages/Register/index.vue";
import Login from "@/pages/Login/index.vue";
Vue.use(VueRouter)

export default new VueRouter({
    // 配置路由
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        //重定向
        {
            path:'*',
            redirect:'/home'
        }
    ]
})