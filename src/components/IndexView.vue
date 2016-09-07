<template>
    <div class="index-view">
        <!-- 轮播幻灯片 -->
        <gallery></gallery>
        <!-- 商品list -->
        <item-collection :articles="articles"></item-collection>
        <!-- 分页 -->
        <pagination :limit="limit" :offset.sync="offset" :total-page="totalPage"></pagination>
    </div>
</template>
<script>
    import Gallery from './Gallery.vue'
    import ItemCollection from './ItemCollection.vue'
    import Pagination from './Pagination.vue'
    export default {
        components: {
            ItemCollection,
            Gallery,
            Pagination,
        },
        ready () {

        },
        created () {
            var data = this.getArticles(this.limit, this.offset);
            this.articles = data.data
            this.totalPage = data.total_page

            // getArticles(this.limit, this.offset).then(function(data){
            //     this.articles = data.data
            //     this.totalPage = data.total_page
            // }, function() {
            //     console.log('加载失败')
            // })
        },

        watch: {
            'offset': function(newOffset, oldOffset) {
                alert(newOffset)
                var data = this.getArticles(this.limit, newOffset)
                this.articles = data.data
                this.totalPage = data.total_page
            },
        },
        methods: {
            getArticles: (limit, offset) => {
                // return api.article.get({
                //     limit: limit,
                //     offset: offset
                // })
                return {
                  data: [
                    {
                      category: 0,
                      children: [],
                      content: "测试啊~~~~~~~~~~~~~~~~~~~~~~~~~~",
                      cover_url: "http://nd.com.cn!!!",
                      create_time: "2016-09-03T15:38:51+00:00",
                      good: 0,
                      id: 1,
                      price: [],
                      summary: "简介啊~~~~~~~~",
                      title: "test1"
                    },
                    {
                      category: 0,
                      children: [],
                      content: "测试啊~~~~~~~~~~~~~~~~~~~~~~~~~~",
                      cover_url: "http://nd.com.cn",
                      create_time: "2016-09-03T15:39:36+00:00",
                      good: 0,
                      id: 3,
                      price: [],
                      summary: "简介啊~~~~~~~~",
                      title: "test2"
                    },
                  ],
                  offset: 0,
                  total_page: 45
                }
            }
        },
        attached () {

        },

        data () {
            return {
                limit: 12,
                offset: 13,
                totalPage: 0,
                articles: []
            }
        },

        route: {

        },

        computed: {

        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/variables.scss";
    body {
        background-color: $bgColor;
    }
</style>
