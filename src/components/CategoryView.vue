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
                  <div class="loader" v-if="isLoading">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>

                    <div class="covers">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                    <item v-for="article in articles" :article="article" class="item"></item>
                </ul>
                <!-- 分页 -->

            </div>
            <pagination :limit="limit" :offset.sync="offset" :total-page="totalPage" v-if="articles.length !== 0"></pagination>
        </div>
        <a class="waves-effect waves-light btn modal-trigger modal-btn grey darken-3 hide-on-large-only" @click="openModal" >选择分类</a>
        <!-- Modal Structure -->
        <div id="modal1" class="modal bottom-sheet">
            <div class="modal-content">
                <h4>请选择分类</h4>
                <ul class="collection">
                    <li class="collection-item"
                        v-for="cate in categories"
                        v-text="cate.name"
                        @click="switchCategory(cate.id, cate.name), activeItem($index)"></li>
                    <li class="collection-item"
                        @click="switchCategory(0, '其他'), activeItem(categories.length)">其他</li>
                    <li class="collection-item active"
                        @click="switchCategory(-1, '全部'), activeItem(categories.length+1)">全部</li>
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
import Pagination from './Pagination.vue'
export default {
    data() {
        return {
            categories: [],
            categoryId: null,
            categoryName: '',
            // 以下为分页参数
            limit: 8,
            offset: 1,
            totalPage: 0,
            articles: [],
            timer: null,
            isLoading:true
        }
    },
    computed: {},
    created() {
        var that = this
        this.getCategories().then((data) => {
            // 默认分类显示全部
            that.categories = data.data
            that.categoryId = -1
            that.categoryName = '全部'
            this.isLoading = true;
            that.getArticlesByCategoryId(that.categoryId, that.limit, that.offset).then((data) => {
              this.isLoading = false;
              that.totalPage = data.total_page
              that.articles = data.data
            })
        })
    },
    watch: {
        'categoryId': function(newVal, oldVal) {
            if (this.grid && oldVal !== null) {
                this.grid.masonry('destroy')
                var self = this
                self.timer = setTimeout(function() {
                    self.grid.masonry({
                        itemSelector: '.item'
                    })
                }, 200)
            }
        },
        'offset': function(newOffset, oldOffset) {
            var self = this
            this.isLoading = true;
            this.articles =[]
            this.getArticlesByCategoryId(this.categoryId, this.limit, newOffset).then(function(data) {
                this.isLoading = false;
                self.articles = data.data
                self.totalPage = data.total_page
            })
        },
        // 'isLoading':function(newVal,oldVal) {
        //   if (this.grid && !newVal){
        //     this.grid.masonry('destroy')
        //     var self = this
        //     self.timer = setTimeout(function() {
        //         self.grid.masonry({
        //             itemSelector: '.item'
        //         })
        //     }, 800)
        //   }
        // }
    },
    ready() {
        var self = this
        $('.article-list').imagesLoaded(() => {
            clearInterval(self.timer)
            self.timer = setTimeout(function() {
                self.grid = $('.article-list').masonry({
                    itemSelector: '.item'
                })
            },800)
        })
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
            this.isLoading = true;
            this.articles =[]
            this.getArticlesByCategoryId(this.categoryId, this.limit, this.offset).then(function(data) {
              that.isLoading = false;
              that.totalPage = data.total_page
              that.articles = data.data
            })
        },
        getArticlesByCategoryId: function(id, limit, offset) {
          if (id == -1) {
              return api.article.get({
                limit: limit,
                offset: offset
              })
          }
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
        Item,
        Pagination
    },
    beforeDestroy () {
        clearInterval(this.timer)
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
        font-size: 1.5rem;
        // height: 70px;
        // line-height: 70px;
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
                font-size: 1.25rem;
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
        .preloader-wrapper.active {
          background-color: #ccc
        }
        .modal-content {
            .collection {
                .collection-item {
                    font-size: 1.25rem;
                    // padding: 20px 40px;
                    text-align: center;
                    cursor: pointer;
                    // line-height: 3rem;
                }
                .collection-item.active {
                    color: #fff;
                    background: #424242;
                }
            }
            h4 {
                text-align: center;
                font-size: 1.5rem;
            }
            padding: 25px;
        }
        .modal-footer {
            height: auto;
        }
    }
    .loader {
  position: relative;
  margin: auto;
  width: 350px;
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 250%;
  background: linear-gradient(180deg, #222 0, #444 100%);
  box-shadow: inset 0 5px 20px black;
  text-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  span {
    float: left;
    height: 100px;
    line-height: 120px;
    width: 50px;
  }
}


.loader > span {
  border-left: 1px solid #444;
  border-right: 1px solid #222;
}

.covers {
  position: absolute;
  height: 100%;
  width: 100%;
}

.covers span {
  background: linear-gradient(180deg, white 0, #ddd 100%);
  animation: up 2s infinite;
}

@keyframes up {
  0%   { margin-bottom: 0; }
  16%  { margin-bottom: 100%; height: 20px; }
  50% { margin-bottom: 0; }
  100% { margin-bottom: 0; }
}

.covers span:nth-child(2) { animation-delay: .142857s; }
.covers span:nth-child(3) { animation-delay: .285714s; }
.covers span:nth-child(4) { animation-delay: .428571s; }
.covers span:nth-child(5) { animation-delay: .571428s; }
.covers span:nth-child(6) { animation-delay: .714285s; }
.covers span:nth-child(7) { animation-delay: .857142s; }
</style>
