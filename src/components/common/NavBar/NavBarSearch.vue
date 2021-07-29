<template>
  <div class="nav-bar-search">
    <div class="nav-bar-search">
      <slot name="nav-bar-search-img">
        <img src="~assets/img/navbar/JD-logo.svg" alt="">
      </slot>
      <div class="nav-bar-search-input">
        <slot name="nav-bar-search-input">
          <el-input size="mini" placeholder="请使用mini的element-input" prefix-icon="el-icon-search"></el-input>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarSearch"
}
</script>

<style scoped>
.nav-bar-search{
  display: flex;
  margin: auto;
  width: 94%;
  height: 30px;
  border-radius: 25px;
}
.nav-bar-search img{
  margin: auto;
  flex: 1.5;
  width: 60%;
  height: 60%;
  border-right: 1px solid #e2d5d5;
}
.nav-bar-search-input{
  display: flex;
  flex: 9;
  margin: auto;
}
>>>.nav-bar-search-input input{
  width: 98%;
}
</style>
