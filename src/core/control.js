/**
 * 通过 es6 的 export 特性：export 输出值的引用
 * 构造了一个全局单例 Vue 实例
 * 在这个实例上面调用 $on() $once() $off() $emit()
 * 方便监听和触发全局事件
 */

import Vue from 'vue';
export default new Vue();
