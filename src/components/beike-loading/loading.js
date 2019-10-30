import loading from './index';
import Vue from 'vue';

let instance = null;
let Loading = {};
const defaultConfig = {

}
let config = {}

function createLoading( props ) {
    props = props || {};
    for(let prop in defaultConfig){
        if(props[prop]){
            config[prop] = props[prop]
        }else{
            config[prop] = defaultConfig[prop]
        }
    }
    if (!instance) {
        //挂载到target元素上
        const Loading = Vue.extend(loading);
        instance = new Loading({
            propsData: config,
        });
        instance.$mount();

        let target;
        target = props.target ? props.target : document.body;

        //因为relative是基于最近一个元素的
        //当子元素不为空时 进行margintop的设置
        if(target.childNodes.length){
            let offsetHeight = '-' + window.getComputedStyle(target).height;
            console.log(offsetHeight);
            instance.$el.style.marginTop = offsetHeight;
        }
        console.log(target);
        target.appendChild(instance.$el);
    } else {
        return instance;
    }
}

function removeLoading() {
    if (instance) {
        instance.visible = false;
        instance = null;
    }
}

Loading.install = function ( Vue ) {
    Vue.prototype.$bkLoading = {
        show: createLoading,
        hide: removeLoading,
    };
};

export default Loading;
