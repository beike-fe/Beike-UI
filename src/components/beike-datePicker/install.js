import datePicker from './index'

export default {
    install:function(Vue){
        Vue.component(
            'bk-date-picker',
            datePicker
        )
    }
}
