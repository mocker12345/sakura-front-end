<template lang="html">
    <div class="row sigle-container">
      <div class="col s12 l8 white">
        <h5 class="article-title center-align">用扑克搭一张桌子</h5>
        <div class="cover-container center-align grey lighten-4">
          <img class="responsive-img" src="http://content.image.alimmdn.com/cms/sites/default/files/20160218/goodthing/l_0.jpg@768w_1l" />
        </div>
        <div class="row author-area center-align">
          <div class="col s6 l6">
            <span>冉聪杰</span>
          </div>
          <div class="col s6 l6">
            <span class="good"><i class="material-icons">thumb_up</i>32</span>
          </div>
        </div>
        <div class="article">

        </div>
      </div>
      <div class="col l4 hide-on-med-and-down">
        <div class="">
          <h6 class="center-align">您可以通过以下方式购买</h6>
          <div class="card grey lighten-4">
             <div class="card-content">
               <span class="card-title red-text lighten-1">Card Title</span>
                 <p>I am a very simple card. I am good at containing small bits of information.
                 I am convenient because I require little markup to use effectively.</p>
             </div>
             <div class="card-action right-align">
               <span class="f-l">￥17</span>
               <a href="#">购买</a>
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
  computed: {},
  ready() {},
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
  .card-content {
      padding: 0!important;
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
