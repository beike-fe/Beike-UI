<template>
    <div id="navigate"  >
        <div class="blank-space"></div>
        <div class="main-content" >
            <div class="navigator-group">
                <button @click="test">1321jh 3531</button>
            </div>
            <bk-date-picker @getResult="getDate"></bk-date-picker>
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
            },
            getDate:function ( result ) {
                console.log(result)
                alert(result);
            }
        },
        mounted() {
            //date的周天是0
            //创建时用
            let date = new Date(2019,10,10);
            console.log(date.getDate());
            console.log(date.getDay());
            let date1 = new Date(2019,10,-5);
            console.log(date1.getDate());
            console.log(date1.getDay());
        }
    };
</script>

<style lang="less">
    @import "./index";
</style>
