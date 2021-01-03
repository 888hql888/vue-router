<template>
  <div class="name-views">
      <h1>命令视图</h1>
      <ul>
          <li>
              <router-link to="/name1"></router-link>
              <router-link to="/name2"></router-link>
          </li>
          <li></li>
      </ul>
      <h3>视图出口</h3>

      <router-view></router-view> <!-- 默认 -->
      <router-view name="a"></router-view> <!-- name=a 的视图 -->
      <router-view name="b"></router-view> <!-- name=b 的视图 -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>