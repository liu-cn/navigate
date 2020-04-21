<template>
     <tabbar>
        <tabbar-item path="/home" ActiveColor="#FF5777">
        <img slot="item-icon" src="../assets/home.svg">
        <img slot="item-active-icon" src="../assets/home_active.svg">
        <div slot="item-text">首页</div>
        </tabbar-item>
        <tabbar-item path="/category" ActiveColor="#FF5777">
        <img slot="item-icon" src="../assets/category.svg">
        <img slot="item-active-icon" src="../assets/category_active.svg">
        <div slot="item-text">分类</div>
        </tabbar-item>
        <tabbar-item path="/shopcart" ActiveColor="#FF5777">
        <img slot="item-icon" src="../assets/shopcart.svg">
        <img slot="item-active-icon" src="../assets/shopcart_active.svg">
        <div slot="item-text">购物车</div>
        </tabbar-item>
        <tabbar-item path="/profile" ActiveColor="#FF5777">
        <img slot="item-icon" src="../assets/profile.svg">
        <img slot="item-active-icon" src="../assets/profile_active.svg">
        <div slot="item-text">我的</div>
        </tabbar-item>
      </tabbar>
</template>

<script>
import Tabbar from './Tabbar.vue'
import TabbarItem from './TabbaItem.vue'

export default {
  name:"MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>


</style>