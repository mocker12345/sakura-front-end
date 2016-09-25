<template lang="html">
    <div class="fixed-action-btn" style="bottom: 60px; right: 30px;" v-if="showGoTop">
      <a class="btn-floating btn-large go-top" @click="goTop">
        <i class="material-icons">keyboard_arrow_up</i>
      </a>
    </div>
</template>

<script>
export default {
  data() {
    return {
        showGoTop: false
    };
  },
  computed: {},
  ready() {
      var that = this
      $(document).scroll(() => {
          setTimeout(() => {
              that.showGoTop = $(document).scrollTop() > 1000 ? true : false
          })
      })
  },
  attached() {

  },
  methods: {
      goTop: () => {
          var speed=200
          $('body,html').animate({ scrollTop: 0 }, speed)
          return false
      }
  },
  components: {}
};
</script>

<style lang="scss">
    .fixed-action-btn {
        &:hover {
            background: transparent !important;
        }
    }
    .go-top {
        background: #424242;
        width: 60px !important;
        height: 60px !important;
        border-radius: 50%;
        &:hover {
            background-color: #303030;
            box-shadow: 3px 3px 10px #424242;
        }
        i {
            color: #fafafa;
            line-height: 60px !important;
            font-size: 4.5rem !important;
        }
    }
</style>
