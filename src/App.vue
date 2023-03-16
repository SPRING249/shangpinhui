<template>
  <div>
    我是根组件
    <header></header>
    <!--路由组件出口-->
    <router-view></router-view>
    <footer></footer>
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
