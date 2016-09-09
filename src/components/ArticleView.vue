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
        //   debugger;
          var articleId = to.params.id
          var data = this.getArticleData(articleId)

          return {
              articleData: data,
              isSigleArticle: !data.children.length
          }
      }
  },
  computed: {},
  ready() {
    //   getArticleData
  },
  attached() {},
  methods: {
      getArticleData: (articleId) => {
          return {
              "category": 0,
              "children": [
                {
                  "category": 0,
                  "cover_url": "http://content.image.alimmdn.com/cms/sites/default/files/20141229/goodthing/00.jpg",
                  "id": 1,
                  "summary": "简介啊~~~~~~~~",
                  "title": "test1"
                }
              ],
              "content": "测试啊~~~~~~~~~~~~~~~~~~~~~~~~~~",
              "cover_url": "http://content.image.alimmdn.com/cms/sites/default/files/20141229/goodthing/00.jpg",
              "create_time": "2016-09-03T17:25:14+00:00",
              "good": 100,
              "id": 11,
              "price": [
                {
                  "id": 5,
                  "price": "110.00",
                  "site_name": "淘宝",
                  "site_url": "http://taobao.com"
                },
                {
                  "id": 6,
                  "price": "111.00",
                  "site_name": "京东",
                  "site_url": "http://jd.com"
                }
              ],
              "summary": "简介啊~~~~~~~~",
              "title": "test6"
          }
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
