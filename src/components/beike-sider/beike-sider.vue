<template>
    <div class="sidebar">
        <div class="sidebar-item">
            <div>
                <button class="guide-open" @click="function(){
                $emit('change');
                expend=false;
                table=true;
                }" v-if="expend">→</button>
                <button class="guide" @click="function(){
                $emit('change');
                expend=true;
                table=false;
                }" v-if="!expend">关闭</button>
            </div>
            <div class="isShow" v-if="table">
                <li class="guide-li">导航</li>
                <div v-for="item in info">
                    <button  @click="jump(item)" class="guide">{{item.name}}</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import BeikeButton from "../beike-button/beike-button"
    export default {
        name: "beike-sider",
        components: {BeikeButton},
        props:{
            isShow:{
                type:Boolean,
                default:false,
            },
            titleShow:{
                type:Boolean,
                default:true,
            },
            isRectangle:{
                type:Boolean,
                default:false,
            }
        },
        data () {
            return {
                info: [
                    {name:"button",
                        path:"/beike-button"},
                    {name:"sider",
                        path:"/beike-sider"},
                    {name:"topmenu",
                        path:""},
                    {name:"navigate",
                        path:"/navigate"},
                    {name:"tip",
                        path:"/tip"},
                    {name:"index",
                        path:"/"},
                ],
                expend: true,
                table: false,
                item: '',
            }
        },
        mounted () {

        },
        methods: {
        jump:function (item) {
            let _path = item.path;
            console.log(_path),
            this.$router.push(
                {path:_path})
        }
        },
    }
</script>

<style scoped>
    @import "beike-sider.css";
</style>