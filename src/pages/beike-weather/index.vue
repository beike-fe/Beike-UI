<template>
    <div id="beike-weather-test">
        <beike-weather weather="sunny"></beike-weather>
        <beike-weather weather="cloudy"></beike-weather>
        <beike-weather weather="rainy"></beike-weather>
        <beike-weather weather="snowy"></beike-weather>
    </div>
</template>

<script>
    import BeikeWeather from 'components/beike-weather';

    export default {
        name: 'beike-weather-test',
        components: {
            BeikeWeather,
        },
        methods: {

        },
        data() {
            return {};
        },
    };
</script>

<style scoped>
    #beike-weather-test {
        margin: 50px;
    }
</style>
