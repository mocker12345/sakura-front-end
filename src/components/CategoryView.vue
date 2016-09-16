<template lang="html">
    <div class="container category-container">
        <div class="row">
            <menu-list class="col l3 hide-on-med-and-down menu" :categories="categories" v-on:category-changed="switchCategory"></menu-list>
            <!-- <article-list class="article-list col l9"></article-list> -->
            <div class="content col l9 s12">
                <div class="breadcrumb hide-on-med-and-down">
                    <a href="javascript:void(0);">全部文章</a>
                            <span>&gt;</span>
                    <a href="javascript:void(0);">{{ categoryName }}</a>
                </div>
                <ul class="article-list clearfix">
                    <!-- <item v-for=""></item> -->
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
            categoryName: ''
        }
    },
    computed: {},
    created() {
        var that = this
        this.getCategories().then((data) => {
            // this.categories = data.data
            // this.categoryId = data.data[0].id
            this.categories = [
                {
                  "id": 4,
                  "name": "nd"
                },
                {
                  "id": 5,
                  "name": "nd1"
                },
                {
                  "id": 6,
                  "name": "nd2"
                },
                {
                  "id": 1,
                  "name": "rancongjie"
                },
                {
                  "id": 2,
                  "name": "zhongshan"
                }
            ];
            this.categoryId = this.categories[0].id
            this.categoryName = this.categories[0].name

        })
    },
    ready() {
    //   console.log(api);
    },
    attached() {},
    methods: {
        getCategories: () => {
            return api.category.get()
        },
        switchCategory: function(categoryId, categoryName) {
            this.categoryId = categoryId
            this.categoryName = categoryName
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
