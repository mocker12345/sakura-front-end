<template lang="html">
    <li class="l6 col">
        <a :href="'#/article/'+hotTopic.id">
            <div class="card hot-topics">
                <div class="card-image">
                    <img class="responsive-img" :src="hotTopic.cover_url" height="" alt="" />
                    <span class="card-title">{{hotTopic.title}}</span>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
export default {
    name: 'HotTopicsItem',
    data() {
        return {

        };
    },
    props: [
        'hotTopic'
    ],
    computed: {},
    ready() {},
    attached() {},
    methods: {

    },
    components: {}
};
</script>

<style lang="scss">
  .hot-topics {
    cursor: pointer;
    .card-image {
      height: 10rem;
      width: 100%
    }
    img {
      height: 100%;
    }
    .card-title {
      word-break: break-all;
      word-wrap: break-word;
      margin: 0;
      padding: 0 5px !important;
      font-size: 0.9rem;
      background: rgba(0,0,0,.4);
      width: 100%;
    }
  }

</style>
