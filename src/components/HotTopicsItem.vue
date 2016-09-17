<template lang="html">
    <li class="l6 col">
        <div class="card">
            <div class="card-image">
                <img class="responsive-img" src="../assets/images/office.jpg" height="300" alt="" />
                <span class="card-title">xxxxxxxxxxxxxxxxxxxxx</span>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'HotTopicsItem',
    data() {
        return {

        };
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {}
};
</script>

<style lang="scss">
  .card {
    height: 130px;
    .card-image {
      height: 100%;
    }
    img {
      height: 100%;
    }
  }
  .card-title {
    word-break: break-all;
    word-wrap: break-word;
    margin: 0;
    padding: 0 5px !important;
    font-size: 15px !important;
    background: rgba(0,0,0,.4);
  }
</style>
