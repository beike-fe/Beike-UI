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
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        font-size: 1rem;
        box-sizing: border-box;
        cursor: default;
    }
    *::after,*::before{
        box-sizing: border-box;
    }
    #app{
        overflow: hidden;
    }
</style>
