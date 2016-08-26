<template lang="html">
    <div class="container">
        <div class="row">
            <menu-list class="col l3 hide-on-med-and-down menu"></menu-list>
            <!-- <article-list class="article-list col l9"></article-list> -->
        </div>
    </div>
</template>

<script>
import MenuList from './MenuList.vue'

export default {
    data() {
        return {

        };
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {
        MenuList
    }
};
</script>

<style lang="scss">
    @import "../assets/scss/common.scss";
    .menu {
        background-color: #eee;
    }
    .article-list {
        background: #ccc;
        height: 400px;

    }
</style>
