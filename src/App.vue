<template>
  <div>
    <Header></Header>
    <!--路由组件出口-->
    <router-view></router-view>
    <!--在主页和搜索时显示，在登陆和注册时隐藏-->
    <!--<Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer>-->
    <Footer v-show="$route.meta.show"></Footer>

  </div>
</template>

<script>
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";
export default {
  name: 'App',
  components: {
    Header,Footer
  },
//   通过Vuex向服务器发送请求，获取数据，存储在仓库中，当前三级联动在home组件中
//   组件挂载完毕，向服务器发请求
  mounted() {
    // 没有使用命名空间
    this.$store.dispatch('home/categoryList')
  },
}
</script>

<style>
</style>
