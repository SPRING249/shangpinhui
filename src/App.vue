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
  }
}
</script>

<style>
</style>
