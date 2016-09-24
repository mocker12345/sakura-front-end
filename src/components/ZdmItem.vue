<template lang="html">
    <li class="result-item clearfix">
            <div class="img-container f-l loading">
                <img :src="item.cover_url" alt="" />
            </div>
            <div class="result-detail f-l">
                <p class="result-title" v-text="item.title"></p>
                <p class="result-price">￥<span v-text="item.price"></span></p>
                <p class="result-content is-truncated" v-text="item.summary"></p>
                <ul class="result-footer clearfix">
                    <li class="source f-l"></li>
                    <li class="view-result f-r">
                        <p><a href="{{ item.buy_url }}" target="_blank">查看详情</a></p>
                    </li>
                    <li class="buylink-site f-r" v-text="item.buy_site"></li>
                </ul>
            </div>
    </li>
</template>

<script>
export default {
    name: 'ZdmItem',
    data() {
        return {

        };
    },
    computed: {},
    ready() {},
    attached() {},
    props: [
        'item'
    ],
    methods: {

    },
    components: {}
};
</script>

<style lang="scss">
    @import "../assets/scss/common.scss";
    .result-item {
        padding: 20px;
        overflow: hidden;
        background-color: #fff;
        margin-bottom: 30px;
        &:hover {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
        }
        .img-container {
            position: relative;
            overflow: hidden;
            height: 100%;
            width: 40%;
            padding: 5px;
        }
        img {
            vertical-align: middle;
            display: inline-block;
            width: 100%;
            height: 100%;
        }
        .result-detail {
            width: 57%;
            margin-left: 3%;
            height: 100%;
            padding: 5px;
        }
        .result-title {
            font-size: 20px;
            color: #333;
            overflow: hidden;
            display: block;
            font-weight: bold;

        }
        .result-price {
            font-size: 16px;
            color: #e60012;
            margin-top: 11px;
        }
        .result-content {
            font-size: 18px;
            line-height: 25px;
            color: #666;
            word-wrap: break-word;
            margin-top: 11px;
        }
        .result-footer {
            margin-top: 27px;
            .source {
                background: url(../assets/images/logo_zdm.png);
                width: 100px;
                height: 38px;
            }

        }
        .date, .source {
            padding-top: 10px;
            vertical-align: bottom;
            color: #14191e;
        }
        .view-result {
            p {
                width: 80px;
                height: 30px;
                line-height: 30px;
                font-size: 16px;
                color: #fff;
                background: #ea7780;
                text-align: center;
                margin: 0 !important;
            }
            a {
                color: #fff;
            }
        }
        .buylink-site {
            color: #999;
            font-size: 16px;
            margin-right: 10px;
            line-height: 1;
            padding-top: 10px;
        }
    }

    .loading {

    }
</style>
