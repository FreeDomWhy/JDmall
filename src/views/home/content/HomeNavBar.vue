<template>
  <div>
    <nav-bar class="home-nav-bar">
      <nav-bar-cate slot="nav-bar-left"></nav-bar-cate>
      <nav-bar-search slot="nav-bar-center">
        <img src="~assets/img/navbar/JD-logo.svg" alt="">
        <el-input slot="nav-bar-search-input" size="mini" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      </nav-bar-search>
      <nav-bar-login slot="nav-bar-right"></nav-bar-login>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/NavBar/NavBar";
import NavBarLogin from "../common/navbar/NavBarLogin";
import NavBarCate from "../common/navbar/NavBarCate";
import NavBarSearch from "../../../components/common/NavBar/NavBarSearch";
export default {
  name: "HomeNavBar",
  components:{
    NavBar,
    NavBarCate,
    NavBarLogin,
    NavBarSearch
  }
}
</script>

<style scoped>
.home-nav-bar{
  background-color: #e43130;
}
.nav-bar-search{
  background-color: white;
}
>>>.nav-bar-search-input input{
  background-color: white;
  border: 1px solid white;
}
</style>
