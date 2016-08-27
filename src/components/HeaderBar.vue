<template lang="html">
    <nav class="header-bar">
        <div class="nav-wrapper">
            <a href="#/index" class="brand-logo">Logo</a>
            <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#/index">首页</a></li>
                <li><a href="#/zdm">值得买</a></li>
                <li><a href="#/category">分类</a></li>
            </ul>
            <ul class="side-nav" id="mobile-demo" v-on:click="hideSideNav">
                <li><a href="#/index" class="side-logo">Logo</a></li>
                <li><a href="#/index">首页</a></li>
                <li><a href="#/zdm">值得买</a></li>
                <li><a href="#/category">分类</a></li>
            </ul>
      </div>
  </nav>
</template>

<script>
export default {
    name: 'HeaderBar',

    data() {
        return {
            isStretch: true,
        };
    },
    computed: {},
    ready() {
        $(".button-collapse").sideNav();
    },
    attached() {},
    methods: {
        hideSideNav: function() {
            $('.button-collapse').sideNav('hide');
        }
    },
    created() {

    },
    components: {}
};
</script>

<style lang="scss">
    @import "../assets/scss/variables.scss";
    .header-bar {
        height: auto !important;
        line-height: auto !important;
        background-color: $themeColor !important;
        padding: 25px;
        .nav-wrapper {
            overflow: hidden;
        }
        .side-logo {
            text-align: center;
            height: 80px;
            background: #424242;
            line-height: 80px;
            // color: #fff;
            background-color: $bgColor;
            font-size: 30px;
            border-bottom: 1px solid #ddd;
            &:hover {
                background: $bgColor;
            }
        }
        .side-nav {
            background-color: $bgColor;
            a {
                text-align: center;
                font-size: 20px;
                // height: 60px;
                // line-height: 60px;

            }
        }
        // line-height: 128px !important;
    }
</style>
>>>>>>> 26be839c9cfc883787bbc36cc463fcaedde5ef1c
