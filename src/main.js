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

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
