<template>
    <button class="beike-button"
            v-on:click="$emit('click')"
            v-on:mouseover="$props.shake ? hoverShake($event,8,60) : $emit('mouseover')"
            v-on:mouseleave="$props.shake ? cancelShake() : $emit('mouseleave')"
    >
        <slot></slot>
    </button>
</template>

<script>

    export default {
        name: 'beike-button',
        props: {
            type: {
                type: String,
                default: 'plain',
            },
            round: {
                type: Boolean,
                default: false,
            },
            shake: {
                type: Boolean,
                default: false,
            },
            hoverEffect: {
                type: Boolean,
                default: false,
            },
            gpu: {
                type: Boolean,
                default: false,
            },

        },

        data() {
            return {
                shakeStatus: false,
                hoverShake: function () {
                },
                cancelShake: function () {
                },
            };
        },
        methods: {
            //渲染
            render: function () {
                let { type, round, shake, hoverEffect, gpu } = this.$props;
                let that = this;
                if (round) {
                    this.$el.classList.add('is-round');
                }
                if ((hoverEffect || shake) && gpu) {
                    this.$el.classList.add('gpu');
                }
                if (hoverEffect && !shake) {
                    this.$el.classList.add('hover-effect');
                }
                if (shake) {
                    that.$data.hoverShake = this.hoverShakeCopy;
                    that.$data.cancelShake = function () {
                        that.$data.shakeStatus = false;
                        that.$emit('mouseleave');
                    };
                }
                let className = this.getClassName(type);
                this.$el.classList.add(className);
            },

            getClassName: function ( type ) {
                let classList = {
                    plain: 'plain',
                    primary: 'primary',
                    warning: 'warning',
                };
                return classList[ type ] || 'plain';
            },

            //抖动
            hoverShakeCopy: function ( event, deg, time ) {
                let element = event.target || event.srcElement;
                let id = null;
                let that = this;
                that.$data.shakeStatus = true;
                that.$emit('mouseover');

                function shake( element, direction, deg, time ) {
                    if (!that.$data.shakeStatus) {
                        element.style[ 'transform' ] = 'rotate(0deg)';
                        return;
                    }
                    clearTimeout(id);
                    id = setTimeout(() => {
                        element.style[ 'transform' ] = `rotate(${ direction ? '' : '-' }${ deg }deg`;
                        shake(element, !direction, deg, time);
                    }, time);
                }

                setTimeout(shake(element, true, deg, time), time);
            },

            //动画帧抖动
            hoverShakeCopy_requestAnimationFrame: function ( event, deg, time ) {
                let element = event.target || event.srcElement;
                let that = this,
                    direction = true;
                that.$data.shakeStatus = true;

                function shake() {
                    if (!that.$data.shakeStatus) {
                        element.style[ 'transform' ] = 'rotate(0deg)';
                        return;
                    }
                    element.style[ 'transform' ] = `rotate(${ direction ? '' : '-' }${ deg }deg`;
                    direction = !direction;
                    window.requestAnimationFrame(shake);
                }

                window.requestAnimationFrame(shake);
            },

        },

        mounted() {
            this.render();
        },

    };
</script>

<style lang="less">
    @import './index.less';
</style>
