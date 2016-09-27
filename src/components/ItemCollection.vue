<template>

  <div class="item-collection container">
    <div class="progress" v-if="isLoading">
         <div class="indeterminate"></div>
    </div>
    <ul class="items row" >
        <item class="item" v-for="article in articles" :article="article" :article-num="articleNum"></item>
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
      var self = this
      this.$on('is-load',function(){
        $('.items').masonry({
             itemSelector : '.item'
         });
         debugger;
         $('.items').css('visibility', 'visible');
         self.isLoading = false
      })
        // $('.items img').css({
        //           'visibility': 'visible'
        //       })
        // self.isLoading = false
  },
  watch:{
    'articles':function(newVal,oldVal){

      if (newVal.length != 0 && !this.flag) {
        this.articleNum = this.articles.length;
        this.flag = true;
      }
    }
  },

  created () {

  },

  attached () {
  },
  methods:{
    isLoad(){
      $('.items').masonry({
            itemSelector : '.item'
        });
    }
  },

  data () {
      return {
          isLoading: true,
          flag:false,
          articleNum:null
      }
  },

  beforeDestroy () {
      clearInterval(this.timer)
  },

  route: {

  },

  computed: {

  }
}
</script>

<style lang="scss">
    // .item-collection {
    //     overflow: hidden;
    // }
    .progress {
        margin-top: 100px;
    }
    .items {
      visibility: hidden;
      // height: 150px;
      // overflow: hidden;
    }
</style>
