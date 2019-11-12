// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

//directive
import Vloading from './directive/v-loading';
import Vdrag from './directive/v-drag';

Vue.directive('loading', Vloading);
Vue.directive('drag', Vdrag);
//plugin
import Mask from 'components/beike-mask';
import MessageBox from 'components/beike-messageBox/message_box';
import Loading from 'components/beike-loading/loading';
import DatePicker from './components/beike-datePicker/install';
import Icon from './util/bk_Icon/install';

Vue.config.productionTip = false;
Vue.use(Mask);
Vue.use(MessageBox);
Vue.use(Loading);
Vue.use(DatePicker);
Vue.use(Icon);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
