<<<<<<< HEAD
<template>

  <div class="item-collection container">
    <ul class="item row">
        <item></item>
        <item></item>
        <item></item>
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

  data () {
      return {

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
=======
<template>

  <div class="item-collection container">
    <ul class="items row ">
        <item class="item" img="http://avatar.csdn.net/7/2/D/1_avenccssddnn.jpg"></item>
        <item class="item" img="http://a.diaox2.com/cms/sites/default/files/20160818/goodthing/596_1.jpg"></item>
        <item class="item" img="http://avatar.csdn.net/7/2/D/1_avenccssddnn.jpg"></item>
        <item class="item" img="http://a.diaox2.com/cms/sites/default/files/20160818/goodthing/596_1.jpg"></item>
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

  },

  attached () {
    //   debugger;
    var count = 5;
  this.$on('ITEM_ATTACHED', () => {
      debugger;
      if (!(--count)) {
          $('.items').masonry({
              // options
              itemSelector: '.item',
          });
          return true
      }
  })

  },

  data () {
      return {

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
>>>>>>> 26be839c9cfc883787bbc36cc463fcaedde5ef1c
