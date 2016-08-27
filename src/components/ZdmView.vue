<template lang="html">
    <div class="container row">
        <div class="zdm-item-collection s12 l8 col">
            <ul class="zdm-item">
                <zdm-item v-for="i in [1,2,3,4]"></zdm-item>
            </ul>
        </div>

        <div class="hot-topics-area col l4 hide-on-med-and-down">
            <ul class="row">
                <hot-topics-item></hot-topics-item>
            </ul>
        </div>
    </div>

</template>

<script>
import ZdmItem from './ZdmItem.vue'
import HotTopicsItem from './HotTopicsItem.vue'
export default {
    name: 'ZdmView',
    data() {
        return {
        };
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {
        ZdmItem,
        HotTopicsItem
    }
};
</script>

<style lang="scss">
    .zdm-item-collection {
        margin-top: 15px;
    }
    .hot-topics-area {
        margin-top: 15px;
        background: #eee;
        padding-left:20px !important;
        height:300px;
    }
</style>
