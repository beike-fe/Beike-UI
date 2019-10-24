/*
类名用下划线命名法  小写加下划线
变量用驼峰命名法  第一个单词的首字母小写 第二个单词的首字母大写
方法用首字母大写
*/
<template>
    <transition name="fadeIn">
        <div id="message_bg" v-if="visible">
            <div id="message_body"  @mousemove="changePosition" @mouseup="endMoving" ref="msgBody">
                <div id="message_header"  @mousedown="startMoving" :class="['f_row','al_baseline','jc_'+headerAlign]">
                    <p >{{ header }}</p>
                </div>
                <div class="line"></div>
                <div id="message_content":class="['al_center','jc_'+contentAlign]">
                    <p>{{ content }}</p>
                </div>
                <div id="message_operations" :class="['jc_'+operatorAlign]">
                    <div :class="['message_operator']">
                        <beike-button  @click="handleConfirm">
                            {{ confirmText }}
                        </beike-button>
                    </div>
                    <div v-if="cancelText" :class="['message_operator']">
                        <beike-button  @click="handleCancel">
                            {{ cancelText }}
                        </beike-button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    // import BeikeButton from 'src/components/beike-button/beike-button';
    import BeikeButton from 'components/beike-button';
    export default {
        name: 'index',
        components: { BeikeButton },
        props: {
            header: {
                type: String,
                default: 'default',
            },
            headerAlign:{
              type:String,
              default:'center'
            },
            content: {
                type: String,
                default: '这是内容部分，可以添加内容',
            },
            contentAlign:{
                type:String,
                default:'center'
            },
            confirmText: {
                type: String,
                default: '确定',
            },
            cancelText: {
                type: String,
                default: '',
            },
            operatorAlign:{
                type:String,
                default:'center'
            },
            confirmCallback: {
                type:Function,
                default: function () {
                    alert('点此确认');
                },
            },
            cancelCallback: {
                type:Function,
                default: function () {
                    alert('点此取消');
                },
            },
            resolve:{
                type:Function,
                default: null
            },
            reject:{
                type:Function,
                default:null
            }
        },
        data() {
            return {
                visible: false,
                x:0,
                y:0,
                node:null,
                isMove:false
            };
        },
        methods:{
            handleConfirm:function (  ) {
                this.confirmCallback();
                if(this.resolve){
                    this.resolve("确定");
                }
                this.close();
            },
            handleCancel:function (  ) {
                this.cancelCallback();
                if(this.resolve){
                    this.resolve("取消");
                }
                this.close();
            },
            close:function (  ) {
                this.visible = false;
            },
            startMoving:function ( e ) {
                let nodeStyle = window.getComputedStyle(this.$refs.msgBody);

                //初始化相对距离
                //设置可以进行移动
                this.startXDis = e.clientX - parseInt(nodeStyle.left);
                this.startYDis = e.clientY - parseInt(nodeStyle.top);
                this.isMove = true;
            },
            changePosition:function ( e ) {
                document.onmouseup = () =>{
                    this.isMove = false;
                };
                if(this.isMove){
                    console.log(e.clientX);
                    this.x = e.clientX - this.startXDis;
                    this.y = e.clientY - this.startYDis;
                    let node = this.$refs.msgBody;
                    node.style.left = this.x + 'px';
                    node.style.top = this.y + 'px';
                }
            },
            endMoving:function (  ) {
                this.isMove = false;
            },
        }
    };
</script>

<style scoped>
    .fadeIn-enter, .fadeIn-leave-to {
        opacity: 0;
        transform: translateX(-10rem);
    }

    .fadeIn-enter-active, .fadeIn-leave-active {
        transition: all 0.3s ease-in-out;
    }

    .fadeIn-enter-to, .fadeIn-leave {

    }
</style>
<style lang="scss">
    @import "flex_layout";
    #message_bg {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        #message_body {
            position: fixed;
            width: 25rem;
            height: 15rem;
            border-radius: 0.5rem;
            overflow: hidden;
            background-color: rgba(255, 255, 255, 1);
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            #message_header {
                height: 20%;
                padding: 0.3rem;
                width: 100%;
                user-select: none;
                cursor: move;
                /*align-self: flex-start;*/
            }
            .line{
                height: 1px;
                width: 100%;
                background-color: rgba(0,0,0,0.1);
            }
            #message_content {
                height: 60%;
                width: 100%;
                padding: 0.3rem;
                display: flex;
            }

            #message_operations {
                height: 20%;
                width: 100%;
                display: flex;
                align-items: center;
                .message_operator{
                    margin: 0px 0.3rem;
                }
            }
        }
    }
</style>
