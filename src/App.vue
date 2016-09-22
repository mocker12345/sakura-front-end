<template>
  <div id="wrapper" style="height: 10000px">
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
    }
    body {
        background-color: $bgColor;
    }
</style>
