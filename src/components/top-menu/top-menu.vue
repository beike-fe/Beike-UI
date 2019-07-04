<template>
    <div class="top-menu">
        <div class="navigator">
            <div class="left-menu">
                <div class="system-icon">
                    <img class="icon" src="../../pages/index/assets/系统.png" />
                </div>
            </div>
            <div class="right-menu">
                <div class="menu-title" @click="dialogVisible=true">
                    <span>登录</span>
                </div>
            </div>
        </div>
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
    .navigator {
        padding: 0;
        width: 100%;
        height: 50px;
        left: 0;
        top: 0;
        box-shadow: 0 0 3px #333;
        border-bottom: 1px solid whitesmoke;
        position: fixed;
        background-color: white;
        z-index: 1000;

        .right-menu {
            position: fixed;
            padding: 0;
            margin: 0;
            top: 0;
            float: right;
            width: 150px;
            background-color: #dd5347;
            /*background-color: dodgerblue;*/
            height: 51px;
            right: 0;
            line-height: 50px;

            .menu-title {
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                color: white;
                font-weight: normal;
                font-size: 14px;
            }
        }

        .left-menu {
            width: 60px;
            margin-left: 20px;

            .icon {
                width: 30px;
                height: 30px;
                margin: 10px 0 0 0;
            }
        }
    }
</style>
