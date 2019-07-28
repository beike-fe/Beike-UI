<template>
    <div id="app">
        <top-menu></top-menu>
        <div class="main">
            <router-view />
            <beike-sider class="sider" @change="myClick"> </beike-sider>
        </div>
    </div>
</template>

<script>
    import TopMenu from 'components/top-menu/index';
    import BeikeSider from 'components/beike-sider/beike-sider'
    export default {
        name: 'App',
        components: { TopMenu,BeikeSider },
        methods:{
            myClick: function () {
                console.log('click event');
            },
        }}
</script>

<style>
    .main{
        position:relative
    }
    .sider{
        position:absolute;
        left:0;
        top:500px;
    }

</style>
