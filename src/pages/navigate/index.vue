<template>
    <div id="navigate">
        <div class="blank-space"></div>
        <div class="main-content">
            <div class="navigator-group">

                <button @click="test">1321jh 3531</button>
            </div>
            <div v-drag style="width: 50px;height: 50px;background-color: #333333">
                <p>test</p>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'index',
        data() {
            return {

            };
        },
        methods:{
            test:function (  ) {
                let _this = this;
                console.log(123);
                this.$msgBOX({
                    header:"头部分"
                }).then(function ( e ) {
                    alert(e);
                });
                console.log(123);
            }
        }
    };
</script>

<style lang="less">
    @import "./index";
</style>
