<template>
<div>
  <h3>
    params{{$route.params.keyWord}}
    query{{$route.query.keyWord}}
    {{keyWord}} ---{{k}}
  </h3>
</div>
</template>

<script>
export default {
  name: "index",
  props:['keyWord','k']
}
</script>

<style scoped>

</style>