// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import Mask from 'components/beike-mask'
import MessageBox from 'components/beike-messageBox/message_box'

Vue.config.productionTip = false;
Vue.use(Mask);
Vue.use(MessageBox);

Vue.directive("drag",{
        bind:function ( element,binding ) {
            let el = element;
            if(!el.style.position){
                //当元素无position属性时，则设置其position为absolute
                console.log(12);
                el.style.position = 'absolute';
            }
            el.onmousedown = function (e) {
            //点击后改变状态
                let disX = e.clientX - el.offsetLeft;
                let disY = e.clientY - el.offsetTop;
                el.onmousemove = function ( e ) {
                    //拖拽时位置的移动
                    el.style.left = (e.clientX - disX)+'px';
                    el.style.top = (e.clientY - disY)+'px';
                }
                document.onmouseup = function ( e ) {
                    //鼠标抬起时的操作
                    el.onmousemove = null;
                    document.onmouseup = null;
                }
            }
        }
    }
)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
