<template>
    <div class="top-menu">
        <div class="navigator">
            <div class="left-menu">
                <div class="system-icon">
                    <img class="icon" src="./assets/system.png" />
                </div>
            </div>
            <div class="right-menu">
                <div class="menu-title" @click="dialogVisible=true">
                    <span>登录</span>
                </div>
            </div>
        </div>
        <div class="placeholder"></div>
    </div>
</template>

<script>
    export default {
        name: 'top-menu',
        props: {
            backward: {
                type: Boolean,
                default: false,
            },
            active: {
                type: Number,
                default: -1,
            },
        },
        created() {

        },
        mounted() {

        },
        methods: {},
    };
</script>

<style lang="less">
    @import './index.less';
</style>
