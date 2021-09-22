<template>
  <div>
    <home-nav-bar></home-nav-bar>
    <home-swiper></home-swiper>
  </div>

</template>

<script>
import HomeNavBar from "views/home/content/HomeNavBar";
import HomeSwiper from "./content/HomeSwiper";

export default {
  name: "Home",
  components:{
    HomeNavBar,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>
