<template>
    <div id="beike-tip-test">
        <beike-tip>这是一条提示内容</beike-tip>
        <beike-mask></beike-mask>
    </div>
</template>

<script>
    import BeikeTip from 'components/beike-tip/index'
    import BeikeMask from 'components/beike-mask/index';

    export default {
        name: 'beike-tip-test',
        components: {
            BeikeMask,
            BeikeTip
        },
        methods: {

        },
        data() {
            return {};
        },
    };
</script>

<style scoped>
    #beike-tip-test {
        margin-top: 50px;
    }
</style>
