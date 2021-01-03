<template>
  <div class="user-nav-setting">
    <h1>嵌套组件案例</h1>
    <div class="content">
      <userNav class="user-nav" />
      <router-view class="main-view"></router-view>
    </div>
  </div>
</template>

<script>
import userNav from "./userNav";
export default {
  components: {
    userNav,
  },
};
</script>

<style lang="less" scoped>

html,body{
    height: 100%;
}
.user-nav-setting {
  h1 {
    font-size: 30px;
    color: pink;
  }
  .content {
      display: flex;
    .user-nav {
      width: 300px;
      height: 1000px;
      background-color: grey;
      color: red;
      font-size: 24px;
    }
    .main-view{
        width: 800px;
        padding-left: 100px;
        font-size: 16px;
    }
  }
}
</style>