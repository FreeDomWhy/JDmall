<template>
  <div class="nav-bar">
    <div class="nav-bar-left"><slot name="nav-bar-left"></slot></div>
    <div class="nav-bar-center"><slot name="nav-bar-center"></slot></div>
    <div class="nav-bar-right"><slot name="nav-bar-right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components:{
  }
}
</script>

<style scoped>
.nav-bar{
  position: fixed;
  display: flex;
  height: 44px;
  right: 0;
  left: 0;
  top: 0;
}
.nav-bar-center{
  display: flex;
  flex: 8.5;
}
.nav-bar-right{
  display: flex;
  flex: 1;
}
.nav-bar-left{
  display: flex;
  flex: 1;
}
</style>
