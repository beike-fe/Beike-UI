<template>
    <div id="beike-heart-test">
        <beike-heart :isFull="thumbsUp" @click="change"></beike-heart>
        <beike-heart :isFull="thumbsUp1"></beike-heart>
    </div>
</template>

<script>
    import BeikeHeart from 'components/beike-heart';

    export default {
        name: 'beike-heart-test',
        components: {
            BeikeHeart,
        },
        data() {
            return {
                thumbsUp: false,
                thumbsUp1: true
            };
        },
        methods: {
            change(){
                console.log(1);
                this.$data.thumbsUp = !this.$data.thumbsUp
            }

        },
    };
</script>

<style scoped>
    #beike-heart-test {
        margin: 50px;
    }
</style>
