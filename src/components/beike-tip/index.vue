<template>
    <div class="tip-container">
        <img src="assets/dialog.png" style="width: 250px">
        <div class="content">&nbsp;&nbsp;&nbsp;&nbsp;{{content}}</div>
        <div class="button-container">
            <el-button :type="type" plain size="small" @click="next">{{buttonText}}</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'beike-tip',
        props: {
            direction: {
                type: String,
                default: 'right',
            },
            content: {
                type: String,
                default: '',
            },
            buttonText: {
                type: String,
                default: '下一步',
            },
            type: {
                type: String,
                default: 'plain',
            },
        },
        methods: {
            next: function () {
                this.$emit('next');
            },
        },
    };
</script>

<style scoped>
    @import './index.less';
</style>
