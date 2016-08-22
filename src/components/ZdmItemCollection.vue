<template>

  <div class="zdm-item-collection s12 l8 col">
    <ul class="zdm-item">
        <zdm-item>
        </zdm-item>
    </ul>
  </div>
</template>

<script>
import ZdmItem from './ZdmItem.vue'

export default {

  name: 'ZdmItemCollection',

  components: {
    ZdmItem
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
    .zdm-item-collection {
        margin-top: 15px;
    }
</style>
