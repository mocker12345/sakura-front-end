<template lang="html">
    <div class="box grey lighten-5">
      <div class="swiper-container swiper-container-pc container hide-on-med-and-down">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="gallery in galleryData">
                <a :href="'#/article/'+gallery.id"></a>
                <img :src="gallery.cover_url" alt="" />
                <div class="tip">
                    <h3 v-text="gallery.title"></h3>
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

      <div class="swiper-container swiper-container-mobile hide-on-large-only">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="gallery in galleryData">
                <a :href="'#/article/'+gallery.id"></a>
                <img :src="gallery.cover_url" alt="" />
                <div class="tip">
                    <h3 v-text="gallery.title"></h3>
                </div>
            </div>
        </div>
        <div class="swiper-pagination-mobile"></div>
    </div>
    </div>
</template>

<script>
export default {
  name:'Gallery',
  data() {
    return {
        galleryData: []
    };
  },
  created() {
      var that = this
      this.getGalleryData().then((data) => {
          that.galleryData = data.data

          that.$nextTick(()=>{
            var swiperPc = new Swiper('.swiper-container-pc', {
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
            var swiperMobile = new Swiper('.swiper-container-mobile', {
                direction: 'horizontal',
                loop:true,
                // effect : 'coverflow',
                slidesPerView: 1,
                centeredSlides: true,
                autoplay:3000,
                // autoplayDisableOnInteraction : false,
                // pagination: '.swiper-pagination-mobile'
            })
          })

      })


  },
  computed: {},
  ready() {

  },
  attached() {},
  methods: {
      getGalleryData: () => {
          return api.article.get({
              limit: 3,
              offset: 1,
              order: 'good'
          })
      }
  },
  components: {
  }
};
</script>

<style lang="scss">
@import "../../node_modules/swiper/dist/css/swiper.min.css";

  .swiper-container {
        width: 100%;
        height: 400px;
        .swiper-slide {
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            a {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                // display: block;
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
                    font-size: 1.5rem;
                    padding: 10px 10px;
                    color: #fafafa;
                    line-height: 100%;
                    margin: 10px 0;
                }
            }
        }

    }
    .swiper-container-mobile {
        height: 200px;
    }
  div.box {
    padding:20px;
  }
</style>
