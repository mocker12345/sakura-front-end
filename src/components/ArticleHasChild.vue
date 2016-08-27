<template lang="html">
    <div class="container">
      <div class="row">
        <div class="col s12 l12 white">
          <h5 class="article-title center-align">这些独家创意 会是你平淡日子里的惊喜</h5>
          <div class="cover-container center-align grey lighten-4">
            <img class="responsive-img" src="http://content.image.alimmdn.com/cms/sites/default/files/20160218/goodthing/l_0.jpg@768w_1l" />
          </div>
          <div class="row">
            <div class="col s12 l12">
              <p class="summery">
                日复一日，年复一年，日子还是这么过下来。转身回眸，
                你是否觉得未免有些平淡？平淡的日子没什么不好，只是缺少创意的平淡，实在乏味。现在有调给大家推荐独家的生活小创意，希望带给你及身边人不一样的惊喜！
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <item></item>
        <item></item>
        <item></item>
        <item></item>
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
