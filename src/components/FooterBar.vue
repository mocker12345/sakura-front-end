<template lang="html">
  <footer class="page-footer grey darken-3 z-depth-1">
    <div class="hide-on-med-and-down">
      <div class="row">
        <div class="col l4 s12 offset-l2">
          <h5 class="white-text">淘到好东西</h5>
          <p class="grey-text text-lighten-6">hello world</p>
        </div>
        <div class="col l3 offset-l2 s12">
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container footer-container center z-depth-1">
        © 2016 Copyright
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
  ready() {
      this.timer = setInterval(() => {
          if ($(window).height()-$('.page-footer').height() > $(document.body).height()) {
              $('.page-footer').addClass('fixed')
          } else {
              $('.page-footer').removeClass('fixed')
          }
      }, 200)
  },
  attached() {},
  methods: {},
  components: {},
  beforeDestroy() {
      clearInterval(this.timer)
  }
};
</script>

<style lang="scss">
    @import "../assets/scss/variables.scss";
    .footer-container {
        margin-top: 0 !important;
    }
    // .page-footer
    .page-footer.fixed{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .footer-copyright {
        font-size: 1.25rem;
    }

</style>
