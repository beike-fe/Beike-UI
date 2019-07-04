<template>
    <div id="index">
        <top-menu></top-menu>
        <div class="blank-space"></div>
        <div class="main-content">
            <div class="introduction">
                <span>Welcome!</span><br />
                <span>欢迎使用 Beiker-UI</span><br />
                <span>体验更智能的组件</span><br />
                <router-link to="/test">
                    <button class="login-button" @mouseover="hoverShake_copy($event,8,60)"
                            @mouseleave="shakeStatus = false">立即进入
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import topMenu from 'components/top-menu/top-menu';
    import { debounce, throttle } from 'core/general';

    export default {
        components: {
            'top-menu': topMenu,
        },
        name: 'index',
        data() {
            return {
                shakeStatus: false,

            };
        },
        mounted() {
            function addStyle( element, key, value, time ) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        element.style[ key ] = value;
                        resolve();
                    }, time);
                });
            }

            (async function () {
                let animatedDiv = document.getElementsByClassName('introduction')[ 0 ];
                await addStyle(animatedDiv, 'margin-right', '200px', 0);
                await addStyle(animatedDiv, 'transition', 'all 0.15s ease-out', 700);
                await addStyle(animatedDiv, 'margin-right', '120px', 0);
                await addStyle(animatedDiv, 'margin-right', '180px', 120);
            }());

        },
        methods: {

            //抖动
            hoverShake: function ( event, deg, time ) {
                let element = event.target || event.srcElement;
                let id = null;
                let that = this;
                that.$data.shakeStatus = true;

                function shake( element, direction, deg, time ) {
                    if (!that.$data.shakeStatus) {
                        element.style[ 'transform' ] = 'rotate(0deg)';
                        return;
                    }
                    clearTimeout(id);
                    id = setTimeout(() => {
                        element.style[ 'transform' ] = 'rotate(' + (direction ? '' : '-') + deg + 'deg)';
                        shake(element, !direction, deg, time);
                    }, time);
                }

                setTimeout(shake(element, true, deg, time), time);
            },

            //使用封装节流函数的抖动
            hoverShake_copy: function ( event, deg, time ) {
                let element = event.target || event.srcElement,
                    that = this,
                    direction = true,
                    debounceShake = that.debounce(shake, time),
                    throttleShake = that.throttle(shake, time);

                that.$data.shakeStatus = true;

                function shake() {
                    if (!that.$data.shakeStatus) {
                        element.style[ 'transform' ] = 'rotate(0deg)';
                        return;
                    }
                    setTimeout(() => {
                        element.style[ 'transform' ] = 'rotate(' + (direction ? '' : '-') + deg + 'deg)';
                        direction = !direction;
                        debounceShake();
                        //throttleShake();
                    }, time);
                }

                debounceShake();
                //throttleShake();
            },

        },
    };
</script>

<style lang="less">
    @import "./index";

</style>
