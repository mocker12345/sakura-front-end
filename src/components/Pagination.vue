<template lang="html">
    <div class="center row">
        <ul class="pagination">
            <li v-bind:class="{'disabled': isPreDisabled, 'waves-effect': !isPreDisabled}"
                v-on:click="pre">
                <a href="#!">
                    <i class="material-icons">chevron_left</i>
                </a>
            </li>
            <li v-bind:class="{'active': cur==index, 'waves-effect': cur!=index}"
                v-for="index in pagenums"
                v-on:click="pageChange(index)">
                <a >{{index}}</a>
            </li>
            <li v-bind:class="{'disabled': isNextDisabled, 'waves-effect': !isNextDisabled}"
                v-on:click="next">
                <a href="#!">
                    <i class="material-icons">
                        chevron_right
                    </i>
                </a>
            </li>
          </ul>
     </div>
</template>

<script>
export default {
    name: 'pagination',
    data() {
        return {
            cur: 1,
            totalPage: 38,
            visiblePage: 10,
            msg: '',
            isNextDisabled: false,
            isPreDisabled: true
        };
    },
    computed: {
        pagenums: function() {
            var lowPage = 1,
                highPage = this.totalPage,
                pageArr =  [];
            if (this.totalPage > this.visiblePage) {
                var subVisiblePage = Math.ceil(this.visiblePage/2)
                if (this.cur > subVisiblePage && this.cur < (this.totalPage - subVisiblePage + 1)) {
                    lowPage = this.cur - subVisiblePage
                    highPage = this.cur + subVisiblePage - 1
                } else if (this.cur <= subVisiblePage) {
                    lowPage = 1
                    highPage = this.visiblePage
                } else {
                    lowPage = this.totalPage - this.visiblePage + 1
                    highPage = this.totalPage
                }
            }
            while (lowPage <= highPage) {
                pageArr.push(lowPage)
                lowPage++
            }
            return pageArr
        }
    },
    ready() {},
    attached() {},
    methods: {
        pageChange: function(page) {
            if (this.cur != page) {
                this.cur = page

            }
        },
        pre: function() {
            if (this.cur > 1) {
                this.cur--
            } else {
                this.cur = 1
            }
        },
        next: function() {
            if (this.cur < this.totalPage) {
                this.cur++
            } else {
                this.cur = this.totalPage
            }
        }
    },
    watch: {
        'cur': function(val, oldVal) {
            this.isPreDisabled = val==1 ? true : false
            this.isNextDisabled = val==this.totalPage ? true : false
        }
    },
    components: {}
};
</script>

<style lang="scss">
    @import "../assets/scss/variables.scss";
    .active {
        background-color: $themeColor !important;
    }
</style>
