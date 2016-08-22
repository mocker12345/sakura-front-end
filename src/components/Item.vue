<template lang="html">
    <li class="col l4 s6">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="../assets/images/office.jpg">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    Card Title
                    <i class="mdi-navigation-more-vert right"></i>
                </span>
                <p>
                    <a href="#">This is a link</a>
                </p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                    Card Title
                    <i class="mdi-navigation-close right"></i>
                </span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    </li>
    <li class="col l4 s6">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="../assets/images/office.jpg">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    Card Title
                    <i class="mdi-navigation-more-vert right"></i>
                </span>
                <p>
                    <a href="#">This is a link</a>
                </p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                    Card Title
                    <i class="mdi-navigation-close right"></i>
                </span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    </li>
    <li class="col l4 s6">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="../assets/images/office.jpg">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    Card Title
                    <i class="mdi-navigation-more-vert right"></i>
                </span>
                <p>
                    <a href="#">This is a link</a>
                </p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                    Card Title
                    <i class="mdi-navigation-close right"></i>
                </span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    </li>
    <li class="col l4 s6">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="../assets/images/office.jpg">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    Card Title
                    <i class="material-icons right">more_vert</i>
                </span>
                <p>
                    <a href="#">This is a link</a>
                </p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                    Card Title
                    <i class="material-icons right">close</i>
                </span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'Item',
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
        box-shadow: 0 0 0 !important;
        &:hover {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
        }
    }
</style>
