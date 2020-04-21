<template>
  <div id="app">
    <main-tabbar/>
    <router-view/>
  </div>
</template>


<script>

// 下方的导航栏组件
import MainTabbar from './components/MainTabbar.vue'

export default {
  name:"App",
  components: {
    MainTabbar
  }
}
</script>



<style>

</style>
