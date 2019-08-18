<template>
    <div class="main">
        <beike-display><beike-sider class="sider,showpanel"  @change="myClick"> </beike-sider></beike-display>
    </div>
</template>

<script>
    import BeikeSider from "../../components/beike-sider/beike-sider";
    import BeikeSiderSe from "../../components/beike-sider-se/beike-sider-se";
    import BeikeDisplay from "../../components/beike-display/beike-display";
    export default {
        name: "index",
        components: {BeikeDisplay, BeikeSiderSe, BeikeSider},
        created(){

        },
        methods: {

        },
        data() {
            return {};
        },
    }
</script>

<style scoped>
    .main{
        position:relative
    }
    .sider{
        position:absolute;
        left:0;
        top:200px;
    }
</style>