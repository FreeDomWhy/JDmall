<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-img" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-name">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-img" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-name">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/message">
      <img slot="item-img" src="~assets/img/tabbar/京喜灰.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/京喜.svg" alt="">
      <div slot="item-name">京喜</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-img" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item-name">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-img" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-name">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/TabBar/TabBar";
import TabBarItem from "components/common/TabBar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
