<template>
  <div>
    <nav-bar>
      <nav-bar-return slot="nav-bar-left"></nav-bar-return>
      <nav-bar-title slot="nav-bar-center"><p slot="NavBarTitle">京喜</p></nav-bar-title>
      <nav-bar-admin slot="nav-bar-right"></nav-bar-admin>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/NavBar/NavBar";
import NavBarTitle from "../../../components/common/NavBar/NavBarTitle";
import NavBarReturn from "../../../components/common/NavBar/NavBarReturn";
import NavBarAdmin from "../../../components/common/NavBar/NavBarAdmin";

export default {
  name: "MessageNavBar",
  components:{
    NavBarAdmin,
    NavBarReturn,
    NavBar,
    NavBarTitle
  }
}
</script>

<style scoped>
.nav-bar{
  border-bottom: 1px solid #f2f2f2;
}
</style>
