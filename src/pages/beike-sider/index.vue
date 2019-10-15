<template>
    <div class="main">
        <beike-sider class="sider" @change="myClick"></beike-sider>
    </div>
</template>

<script>
    import BeikeSider from '../../components/beike-sider/beike-sider';

    export default {
        name: 'index',
        components: { BeikeSider },
        created() {

        },
        methods: {},
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .main {
        position: relative;
    }

    .sider {
        position: absolute;
        left: 0;
        top: 50px;
    }
</style>
