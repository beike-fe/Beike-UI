import MaskComponent from './index.vue'// 引入写好的vue

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

    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法
    Vue.prototype.$mask = ( msg ) => {
        instance.visible = true;
    };
};

export default Mask;
