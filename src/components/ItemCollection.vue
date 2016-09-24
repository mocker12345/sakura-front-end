<template>

  <div class="item-collection container">
    <div class="progress" v-if="isLoading">
         <div class="indeterminate"></div>
    </div>
    <ul class="items row">
        <item class="item" v-for="article in articles" :article="article"></item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {

  name: 'ItemCollection',

  components: {
    Item
  },

  props: [
      'articles'
  ],

  ready () {

  },

  created () {

  },

  attached () {
      var self = this
      $('.items').imagesLoaded(() => {
          setTimeout(() => {
            $('.items').masonry({
                itemSelector : '.item'
            });
            $('.items img').css({
                'visibility': 'visible'
            })
          }, 1000)
          self.isLoading = false
      })
  },

  data () {
      return {
          isLoading: true,
          items: []
      }
  },

  route: {

  },

  computed: {

  }
}
</script>

<style lang="scss">
    .item-collection {
        overflow: hidden;
    }
    .progress {
        margin-top: 100px;
    }
    .items {
        img {
            visibility: hidden;
        }
    }
</style>
