<template>
    <div id="navigate"  >
        <div class="blank-space"></div>
        <div class="main-content" >
            <div class="navigator-group">

                <button @click="test">1321jh 3531</button>
            </div>
            <div id="xxx" v-loading="{visible:visible,loadingStyle:'point'}" style="height: 100px;width: 100px;background-color: #66b1ff;">
                {{ visible }}
            </div>
            <div id="xxxx" style="height: 100px;width: 100px;background-color: #66b1ff;">

            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'index',
        data() {
            return {
                visible:true
            };
        },
        methods:{
            test:function (  ) {
                this.$bkLoading.show({
                    target:document.getElementById('xxx')
                });
            }
        },
        mounted() {
            let _this = this;
            setTimeout(function (  ) {
                _this.visible = false;
                console.log('false');
            },5000)
        }
    };
</script>

<style lang="less">
    @import "./index";
</style>
