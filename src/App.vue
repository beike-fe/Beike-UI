<template>
    <div id="app">
        <top-menu></top-menu>
        <div class="main">
            <router-view />
        </div>
    </div>
</template>

<script>
    import TopMenu from 'components/top-menu/index';

    export default {
        name: 'App',
        components: { TopMenu },
        methods: {

        },
    };
</script>

<style>
    .main {
        position: relative;
        height: 100vh;
    }

    .side-bar {
        position: absolute;
        left: 0;
        top: 50px;
    }

</style>
