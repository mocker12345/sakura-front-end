<template lang="html">
    <div class="container">
      <div class="row">
        <div class="col s12 l12 white">
          <h5 class="article-title center-align" v-text="articleData.title"></h5>
          <div class="cover-container center-align grey lighten-4">
            <img class="responsive-img" :src="articleData.cover_url" />
          </div>
          <div class="row">
            <div class="col s12 l12">
              <p class="summery" v-text="articleData.summary"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <item v-for="item in articleData.children" :article="item"></item>
      </div>
    </div>
</template>

<script>
import Item from './Item'
export default {
  name:'ArticleSigle',
  data() {
    return {
    };
  },
  props: {
      articleData: Object
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    Item
  }
};
</script>

<style lang="scss">
.container {
  margin-top: 20px;

  .article-title {
    padding: 20px;
    font-weight: bold;
    letter-spacing: 2px
  }
  .summery {
    padding: 10px;
  }
}


</style>
