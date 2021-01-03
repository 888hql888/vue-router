<template>
  <div>
      box我是复用的组件222
  </div>
</template>

<script>
export default {
  watch: {
    "$route.path"(to, from) {
      console.log(to,from,'监听路由变化....')
      // 对路由变化作出响应...
    }
  }
}
</script>

<style>

</style>