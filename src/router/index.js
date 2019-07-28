import Vue from 'vue'
import Router from 'vue-router'
import index from 'pages/index/index'
import navigate from 'pages/navigate/index'
import beikeButton from 'pages/beike-button/index'
import beikeTip from 'pages/beike-tip/index'
import beikeWeather from 'pages/beike-weather/index'
import beikeHeart from 'pages/beike-heart/index'
import beikeSider from 'pages/beike-sider/index'

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
        },
        {
            path: '/beike-weather',
            name: 'beikeWeather',
            component: beikeWeather
        },
        {
            path: '/beike-heart',
            name: 'beikeHeart',
            component: beikeHeart
        },
        {
            path: '/beike-sider',
            name: 'beikeSider',
            component: beikeSider
        }
    ]
})
