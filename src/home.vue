<template>
  <div>
      this is home主页
  </div>
</template>

<script>
export default {
   beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log('组件内守卫 beforeRouteEnter')
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('组件内守卫 beforeRouteLeave')

  }
}
</script>

<style>

</style>