<template>
    <div id="app">
        <top-menu></top-menu>
        <router-view />
    </div>
</template>

<script>
    import TopMenu from 'components/top-menu/index';
    export default {
        name: 'App',
        components: { TopMenu },
    };
</script>

<style>

</style>
