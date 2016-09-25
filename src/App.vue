<template>
  <div id="wrapper">
    <!-- 头部导航栏 -->
    <header-bar></header-bar>
    <router-view
      class="view"
      transition
      transition-mode="out-in">
    </router-view>

    <footer-bar></footer-bar>
    <go-top></go-top>
  </div>
</template>
<script>
    import HeaderBar from './components/HeaderBar.vue'
    import FooterBar from './components/FooterBar.vue'
    import GoTop from './components/GoTop.vue'
    export default {
    components: {
        HeaderBar,
        FooterBar,
        GoTop
    }
}
</script>
<style lang="scss">
    @import "./assets/scss/variables.scss";
    html {
        font-family: "华文细黑";
        // font-size: 16px;
    }
    @media only screen and (min-width: 0) and (max-width:799px){
        html {
            font-size: 24px;
        }
    }
    @media screen and (min-width:800px) and (max-width:959px) {
        html {
            font-size: 20px;
        }
    }
    @media screen and (min-width:960px) and (max-width:1079px) {
        html {
            font-size: 16px;
        }
    }
    @media only screen and (min-width:1200px) {
        html {
            font-size: 10px;
        }
    }
    // @media screen and (min-width:480px) and (max-width:639px) {
    //     html {
    //         font-size: 20px;
    //     }
    // }
    // @media screen and (min-width:640px) and (max-width:719px) {
    //     html {
    //         font-size: 20px;
    //     }
    // }
    // @media screen and (min-width:720px) and (max-width:749px) {
    //     html {
    //         font-size: 22.5px;
    //     }
    // }
    // @media screen and (min-width:750px) and (max-width:799px) {
    //     html {
    //         font-size: 23.5px;
    //     }
    // }
    // @media screen and (min-width:800px) and (max-width:959px) {
    //     html {
    //         font-size: 25px
    //     }
    // }
    // @media screen and (min-width:960px) and (max-width:1079px) {
    //     html {
    //         font-size: 30px
    //     }
    // }
    // @media screen and (min-width:1080px) {
    //     html {
    //         font-size: 32px
    //     }
    // }
    body {
        background-color: $bgColor;
    }
</style>
