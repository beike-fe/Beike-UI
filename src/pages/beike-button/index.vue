<template>
    <div id="beike-button-test">
        <beike-button @click="myClick" type="primary" round shake @mouseover="myMouseover">贝壳</beike-button>
        <beike-button type="warning" round hoverEffect>warning</beike-button>
        <beike-button>贝壳</beike-button>
    </div>
</template>

<script>
    import BeikeButton from 'components/beike-button';

    export default {
        name: 'beike-button-test',
        components: {
            BeikeButton,
        },
        methods: {
            myClick: function () {
                console.log('click event');
            },
            myMouseover: function () {
                console.log('mouseover event');
            },
        },
        data() {
            return {};
        },
    };
</script>

<style scoped>
    #beike-button-test {
        margin: 50px;
    }
</style>
