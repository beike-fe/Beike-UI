<template>
    <div id="test">
        <!--<beike-top-menu :menuList="menuList">-->
        <!--<img src="../assets/logo.png"/>-->
        <!--</beike-top-menu>-->
        <beike-button @click="myClick" type="primary" round shake>贝壳</beike-button>
        <beike-button type="warning" round hoverEffect>warning</beike-button>
        <beike-button hoverEffect>贝壳</beike-button>
    </div>
</template>

<script>
    import BeikeButton from 'components/beike-button/beike-button';
    import BeikeTopMenu from 'components/beike-top-menu/beike-top-menu'

    export default {
        name: 'test',
        components: {
            BeikeButton,
            BeikeTopMenu
        },
        methods: {
            myClick: function () {
                console.log('click');
            },
        },
        data() {
            return {
                menuList: [
                    '1111',
                    '2222',
                    '3333',

                ],
            };
        },
    };
</script>

<style scoped>

</style>
