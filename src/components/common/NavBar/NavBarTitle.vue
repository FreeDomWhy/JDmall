<template>
  <div class="nav-bar-title">
    <slot name="NavBarTitle"><p>插槽-请使用p标签</p></slot>
  </div>
</template>

<script>
export default {
  name: "NavBarTitle"
}
</script>

<style scoped>
.nav-bar-title{
  display: flex;
  flex: 1;
}
.nav-bar-title p{
  margin: auto;
  font-size: 16px;
}
</style>
