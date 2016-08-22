<template lang="html">
    <div class="center">
        <ul class="pagination">
            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
            <li class="active"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
            <li class="waves-effect"><a href="#!">6</a></li>
            <li class="waves-effect"><a href="#!">7</a></li>
            <li class="waves-effect"><a href="#!">8</a></li>
            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
          </ul>
     </div>
</template>

<script>
export default {
    name: 'pagination',
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
    @import "../assets/scss/variables.scss";
    .active {
        background-color: $themeColor !important;
    }
</style>
