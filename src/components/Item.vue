<template lang="html">
    <li class="col l4 s6 f-l">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <a :href="'#/article/'+article.id">
                    <img class="activator" src="../assets/load.gif" data-original="{{article.cover_url}}" >
                </a>
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    {{article.title}}
                    <i class="material-icons right">more_vert</i>
                </span>
                <p>
                    <a :href="'#/article/'+article.id" v-text="article.summary"></a>
                </p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                    {{article.title}}
                    <i class="material-icons right">close</i>
                </span>
                <p v-html="article.summary"></p>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'Item',
    data() {
        return {

        }
    },
    props: [
        'article',
        'img',
        'articleNum'
    ],
    computed: {},
    ready() {
      $("img").lazyload({
       failurelimit:40,
       load:this.loadImag
      });

    },
    attached() {
      this.$dispatch('ITEM_ATTACHED');
    },
    methods: {
      loadImag(){
        if(this.articleNum != 0){
          this.articleNum--;
          if(this.articleNum === 0){
            this.$dispatch('is-load')
          }
        }
      }
    },
    components: {}
};
</script>

<style lang="scss">
    .card {
        box-shadow: 0 0 0 !important;
        &:hover {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
        }

        .card-content {
            .card-title {
                line-height: 24px;
                font-size: 1.5rem;
            }
            p a {
                font-size: 1rem;
                color: #606060;
            }
        }
        .card-reveal {
            .card-title {
                font-size: 1.5rem;
            }
            p {
                font-size: 1rem;
            }
        }
    }
</style>
