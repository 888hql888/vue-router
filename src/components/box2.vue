<template>
  <div>
    <h1>动态路由匹配---多个参数</h1>
    <p>name:{{$route.params.name}},------>pwd:{{$route.params.pwd}}</p>

    <h2>使用watch 或者 beforeRouteUpdate  监听路由的变化(不要刷新页面否则watch无用..)</h2>
    <router-link to="/box2/evan/12345">/box2/evan/12345</router-link>=====
    <router-link to="/box2/evan/12346">/box2/evan/12346</router-link>
  </div>
</template>

<script>
export default {
  created(){
    // console.log(this.$route,'....')
  },
    beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('组件内守卫 beforeRouteUpdate')

  },
  watch: {
    "$route.path"(newvalue,oldvalue) {
      console.log(newvalue,oldvalue,'监听路由变化....')
      // 对路由变化作出响应...
    }
  }
    
}
</script>

<style>

</style>