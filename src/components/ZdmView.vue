<template lang="html">
    <div class="container row">
        <div class="zdm-item-collection s12 l8 col">
            <ul class="zdm-item">
                <zdm-item v-for="commodity in commodities" :item="commodity"></zdm-item>
            </ul>
            <div class="progress" v-if="isLoading">
                <div class="indeterminate"></div>
            </div>
            <p class="center-align no-more-tip" v-if="noMore">
                没有更多了~
            </p>
        </div>

        <div class="hot-topics-area col l4 hide-on-med-and-down">
            <h2 class="hot-topics-title"><i class="material-icons">trending_up</i>大家都在看</h2>
            <ul class="row">
              <hot-topics-item></hot-topics-item>
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
            limit: 3,
            offset: 1,
            totalPage: 0,
            commodities: [],
            isLoading: false,
            noMore: false
        }
    },
    created() {
        var that = this
        this.getCommodities(this.limit, this.offset).then((data) => {
            that.commodities = data.data
            that.totalPage = data.total_page
        })
    },
    computed: {},
    ready() {
      var that = this
      $(document).scroll(function() {
        if ($(document).scrollTop() >= $(document).height()-$(window).height()-100) {
            if (that.offset < that.totalPage) {
                that.offset++
                that.isLoading = true
                that.getCommodities(that.limit, that.offset).then((data) => {
                    debugger
                    that.commodities = that.commodities.concat(data.data)
                    that.totalPage = data.total_page
                    that.isLoading = false
                })
            } else {
                that.noMore = true
                that.isLoading = false
            }
        }
      })
    },
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
    .no-more-tip {
        font-size: 18px;
    }
    .zdm-item-collection {
        margin-top: 15px;
    }
    .hot-topics-area {
        margin-top: 15px;
        background: #eee;
        padding-left:20px !important;
        height:300px;
    }
    .zdm-item {
      margin-top:0;
    }
    .hot-topics-title {
      font-size: 16px;
      color: #000;
      margin-bottom: 0!important;
      i {
        vertical-align: top;
        margin-right: 10px;
        color: #ea7780;

      }
    }
</style>
