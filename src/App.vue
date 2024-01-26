<template>
  <div id="app">
    <!-- 使用组件 -->
    <mynav />
      <!-- 
      router-link可以理解为<a>
      to 可以理解为herf=路劲
      一旦使用了路由跳转，必须找router/index.js文件，
      该文件中配置了路由和组件的映射关系 
      -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- 引入路由 -->
    <router-view/>
  </div>
</template>

<script>
import mynav from './views/nav/index.vue'
export default ({
  data() {
    return {};
  },
  components:{
    mynav,
  }
})
</script>

<style>
body {
  overflow: hidden;
}
* {
  touch-action: pan-y;
}
</style>
