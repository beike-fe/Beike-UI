<template>
    <div class="beike-heart" :class="showClass"></div>
</template>

<script>
    export default {
        name: 'beike-heart',
        props: {
            isFull: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            showClass: function (  ) {
                return this.isFull ? 'full' : 'empty';
            }
        },
        methods: {

        },
    };
</script>

<style lang="less">
    @import 'index.less';
</style>
