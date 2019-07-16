<template>
    <div class="beike-mask" v-if="this.props.visible">1</div>
</template>

<script>
    export default {
        name: 'beike-mask',
        props: {
            visible: true
        },
    };
</script>

<style lang="less">
    @import './index.less';
</style>
