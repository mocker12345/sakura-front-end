<template>
    <div class="index-view" >
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
            Pagination
        },
        ready () {

        },
        created () {
            var that = this
            this.getArticles(this.limit, this.offset).then((data) => {
                that.articles = data.data
                that.totalPage = data.total_page
            })
        },

        watch: {
            'offset': function(newOffset, oldOffset) {
                var self = this
                this.getArticles(this.limit, newOffset).then(function(data) {
                    self.articles = data.data
                    self.totalPage = data.total_page
                })
            },
        },
        methods: {
            getArticles: (limit, offset) => {
                return api.article.get({
                    limit: limit,
                    offset: offset
                })
            }
        },
        attached () {

        },

        data () {
            return {
                limit: 4,
                offset: 1,
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
