<template>
    <div class="mainpanel">
        <div v-for="item in info">
            <ul class="ulstyle">{{item.name}}
                <li class="listyle"><button class="buttonstyle">{{item.style}}</button></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "beike-sider-se",
        data(){
            return{
                info:[
                    {name:"按钮",style:"warning"},
                    {name:"导航侧边栏",style:"common"},
                    {name:"顶部栏",style:"common"},
                    {name:"展示板",style:"common"}
                    ]
            }
        }
    }
</script>

<style scoped>
    @import "beike-sider-se.css";
</style>