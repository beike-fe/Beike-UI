import ToastComponent from './index.vue'; // 引入 .vue 文件

const Toast = {};

// 注册Mask
Toast.install = function ( Vue ) {

    // 生成一个Vue的子类
    const ToastConstructor = Vue.extend(ToastComponent);
    // 生成一个该子类的实例
    const instance = new ToastConstructor();

    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    instance.$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);

    const $toast = {

    };

    // 通过Vue的原型注册这个对象
    Vue.prototype.$toast = $toast;
};

export default Toast;
