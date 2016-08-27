<template>

  <div class="item-collection container">
    <div class="progress" v-if="isLoading">
         <div class="indeterminate"></div>
    </div>
    <ul class="items row">
        <item class="item" img="http://avatar.csdn.net/7/2/D/1_avenccssddnn.jpg"></item>
        <item class="item" img="http://a.diaox2.com/cms/sites/default/files/20160818/goodthing/596_1.jpg"></item>
        <item class="item" img="http://avatar.csdn.net/7/2/D/1_avenccssddnn.jpg"></item>
        <item class="item" img="http://a.diaox2.com/cms/sites/default/files/20160818/goodthing/596_1.jpg"></item>
        <item class="item" img="http://avatar.csdn.net/7/2/D/1_avenccssddnn.jpg"></item>
        <item class="item" img="http://avatar.csdn.net/7/2/D/1_avenccssddnn.jpg"></item>
        <item class="item" img="http://avatar.csdn.net/7/2/D/1_avenccssddnn.jpg"></item>
        <item class="item" img="http://avatar.csdn.net/7/2/D/1_avenccssddnn.jpg"></item>
        <item class="item" img="http://avatar.csdn.net/7/2/D/1_avenccssddnn.jpg"></item>
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

  ready () {



  },

  created () {
    //   setTimeout(() => {
        //   $('.items').masonry();
    //   }, 2000)
  },

  attached () {
      var self = this
      $('.items').imagesLoaded(() => {
          $('.items').masonry({
              itemSelector : '.item'
          });
          $('.items img').css({
              'visibility': 'visible'
          })
          self.isLoading = false;
      })
  },

  data () {
      return {
          isLoading: true
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
        // padding: 20px;
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
