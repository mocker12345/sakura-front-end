<template lang="html">
    <div class="container category-container">
        <div class="row">
            <menu-list
              class="col l3 hide-on-med-and-down menu"
              :categories="categories"
              v-on:category-changed="switchCategory"></menu-list>
            <!-- <article-list class="article-list col l9"></article-list> -->
            <div class="content col l9 s12">
                <div class="breadcrumb hide-on-med-and-down">
                    <a href="javascript:void(0);">全部文章</a>
                            <span>&gt;</span>
                    <a href="javascript:void(0);">{{ categoryName }}</a>
                </div>
                <ul class="article-list clearfix">
                    <!-- <div class="progress" >
                      <div class="indeterminate"></div>
                    </div> -->
                    <item v-for="article in articles" :article="article"></item>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import MenuList from './MenuList.vue'
import Item from './Item.vue'
export default {
    data() {
        return {
            categories: [],
            categoryId: 0,
            categoryName: '',
            // 以下为分页参数
            limit: 4,
            offset: 1,
            totalPage: 0,
            articles: []
        }
    },
    computed: {},
    created() {
        var that = this
        this.getCategories().then((data) => {
            that.categories = data.data
            that.categoryId = data.data[0].id
            that.categoryName = this.categories[0].name
            that.getArticlesByCategoryId(that.categoryId, that.limit, that.offset).then((data) => {
              debugger;
              that.totalPage = data.total_page
              that.articles = data.data
            })
        })
    },
    ready() {

    },
    attached() {},
    methods: {
        getCategories: () => {
            return api.category.get()
        },
        switchCategory: function(categoryId, categoryName) {
            this.categoryId = categoryId
            this.categoryName = categoryName
            // 切换category后，将this.offset置为 1
            this.offset = 1
            var that = this
            this.getArticlesByCategoryId(this.categoryId, this.limit, this.offset).then(function(data) {
              that.totalPage = data.total_page
              that.articles = data.data
            })
        },
        getArticlesByCategoryId: function(id, limit, offset) {
          return api.category(id).articles.get({
            limit: limit,
            offset: offset
          })
        }
    },
    components: {
        MenuList,
        Item
    }
};
</script>

<style lang="scss">
    @import "../assets/scss/common.scss";
    .category-container {
        margin-top: 20px;
    }
    .menu {
        background-color: #eee;
        margin: 0!important;
    }
    .article-list {
        margin-top: 0 !important;
    }
    .content {
        padding-left: 10px;
        .breadcrumb {
            padding-left: 10px;
            a {
                color: #616368;
                line-height: 33px;
                height: 100%;
                font-size: 18px;
                &:link {
                    color: #616368;
                }
            }
            span {
                height: 33px;
                display: inline-block;
                line-height: 33px;
                vertical-align: top;
                color: #616368;
            }
        }
    }
</style>
