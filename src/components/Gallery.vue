<template lang="html">
    <div class="box grey lighten-5">
      <div class="swiper-container container">
        <div class="swiper-wrapper">
            <div class="swiper-slide slide-1">
                <img src="../assets/images/office.jpg" alt="" />
                <div class="tip">
                    <h3>这里是简介。。。</h3>
                </div>
            </div>
            <div class="swiper-slide slide-2">
                <img src="../assets/images/office.jpg" alt="" />
                <div class="tip">
                    <h3>这里是简介。。。</h3>
                </div>
            </div>
            <div class="swiper-slide slide-3">
                <img src="../assets/images/office.jpg" alt="" />
                <div class="tip">
                    <h3>这里是简介。。。</h3>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev swiper-button-black"></div>
        <div class="swiper-button-next swiper-button-black"></div>

        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
    </div>
</template>

<script>
export default {
  name:'Gallery',
  data() {
    return {
    };
  },
  computed: {},
  ready() {
    this.$nextTick(()=>{
      var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop:true,
        effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        autoplay:3000,
        autoplayDisableOnInteraction : false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true,

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        coverflow: {
            rotate: 30,
            stretch: 5,
            depth: 60,
            modifier: 2,
            slideShadows : true
        }

        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
      })
    })
  },
  attached() {},
  methods: {},
  components: {
  }
};
</script>

<style lang="scss">
@import "../../node_modules/swiper/dist/css/swiper.min.css";
  .swiper-container {
        width: 80%;
        height: 400px;
        .swiper-slide {
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            .tip {
                width: 100%;
                height: 20%;
                background: rgba(66, 66, 66, 0.3);
                bottom: 0;
                right: 0;
                left: 0;
                position: absolute;
                h3 {
                    font-size: 14px;
                    padding: 0 10px;
                    color: #fafafa;
                    line-height: 100%;
                    margin: 10px 0;
                }
            }
        }

    }
  div.box {
    padding:20px;
  }
</style>
>>>>>>> 26be839c9cfc883787bbc36cc463fcaedde5ef1c
