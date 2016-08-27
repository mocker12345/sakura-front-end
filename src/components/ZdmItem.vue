<template lang="html">
    <li class="result-item clearfix">
        <a href="#">
            <div class="img-container f-l loading">
                <img src="../assets/images/office.jpg" alt="xxx" />
            </div>
            <div class="result-detail f-l">
                <p class="result-title">
                    这里是标题
                </p>
                <p class="result-price">这里是价格</p>
                <p class="result-content is-truncated">
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
                <ul class="result-footer clearfix">
                    <li class="date f-l">14:14</li>
                    <li class="source f-l">diaodiao</li>
                    <li class="view-result f-r">
                        <p>查看详情</p>
                    </li>
                    <li class="buylink-site f-r">
                        京东
                    </li>
                </ul>
            </div>
        </a>
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
    methods: {},
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
            // margin-top: -5px;
            font-weight: bold;

        }
        .result-price {
            font-size: 16px;
            color: #e60012;
            margin-top: 11px;
            // overflow: hidden;
        }
        .result-content {
            font-size: 18px;
            line-height: 25px;
            color: #666;
            // height: 60px;
            word-wrap: break-word;
            margin-top: 11px;
        }
        .result-footer {
            margin-top: 27px;

        }
        .source {
            margin-left: 10px;
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
