<template>
    <div class="index-view">
        <!-- 轮播幻灯片 -->
        <gallery></gallery>
        <!-- 商品list -->
        <item-collection></item-collection>
        <!-- 分页 -->
        <pagination></pagination>
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
        }
    }
</script>
<style lang="sass">
    @import "../assets/scss/variables.scss";
    body {
        background-color: $bgColor;
    }
</style>
