<template lang="html">
  <footer class="page-footer grey darken-3 z-depth-1">
    <div class="">
      <div class="row">
        <div class="col l4 s12 offset-l2">
          <h5 class="white-text">关爱程序员，淘到好东西</h5>
          <p class="grey-text text-lighten-6">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div class="col l3 offset-l2 s12">
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

    .page-footer {
        .white-text {
            font-size: 2rem;
        }
        .grey-text {
            font-size: 1.5rem;
        }
    }
    .footer-copyright {
        font-size: 1.5rem;
    }
    .footer-container {
        margin-top: 0 !important;
    }
</style>
