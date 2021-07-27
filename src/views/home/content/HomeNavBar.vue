<template>
  <div>
    <nav-bar class="home-nav-bar">
      <nav-bar-cate slot="nav-bar-left"></nav-bar-cate>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
import NavBarCate from "views/home/common/navbar/NavBarCate";

export default {
  name: "HomeNavBar",
  components:{
    NavBar,
    NavBarCate
  }
}
</script>

<style scoped>
.home-nav-bar{
  background-color: #e43130;
}
</style>
