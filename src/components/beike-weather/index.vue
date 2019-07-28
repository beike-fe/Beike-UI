<template>
    <div class="beike-weather" ref="beikeWeather"></div>
</template>

<script>
    export default {
        name: 'beike-weather',
        props: {
            weather: {
                type: String,
                default: 'sunny',
                validator: function (value) {
                    return ['sunny', 'cloudy', 'rainy', 'snowy'].indexOf(value) !== -1;
                }
            },
        },
        mounted() {
            this.addWeatherStyle();
        },
        methods: {
            addWeatherStyle() {
                let { beikeWeather } = this.$refs;
                let weather = this.weather;
                beikeWeather.classList.add('will-change');
                beikeWeather.classList.add(weather);
            },
        },
    };
</script>

<style lang="less">
    @import 'index.less';
</style>
