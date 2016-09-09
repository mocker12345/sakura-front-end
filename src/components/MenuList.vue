<template lang="html">
    <ul class="menu-list">
        <li class="menu-list-item" v-for="item in [1,2,3,4]">
            <a href="javascript:void(0);" class="item-title">父级分类0{{ $index }}</a>
            <i class="material-icons icon-arrow">keyboard_arrow_right</i>
        </li>

    </ul>
</template>

<script>
export default {
    name: 'MenuList',
    data() {
        return {
        };
    },
    computed: {},
    ready() {},
    attached() {
        $('.menu-list-item').on('click', function() {
            $('.menu-list-item').removeClass('active')
            $(this).addClass('active')
        })
    },
    methods: {
        
    },
    components: {}
};
</script>

<style lang="scss">
    $bgColor: #eee;
    $fontColor: #666;
    $hoverBgColor: #ee6e73;
    .menu-list {
        padding: 0 !important;
        position: relative;
        .menu-list-item {
            cursor: pointer;
            position: relative;
            padding: 2px 4px;
        }
        li.active {
            background-color: $hoverBgColor;
            .item-title, .icon-arrow {
                color: #fff;
            }
            .submenu-list {
                display: block;
            }
        }
        .item-title {
            color: $fontColor;
            font-size: 18px;
            padding-left: 10px;
            height: 35px;
            line-height: 35px;
            font-weight: 500;
        }
        .menu-list-item .submenu-list {
            // display: none;
        }
        .menu-list-item {
            top: 0;
            z-index: 2;

        }
        .icon-arrow {
            position: absolute;
            top:0;
            font-size: 40px;
            color: $fontColor;
            right: 0;
            display: inline-block;
            transition: all .4s ease;

        }

    }
</style>
