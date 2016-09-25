<template lang="html">
    <div class="container category-container">
        <div class="row">
            {{ isMobile }}
            <menu-list
              class="col l3 hide-on-med-and-down menu"
              id="menu-list"
              :categories="categories"
              v-on:category-changed="switchCategory"></menu-list>
            <div class="content col l9 s12">
                <div class="breadcrumb hide-on-med-and-down">
                    <a href="javascript:void(0);">全部文章</a>
                            <span>&gt;</span>
                    <a href="javascript:void(0);">{{ categoryName }}</a>
                </div>
                <ul class="article-list clearfix">
                    <item v-for="article in articles" :article="article"></item>
                </ul>
            </div>
        </div>
        <a class="waves-effect waves-light btn modal-trigger modal-btn grey darken-3 hide-on-large-only" @click="openModal" >选择分类</a>
        <!-- Modal Structure -->
        <div id="modal1" class="modal bottom-sheet">
            <div class="modal-content">
                <h4>请选择分类</h4>
                <ul class="collection">
                    <li class="collection-item"
                        v-for="cate in categories"
                        :class="{'active': $index==0}"
                        v-text="cate.name"
                        @click="switchCategory(cate.id, cate.name), activeItem($index)"></li>
                    <li class="collection-item"
                        @click="switchCategory(0, '其他'), activeItem(-1)">其他</li>
                </ul>
            </div>
            <div class="modal-footer">

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
            $('#modal1').closeModal()
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
        },
        openModal: () => {
            $('#modal1').openModal()
        },
        activeItem: (index) => {
            $('.modal .collection-item').removeClass('active')
            index = (index == -1) ? ($('.modal .collection-item').length-1):index
            $('.modal .collection-item').eq(index).addClass('active');
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
        margin: 0 !important;
    }
    .article-list {
        margin-top: 0 !important;
    }
    .modal-btn {
        position: fixed;
        top: 60%;
        right: 5%;
        font-size: 2rem;
        height: 70px;
        line-height: 70px;
        border-radius: 5px;

    }
    .modal-btn.grey.darken-3 {
        background-color: rgba(66,66,66,.6) !important;
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
    .modal {
        width: 80% !important;
        max-height: 100% !important;
        margin: auto !important;
        border-radius: 10px 10px 0 0 !important;
        .modal-content {
            .collection {
                .collection-item {
                    font-size: 1.75rem;
                    padding: 20px 40px;
                    text-align: center;
                    cursor: pointer;
                    line-height: 3rem;
                }
                .collection-item.active {
                    color: #fff;
                    background: #424242;
                }
            }
            h4 {
                text-align: center;
                font-size: 2.25rem;
            }
            padding: 25px;
        }
        .modal-footer {
            height: auto;
        }
    }
</style>
