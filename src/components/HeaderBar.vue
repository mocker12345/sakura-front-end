<template lang="html">
    <nav class="header-bar">
        <div class="nav-wrapper">
            <a href="#/index" class="brand-logo"></a>
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
        $(".button-collapse").sideNav({
          menuWidth: 300, // Default is 240
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
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
        line-height: 80px !important;
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
                font-size: 30px;
                height: 100px;
                line-height: 100px;

            }
            .side-logo {
              height: 100px;
            }
        }
        .brand-logo {
            width: 229px;
            height: 88px;
            background-image: url(../assets/images/logo.png);
        }
        // line-height: 128px !important;
    }
</style>
