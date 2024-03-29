import MaskComponent from './index.vue'; // 引入 .vue 文件

const Mask = {};

// 注册Mask
Mask.install = function ( Vue ) {

    // 生成一个Vue的子类
    const MaskConstructor = Vue.extend(MaskComponent);
    // 生成一个该子类的实例
    const instance = new MaskConstructor();

    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    instance.$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);

    const $mask = {
        show: function () {
            instance.visible = true;
        },
        hide: function () {
            instance.visible = false;
        },
        getElement: function () {
            return instance.$el;
        },
    };

    // 通过Vue的原型注册这个对象
    Vue.prototype.$mask = $mask;
};

export default Mask;
