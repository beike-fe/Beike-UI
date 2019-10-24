import templateMessageBox from './index'
import Vue from 'vue'


let MessageBox={};
let instance={};
const defaultProps = {
    header: "标题",
    headerAlign:"start",
    content: "内容",
    contentAlign:"center",
    confirmText: "确认",
    cancelText: "取消",
    operatorAlign:"end",
    confirmCallback: function(){
        alert("点此确认");
    },
    cancelCallback:function(){
        alert("点此取消");
    },
    resolve:null,
    reject:null,
};
let config = defaultProps;

// function execetor( resolve, reject ,qqq) {
//     if(instance.visible)
//         resolve("创建成功");
//     else
//         reject("创建失败");
// }
function initialize(props){
    const messageClass = Vue.extend(templateMessageBox);//拓展的类
    for(let prop in props){
        config[prop] = props[prop];
    }
    instance = new messageClass({
        propsData:config
    });
    console.log("initilize Component");
    instance.$mount();
    document.body.appendChild(instance.$el);
    instance.visible = true;
}


MessageBox.install =function ( Vue ) {

    Vue.prototype.$msgBOX = (p) =>{
        function exector( resolve,reject ) {
            initialize(p);
            instance.resolve = resolve;
            instance.reject = reject;
        }
        return new Promise(exector)
    };

    Vue.prototype.$msgBOXHide = function (  ) {
        instance.visible=false;
    };

};


export default  MessageBox;
