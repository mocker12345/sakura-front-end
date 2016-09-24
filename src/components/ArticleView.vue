<template lang="html">
  <div class="container">
    <article-sigle :article-data="articleData" v-if="isSigleArticle"></article-sigle>
    <article-has-child :article-data="articleData" v-if="!isSigleArticle"></article-has-child>
  </div>
</template>

<script>
import ArticleSigle from './ArticleSigle'
import ArticleHasChild from './ArticleHasChild'
export default {
  data() {
    return {
        articleData: {},
        isSigleArticle: true
    };
  },
  route: {
      data({ to }) {
          var articleId = to.params.id
          var that = this
          return this.getArticleData(articleId).then((data) => {
              debugger
              return {
                  articleData: data,
                  isSigleArticle: !data.children.length
              }
          })
      }
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
      getArticleData: (articleId) => {
          return api.article(articleId).get()
      }
  },
  components: {
    ArticleSigle,
    ArticleHasChild
  }
};
</script>

<style lang="scss">
</style>
