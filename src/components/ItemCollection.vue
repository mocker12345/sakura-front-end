<template>

  <div class="item-collection container">
      <div class="preloader-wrapper big active" v-if="isLoading">
         <div class="spinner-layer spinner-blue">
           <div class="circle-clipper left">
             <div class="circle"></div>
           </div><div class="gap-patch">
           <div class="circle"></div>
             </div><div class="circle-clipper right">
           <div class="circle"></div>
         </div>
       </div>
   </div>
    <ul class="items row " v-show="!isLoading">
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
      var vm = this
    $('#container').imagesLoaded()
      .always( function( instance ) {
          console.log('all images loaded');
      })
      .done( function( instance ) {
          console.log('all images successfully loaded');
          $('.items').masonry({
              // options
              itemSelector: '.item',
          });
      })
      .fail( function() {
          console.log('all images loaded, at least one is broken');
      })
      .progress( function( instance, image ) {
          var result = image.isLoaded ? 'loaded' : 'broken';
          console.log( 'image is ' + result + ' for ' + image.img.src );
      });




  },

  created () {
    //   setTimeout(() => {
        //   $('.items').masonry();
    //   }, 2000)
  },

  attached () {
    //   debugger;
  //   var count = 5;
  // this.$on('ITEM_ATTACHED', () => {
  //     debugger;
  //     if (!(--count)) {
  //         $('.items').masonry({
  //             // options
  //             itemSelector: '.item',
  //         });
  //         return true
  //     }
  // })


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
</style>
