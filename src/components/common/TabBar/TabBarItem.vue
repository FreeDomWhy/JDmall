<template>
<div class="tab-bar-item" @click="isActive">
<!--  不活跃时图片-->
  <div v-show="!isShow" ><slot name="item-img"></slot></div>

  <!--  活跃时图片-->
  <div v-show="isShow"><slot name="item-active"></slot></div>

<!--  导航栏的名称-->
  <div :class="{iscolor:isShow}"><slot name="item-name"></slot></div>

</div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:{
      type:String,
      required:true
    }
  },
  data(){
    return{
    }
  },
  computed:{
    isShow(){
      return this.$route.path.indexOf(this.path) != -1
    }
  },
  methods:{
    isActive(){
      this.$router.push(this.path)
    }
  },
}
</script>

<style scoped>
.tab-bar-item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  /*垂直对齐*/
  vertical-align: middle;
}
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 10px;
}
.iscolor{
  color: #e43130;
}
</style>
