<template>
    <div v-if="visible" id="loadingBg">
        <div class="loadingShow clockAnimation" v-if="loadingStyle == 'point'">
            <div v-for="item in pointNum">
                <div class="point" :style="{ transform:'rotate('+(item*(360/pointNum))+'deg)'}"></div>
            </div>
        </div>
        <div class="loadingShow" v-else-if="loadingStyle == 'line'">
            <div id="loading-ring">
                <div class="outer"></div>
                <div class="middle"></div>
                <div class="inner"></div>
            </div>
        </div>
        <p>{{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: 'index',
        props: {
            loadingStyle: {
                type: String,
                default: 'point',
            },
            text: {
                type: String,
                default: '正在加载',
            },
        },
        data() {
            return {
                pointNum: 9,
                visible: true
            };
        },
        methods: {},
        mounted() {

        }
    };
</script>

<style scoped>

</style>

<style lang="scss">
    @import "loadingScss";
</style>
