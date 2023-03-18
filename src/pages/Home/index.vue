<template>
<div>
<!--  三级联动组件，全局组件不需要引入-->
  <TypeNav/>
  <ListContainer></ListContainer>
  <Recommend></Recommend>
  <Rank></Rank>
  <Like></Like>
  <Floor></Floor>
  <Floor></Floor>
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
  computed:{
    ...mapState(['count'])
  }
}
</script>

<style scoped>

</style>