<template>
    <div class="beike-tip">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/190715_3205l242cd65021e4gf3ik36i0kii_396x294.png"
             style="width: 250px">
        <div class="content">
            <slot></slot>
        </div>
        <div class="button-container">
            <beike-button :type="type" plain @click="next">{{buttonText}}</beike-button>
        </div>
    </div>
</template>

<script>
    import BeikeButton from 'components/beike-button/beike-button';

    export default {
        name: 'beike-tip',
        components: {
            BeikeButton,
        },
        props: {
            direction: {
                type: String,
                default: 'right',
            },
            buttonText: {
                type: String,
                default: '下一步',
            },
            type: {
                type: String,
                default: 'plain',
            },
        },
        methods: {
            next: function () {
                this.$emit('next');
            },
        },
    };
</script>

<style lang="less">
    @import 'index.less';
</style>
