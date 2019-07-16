<template>
    <div id="beike-tip-test">
        <beike-tip>这是一条提示内容</beike-tip>
    </div>
</template>

<script>
    import BeikeTip from 'components/beike-tip'

    export default {
        name: 'beike-tip-test',
        components: {
            BeikeTip
        },
        created(){

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
