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
