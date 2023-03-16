import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from "@/router";
// 三级联动组件
import TypeNav from "@/pages/Home/TypeNav"
Vue.config.productionTip = false
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  // 注册路由
  router
}).$mount('#app')
