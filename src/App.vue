<template>
  <div id="wrapper">
    <!-- 头部导航栏 -->
    <header-bar></header-bar>

    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>

    <footer-bar></footer-bar>

  </div>
</template>
<script>
    import HeaderBar from './components/HeaderBar.vue'
    import FooterBar from './components/FooterBar.vue'

    export default {
    components: {
        HeaderBar,
        FooterBar
    }
}
</script>
<style lang="sass">
    @import "./assets/scss/variables.scss";
    body {
        background-color: $bgColor;
    }
</style>
