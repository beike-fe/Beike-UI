<template>
    <beike-display :message="message"></beike-display>
</template>

<script>
    import BeikeDisplay from "../../components/beike-display/beike-display";
    export default {
        name: "index",
        components: {BeikeDisplay},
        data(){
            return{
                message:[{name:"button",explain:"a button"},
                    {name:"button",explain:"a button"},
                    {name:"button",explain:"a button"},
                    {name:"button",explain:"a button"}]
            }
        },
    }
</script>

<style scoped>

</style>