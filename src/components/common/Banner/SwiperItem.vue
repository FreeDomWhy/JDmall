<template>
  <div class="swiper-img1">
    <slot><img src="https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/178898/31/16172/163480/6100cb79Ee3771b6a/48d9876497a1f51a.jpg!cr_1125x449_0_166!q70.jpg.dpg" alt=""></slot>
  </div>
</template>

<script>
export default {
  name: "SwiperItem"
}
</script>

<style scoped>
.swiper-img1{
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}
.swiper-img1 img{
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
</style>
