<template lang="html">
    <div class="row sigle-container">
      <div class="col s12 l8 white">
        <h5 class="article-title center-align" v-text="articleData.title"></h5>
        <div class="cover-container center-align grey lighten-4">
          <img class="responsive-img" :src="articleData.cover_url" />
        </div>

        <div class="article" v-html="articleData.content"></div>
      </div>
      <div class="col l4 hide-on-med-and-down">
        <div class="">
          <h6 class="center-align buy-title">您可以通过以下方式购买:</h6>
          <div class="card grey lighten-4 site-card" v-for="item in articleData.price">
             <div class="card-content">
               <span class="card-title red-text lighten-1" v-text="item.site_name"></span>
             </div>
             <div class="card-action right-align">
               <span class="f-l">￥<span v-text="item.price"></span></span>
               <a href="{{'http://'+item.site_url}}" target="_blank" class="buy-btn">购买</a>
             </div>
           </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'ArticleSigle',
  data() {
    return {

    };
  },
  props: [
      'articleData'
  ],
  computed: {},
  ready() {

  },
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="scss">
.sigle-container {
  margin-top: 20px;
  .article-title {
    padding: 20px;
    font-weight: bold;
    letter-spacing: 2px
  }
  .article img {
    width: 100%
  }
  .buy-title {
      margin-bottom: 20px;
      font-size: 18px;
  }
  .card {
      border: 1px solid rgba(160,160,160,0.2);
  }
  .site-card {
      padding: 0 15px;
  }
  .card-content {
      padding: 0!important;
    }
  .card-action {
      padding: 20px 0;
      .buy-btn {
          padding: 10px 15px;
          border-radius: 10%;
          color: #424242 !important;
          &:hover {
              background: #424242;
              color: #fff !important;
          }
      }
  }
  .author-area {
    padding: 20px;
    .material-icons {
      color: #e0e0e0;
    }
    .good {
      vertical-align: top;
    }
  }
}
</style>
