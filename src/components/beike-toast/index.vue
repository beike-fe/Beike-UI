<template>
    <button v-on:click="$emit('click')"
            v-bind:class="classList"
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

        },

        data() {
            return {

            };
        },
        methods: {

        },

        mounted() {

        },

    };
</script>

<style lang="less">
    @import './index.less';
</style>
