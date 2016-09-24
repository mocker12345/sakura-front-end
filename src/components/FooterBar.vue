<template lang="html">
  <footer class="page-footer grey darken-3 z-depth-1">
    <div class="">
      <div class="row">
        <div class="col l4 s12 offset-l2">
          <h5 class="white-text">关爱程序员，淘到好东西</h5>
          <p class="grey-text text-lighten-6">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div class="col l3 offset-l2 s12">
          <!-- <h5 class="white-text">关于我们</h5>
          <ul>
            <li><a class="grey-text text-lighten-6" href="#!">关于网龙</a></li>
            <li><i class="mdi-content-add"></i><a class="grey-text text-lighten-6" href="#!">加入我们</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul> -->
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container footer-container center z-depth-1">
        © 2016 Copyright Text
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name:'FooterBar',
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="scss">
    @import "../assets/scss/variables.scss";

    .page-footer { }
    .footer-container {
        margin-top: 0 !important;
    }
</style>
