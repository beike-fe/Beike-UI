<template>
    <div class="mainshow">
        <div><beike-sider-se></beike-sider-se></div>
        <div class="showpanel">
            <ul v-for="item in message">{{item.name}}
                <li>
                    <p>{{item.explain}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BeikeSiderSe from "../beike-sider-se/beike-sider-se";
    export default {
        name: "beike-display",
        components: {BeikeSiderSe},
        props: ['message']
    }
    props:{

    }
</script>

<style scoped>
    @import "beike-display.css";
</style>