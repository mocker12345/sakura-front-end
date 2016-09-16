<template lang="html">
    <div class="container row">
        <div class="zdm-item-collection s12 l8 col">
            <ul class="zdm-item">
                <zdm-item v-for="commodity in commodities" :item="commodity"></zdm-item>
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
            limit: 12,
            offset: 1,
            totalPage: 0,
            commodities: []
        }
    },
    created() {
        var that = this
        this.getCommodities(this.limit, this.offset).then((data) => {
            data = {
                data: [
                    {
                        title: '这里是标题1',
                        cover_url: 'http://search.image.alimmdn.com/344401/d9c82a3a0acdbb5be0c6dd13444e3366d36c21160d8b6cea9713b852@188w_188h_1e%7C188x188-5rc',
                        price: '128',
                        summary: '这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1',
                        date: '2016-09-16 18:00:00',
                        buy_site: '网易严选',
                        buy_url: 'http://you.163.com/',
                    },
                    {
                        title: '这里是标题1',
                        cover_url: 'http://search.image.alimmdn.com/344401/d9c82a3a0acdbb5be0c6dd13444e3366d36c21160d8b6cea9713b852@188w_188h_1e%7C188x188-5rc',
                        price: '128',
                        summary: '这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1',
                        date: '2016-09-16 18:00:00',
                        buy_site: '网易严选',
                        buy_url: 'http://you.163.com/',
                    },
                    {
                        title: '这里是标题1',
                        cover_url: 'http://search.image.alimmdn.com/344401/d9c82a3a0acdbb5be0c6dd13444e3366d36c21160d8b6cea9713b852@188w_188h_1e%7C188x188-5rc',
                        price: '128',
                        summary: '这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1这里是总结1',
                        date: '2016-09-16 18:00:00',
                        buy_site: '网易严选',
                        buy_url: 'http://you.163.com/',
                    },
                ],
                total_page: 14
            }
            that.commodities = data.data
            that.totalPage = data.total_page
        })
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {
        getCommodities: (limit, offset) => {
            return api.commodity.get({
                limit: limit,
                offset: offset
            })
        }
    },
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
