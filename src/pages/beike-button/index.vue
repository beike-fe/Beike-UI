<template>
    <div id="beike-button">
        <beike-button @click="myClick" type="primary" round shake @mouseover="myMouseover">贝壳</beike-button>
        <beike-button type="warning" round hoverEffect>warning</beike-button>
        <beike-button hoverEffect>贝壳</beike-button>
    </div>
</template>

<script>
    import BeikeButton from 'components/beike-button/beike-button';

    export default {
        name: 'beike-button',
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
    #beike-button {
        margin-top: 50px;
    }

</style>
