<template>
  <div class="swiper">
<!--    图片-->
    <div class="swiper-img" @touchstart="touchstart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
<!--    小圆点-->
    <div class="swiper-dot">
      <slot name="indicator">
        <div class="dot-item" v-for="(item,count) in address" :class="{'dot-item-check':count+1===index}"></div>
      </slot>
    </div>

  </div>
</template>

<script>
import SwiperItem from "./SwiperItem";

export default {
  name: "Swiper",
  data(){
    return {
      slideCount: this.banners.length,  // 图片个数
      index:1,    //当前第几张图片
      scrolling: false, // 是否正在滚动
      totalWidth: 370, // swiper的宽度(该宽度需与swiper宽度一致)
      imgTime:'.5s ease',   //图片过渡时间
      address:this.banners,   //图片地址
    }
  },
  props:{
    banners:{
      type: Array,
      default: []
    },
    intervalTime:{
      type:Number,
      default:3000
    },
  },
  components:{
    SwiperItem
  },
  computed:{
  },
  methods:{

  //  克隆首尾图片
    imgClone(){
      let swiperImg = document.querySelector('.swiper-img');
      //克隆第一张图
      let firstImg = document.querySelector('.swiper-img').firstElementChild.cloneNode(true);
      swiperImg.appendChild(firstImg);
      //克隆最后一张图片
      let count = document.getElementsByClassName('swiper-img1').length;
      let endImg = document.getElementsByClassName('swiper-img1').item(count-2).cloneNode(true);
      swiperImg.insertBefore(endImg,swiperImg.childNodes[0])
    },

  //  定时器
    startTime(){
      this.playTime = window.setInterval(() =>{
        this.index++;
        this.scrollContent(this.imgTime,-this.index * this.totalWidth)
        this.imgLoop();
      },this.intervalTime)
    },

  //  滚动到正确的位置
    scrollContent(transitionStyle,Location){
      this.scrolling = true;
      let swiperImg = document.getElementsByClassName('swiper-img')[0];
      swiperImg.style.transition = `${transitionStyle}`;
      // swiperImg.style.left = Location + 'px';
      swiperImg.style.transform = `translate3d(${Location}px, 0, 0)`;
      this.scrolling = false;
    },

  //  图片循环
    imgLoop(){
      if(this.index == this.slideCount+1){
        this.index = 1;
        setTimeout(()=>{
          this.scrollContent("noon",-this.index * this.totalWidth)
        },500)
      }
    },

  //  定时轮播效果去除
    endTime(){
      window.clearInterval(this.playTime);
    },


  //  开始触摸
    touchstart(event){
      if(this.scrolling) return;
      event.preventDefault();
      this.endTime();//取消定时器
      this.startX = event.touches[0].screenX;
    },

  //  触摸拖动
    touchMove(event){
      this.endLength = event.touches[0].screenX;
      this.moveLength = this.startX-this.endLength;
      this.scrollContent("noon",(-this.index * 390)-this.moveLength)
    },
    touchEnd(event){
      let mLength = this.startX-this.endLength;
      if(Math.abs(mLength) > 100){
        if(this.startX>this.endLength){
          this.index++;
          this.scrollContent(this.imgTime,-this.index * this.totalWidth)
          this.imgLoop()
        }else if(this.startX<this.endLength){
          this.index--;
          this.scrollContent(this.imgTime,-this.index * this.totalWidth)
          this.imgLoop();
          if(this.index == 0){
            this.index = 5;
            setTimeout(()=>{
              this.scrollContent("noon",-this.index * this.totalWidth)
            },500)
          }
        }
      }else{
        this.scrollContent(this.imgTime,-this.index * this.totalWidth)
      }
       setTimeout(()=>{this.scrolling = false;this.startTime();},500)
    }
  },
  mounted:function (){
    this.scrollContent(this.imgTime,-this.index * this.totalWidth)
    this.imgClone();
    setTimeout(()=>{this.startTime();},500);
  }
}
</script>

<style scoped>
.swiper{
  position: relative;
  margin: 50px 15px 0 15px;
  width: 370px;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
}
.swiper-img{
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0;
}

/*小圆点样式*/
.swiper-dot {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8%;
}
.dot-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}
.dot-item-check {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #a57e7e;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}

</style>
