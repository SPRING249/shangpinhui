import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from "@/router";
// 三级联动组件:全局组件
import TypeNav from "@/components/TypeNav"
import {reqCategoryList} from "@/api";
// 引入仓库
import store from "@/store";
// 引入MockServer.js ---Mock数据
import '@/mock/mockServer'
// 引入swiper样式
import "swiper/css/swiper.css"
// 引入轮播图全局组件
import Carousel from "@/components/Carousel/index.vue";
Vue.config.productionTip = false
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
reqCategoryList()
Vue.component(Carousel.name,Carousel)
new Vue({
  render: h => h(App),
  // 注册路由
  router,
//   注册仓库:组件实例的身上会多一个$route 属性
  store
}).$mount('#app')
