<template>
<div>
<!--  三级联动组件，全局组件不需要引入-->
  <TypeNav/>
  <ListContainer></ListContainer>
  <Recommend></Recommend>
  <Rank></Rank>
  <Like></Like>
  <Floor v-for="floor in floorsList" :key="floor.id" :list="floor"></Floor>
  <Brand></Brand>
</div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer/index.vue";
import Recommend from "@/pages/Home/Recommend/index.vue";
import Rank from "@/pages/Home/Rank/index.vue";
import Like from "@/pages/Home/Like/index.vue";
import Floor from "@/pages/Home/Floor/index.vue";
import Brand from "@/pages/Home/Brand/index.vue";
import {mapState} from "vuex";

export default {
  name: "Home",
  components: {
    Brand,
    ListContainer,Recommend,Rank,Like,Floor
  },
  // 复用--有两个Floor组件，不能再Floor组件内部发action
  mounted() {
    this.$store.dispatch('home/getFloorsList')
  },
  computed:{
    ...mapState({
      floorsList:state => state.home.floorsList
    })
  }
}
</script>

<style scoped>

</style>