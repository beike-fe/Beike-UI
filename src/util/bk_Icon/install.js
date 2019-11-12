import Vue from 'vue'
import Arrow from './bk-Arrow'
// import doubleArrow from './doubleArrow'
import dArrow from './bk-dArrow'

const Components = {
    Arrow,
    dArrow
}
export default {
    install( Vue ) {
        Object.keys(Components).forEach(
            (key) =>{
                Vue.component(Components[key].name,Components[key]);
                console.log(Components[key]);
            }
        )
        // Vue.component('dArrow',dArrow);
    }
}
