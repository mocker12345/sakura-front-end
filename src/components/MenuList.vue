<template lang="html">
    <ul class="menu-list">
        <li class="menu-list-item">
            <a href="#" class="item-title">父级分类01</a>
            <ul class="submenu-list">
                <li class="submenu-list-item">
                    <a href="#">子分类01</a>
                </li>
                <li class="submenu-list-item">
                    <a href="#">子分类02</a>
                </li>
                <li class="submenu-list-item">
                    <a href="#">子分类03</a>
                </li>

            </ul>
            <i class="material-icons icon-arrow">keyboard_arrow_right</i>
        </li>
        <li class="menu-list-item">
            <a href="#" class="item-title">父级分类01</a>
            <ul class="submenu-list" >
                <li class="submenu-list-item">
                    <a href="#">子分类01</a>
                </li>
                <li class="submenu-list-item">
                    <a href="#">子分类02</a>
                </li>
                <li class="submenu-list-item">
                    <a href="#">子分类03</a>
                </li>

            </ul>
            <i class="material-icons icon-arrow">keyboard_arrow_right</i>
        </li>
        <li class="menu-list-item">
            <a href="#" class="item-title">父级分类01</a>
            <ul class="submenu-list" >
                <li class="submenu-list-item">
                    <a href="#">子分类01</a>
                </li>
                <li class="submenu-list-item">
                    <a href="#">子分类02</a>
                </li>
                <li class="submenu-list-item">
                    <a href="#">子分类03</a>
                </li>

            </ul>
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
    attached() {},
    methods: {},
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
            &:hover  {
                background-color: $hoverBgColor;
                .item-title, .icon-arrow {
                    color: #fff;
                }
                .submenu-list {
                    display: block;
                }

            }
            // position: relative;
        }
        .item-title {
            color: $fontColor;
            font-size: 16px;
            padding-left: 10px;
            height: 40px;
            line-height: 40px;
            // display: block;

            font-weight: 600;
        }
        .submenu-list, .submenu-list-item {
            width: 210px;
        }
        .submenu-list-item {
            padding: 2px 4px;
            &:hover {
                background-color: $hoverBgColor;
                a {
                    color:#fff;
                }
            }
        }
        .submenu-list {
            font-size: 14px;
            position: absolute;
            top: 0;
            left: 100%;
            display: none;
            background-color: $bgColor;
        }
        .menu-list-item .submenu-list {
            // display: none;
        }
        .menu-list-item {
            // position: relative;
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
        .submenu-list-item {

            a {
                height: 40px;
                line-height: 40px;
                color:#999;
                font-weight: 600;
                padding-left: 15%;
            }
        }

    }
</style>
