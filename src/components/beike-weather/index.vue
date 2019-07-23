<template>
    <div class="beike-weather" ref="beikeWeather"></div>
</template>

<script>
    export default {
        name: 'beike-weather',
        props: {
            weather: {
                type: String,
                required: true,
                default: 'sunny',
            },
        },
        mounted() {
            this.addWeatherStyle();
        },
        methods: {
            addWeatherStyle() {
                let { beikeWeather } = this.$refs;
                let weather = this.weather;
                beikeWeather.classList.add(weather);
            },
        },
    };
</script>

<style lang="less">
    @import 'index.less';
</style>
