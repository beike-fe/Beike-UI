<template>
    <div class="beike-mask" v-if="visible">1</div>
</template>

<script>
    export default {
        name: 'beike-mask',
        data() {
            return {
                visible: false
            };
        }
    };
</script>

<style lang="less">
    @import './index.less';
</style>
