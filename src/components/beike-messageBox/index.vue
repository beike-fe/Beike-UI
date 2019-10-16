/*
类名用下划线命名法  小写加下划线
变量用驼峰命名法  第一个单词的首字母小写 第二个单词的首字母大写
方法用首字母大写
*/
<template>
    <div id="message_bg">
        <div id="message_body">
            <div id="message_header">
                {{ header }}
            </div>
            <div id="message_content">

            </div>
            <div id="message_operation">
                <div id="message_confirm">

                </div>
                <div id="message_cancel">

                </div>
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
    };
</script>

<style scoped>

</style>
<style lang="scss">
    #message_bg {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #333;
        opacity: 0.1;

        #message_body {
            position: fixed;
            overflow: hidden;
            background-color: white;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>
