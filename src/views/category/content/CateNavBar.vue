<template>
  <nav-bar>
    <nav-bar-return slot="nav-bar-left"></nav-bar-return>
    <nav-bar-search slot="nav-bar-center">
      <img slot="nav-bar-search-img" src="~assets/img/navbar/搜索.svg" alt="">
      <el-input slot="nav-bar-search-input" size="mini" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
    </nav-bar-search>
    <nav-bar-admin slot="nav-bar-right"></nav-bar-admin>
  </nav-bar>
</template>

<script>
import NavBar from "../../../components/common/NavBar/NavBar";
import NavBarReturn from "../../../components/common/NavBar/NavBarReturn";
import NavBarAdmin from "../../../components/common/NavBar/NavBarAdmin";
import NavBarSearch from "../../../components/common/NavBar/NavBarSearch";

export default {
  name: "CateNavBar",
  components:{
    NavBar,
    NavBarReturn,
    NavBarAdmin,
    NavBarSearch
  }
}
</script>

<style scoped>
.nav-bar-search{
  background-color: #f2f2f2;
}
>>>.nav-bar-search-input input{
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
}
</style>
