import loadComponent from '../components/beike-loading/index'
import Vue from 'vue';
let instance;

const defaultConfig = {
    loadingStyle:'line',
    text:'加载中'
};
let config = {};
const loading = {
    inserted:function ( el,binding ) {
        console.log(el);
        console.log(binding.value);
        let props = binding.value || {};
        for(let prop in defaultConfig){
            if(props[prop]){
                config[prop] = props[prop]
            }else{
                config[prop] = defaultConfig[prop]
            }
        }
        if (!instance) {
            //挂载到target元素上
            const Loading = Vue.extend(loadComponent);
            instance = new Loading({
                propsData: config,
            });
            instance.$mount();

            let target = el;

            //因为relative是基于最近一个元素的
            //当子元素不为空时 进行margintop的设置
            // if(el.childElementCount) {
            //
            //     if (!el.children.length){
            //         console.log(el.children.length)
            //     }
            //     console.log(el.childElementCount)
            //     console.log(el.clientHeight);
            //     console.log(el.offsetHeight);
            //     let offsetHeight = '-' + window.getComputedStyle(el).height;
            //     let offsetWidth = '-' + window.getComputedStyle(el).width;
            //     console.log("parent's height"+offsetHeight);
            //     instance.$el.style.marginTop = offsetHeight;
            //     instance.$el.style.marginLeft = offsetWidth;
            // }

            //当前一个元素无position属性时，则将其position属性改为relative
            //使子元素可以基于其进行移动
            if(!target.style.position){
                target.style.position = 'relative';
            }
            instance.$el.style.left = 0;
            instance.$el.style.top = 0;
            target.appendChild(instance.$el);
        } else {
            console.log('return instance')
            return instance;
        }
    },
    update(el,binding){
        console.log(binding);
        console.log(el);
        console.log(typeof (binding.value))
        if(typeof (binding.value) !== "object"){
            if(binding.value == false){
                instance.visible = false
                loading.unbind(el);
            }
        }else{
            if(binding.value.visible == false){
                instance.visible = false;
                loading.unbind(el);
            }
        }
    },
    unbind( el ) {
        console.log('unbind');
    }
}

export default loading;
