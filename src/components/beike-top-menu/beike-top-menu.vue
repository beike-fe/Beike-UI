<template>
    <div class="beike-top-menu">
        <div class="navigator">
            <div class="left-menu">
                <div class="system-icon">
                    <slot></slot>
                </div>
            </div>
            <div class="middle-menu">
                <div class="middle-navigator" v-for="(menu, key) in menuList" :key="key"
                     @click="handleClick($event,key)">
                    {{menu}}
                </div>
            </div>
            <div class="right-menu" v-if="backward" @click="goBack" style="cursor: pointer">
                <div class="menu-title">
                    <span>返回</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'beike-top-menu',
        props: {
            backward: {
                type: Boolean,
                default: false,
            },
            active: {
                type: Number,
                default: -1,
            },
            menuList: {
                type: Array,
            },
        },
        created() {
            let menuList = this.$props.menuList;
            if (menuList && menuList.length > 0) {
                let type = typeof menuList[ 0 ];
                let checkType = menuList.every(( value ) => {
                    return type === typeof value;
                });
            }
        },
        mounted() {
            let index = this.$props.active;
            if (index >= 0) {
                document.getElementsByClassName('middle-navigator')[ index ].classList.add('middle-navigator-active');
            }
        },
        methods: {
            goBack: function () {
                this.$router.back();
            },
            handleClick( event, index ) {
                let ele = event.target || event.srcElement;
                let eleList = document.getElementsByClassName('middle-navigator');
                for (let i = 0; i < eleList.length; i++) {
                    eleList.item(i).classList.remove('middle-navigator-active');
                }
                ele.classList.add('middle-navigator-active');
            },
        },
    };
</script>

<style lang="less">
    @import './beike-top-menu.css';

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
        z-index: 10;

        .right-menu {
            position: fixed;
            padding: 0;
            margin: 0;
            top: 0;
            float: right;
            width: 150px;
            background-color: #dd5347;
            height: 51px;
            right: 0;
            line-height: 51px;

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
            display: inline-block;

            .icon {
                width: 30px;
                height: 30px;
                margin: 10px 0 0 0;
            }
        }
    }

</style>
