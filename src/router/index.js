import Vue from 'vue'
import Router from 'vue-router'
import index from 'pages/index/index'
import navigate from 'pages/navigate/index'
import beikeButton from 'pages/beike-button/index'
import beikeTip from 'pages/beike-tip/index'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/navigate',
            name: 'navigate',
            component: navigate
        },
        {
            path: '/beike-button',
            name: 'beikeButton',
            component: beikeButton
        },
        {
            path: '/beike-tip',
            name: 'beikeTip',
            component: beikeTip
        }
    ]
})
