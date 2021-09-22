<template>
  <div>
    <swiper :banners=banner>
      <swiper-item v-for="(item,index) in banner" :key="index">
        <a>
          <img :src="item" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "../../../components/common/Banner/Swiper";
import SwiperItem from "../../../components/common/Banner/SwiperItem";

export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  data(){
    return {
      banner:['https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/178898/31/16172/163480/6100cb79Ee3771b6a/48d9876497a1f51a.jpg!cr_1125x449_0_166!q70.jpg.dpg',
              'https://imgcps.jd.com/ling4/10031273876291/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5fb1f71ba031dc0afaf817ca/75e195a7/cr_1125x449_0_166/s/q70.jpg',
              'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/198154/28/9184/161404/61479abeE9ebead07/ede5b21708d81dbd.jpg!cr_1125x449_0_166!q70.jpg.dpg',
              'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/83675/7/17474/133777/614453caE0b203140/94fcfacef0ae03d9.jpg!cr_1053x420_4_0!q70.jpg.dpg',
              'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/198379/3/8957/92802/61447d5dE7a4e52d3/f58a3387584562af.jpg!cr_1053x420_4_0!q70.jpg.dpg',
              'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/110277/1/13498/337800/61432f7bEdeb98591/966edb4850f59772.jpg!cr_1125x449_0_166!q70.jpg.dpg'
              ],
    }
  }
}
</script>

<style scoped>

</style>
